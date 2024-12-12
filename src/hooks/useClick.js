import { doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import getOrCreatedClientId from "../utils/clientId";

const useClick = () => {
  const clientId = getOrCreatedClientId();
  const [participant, setParticipant] = useState({
    id: "",
    clicked: false,
    when: "",
  });

  const registerClick = async () => {
    try {
      if (!clientId) return;

      const clientRef = doc(db, "participants", clientId);
      const newClick = {
        id: clientId,
        clicked: true,
        when: new Date(),
      };
      await setDoc(clientRef, newClick);
      setParticipant(newClick);
    } catch (error) {
      console.error("Error to register click: " + error);
    }
  };

  const trackParticipant = async () => {
    try {
      if (!clientId) return;

      const clientRef = doc(db, "participants", clientId);
      const participantDoc = await getDoc(clientRef);

      if (!participantDoc.exists()) {
        const clientRef = doc(db, "participants", clientId);
        const newClick = {
          id: clientId,
          clicked: true,
          when: new Date(),
        };
        await setDoc(clientRef, newClick);
        setParticipant(newClick);
      } else {
        setParticipant((prev) => ({
          ...prev,
          id: "",
          clicked: false,
          when: "",
        }));
      }
    } catch (error) {
      console.error("Error to get participant:  ", error);
    }
  };

  useEffect(() => {
    trackParticipant();
  }, []);

  return {
    participant,
    registerClick,
  };
};

export { useClick };
