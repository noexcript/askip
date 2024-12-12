import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";

const useParticipant = () => {
  const [click, setClick] = useState(0);
  const clickCollectionRef = collection(db, "clicks");

  const getClicks = async () => {
    try {
      const q = query(
        clickCollectionRef,
        orderBy("timestamp", "desc"),
        limit(1)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const lastDoc = querySnapshot.docs[0].data();
        setClick(lastDoc.count || 0);
      }
    } catch (error) {
      console.error("Erro ao buscar cliques:", error);
    }
  };

  const storeClick = async () => {
    try {
      const newClickCount = click + 1;

      await addDoc(clickCollectionRef, {
        count: newClickCount,
        timestamp: new Date(),
      });
      setClick(newClickCount);
    } catch (error) {
      console.error("Erro ao registrar clique:", error);
    }
  };

  useEffect(() => {
    getClicks();
  }, []);

  return {
    getClicks,
    storeClick,
    click,
  };
};

export { useParticipant };
