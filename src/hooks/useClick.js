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
    client: "",
  });

  const registerClick = async () => {
    try {
      if (!clientId) return;

      const clientRef_ = doc(db, "clients", clientId);

      const data = await getDoc(clientRef_);

      if (!data.exists()) return;

      const clientRef = doc(db, "participants", clientId);
      const newClick = {
        id: clientId,
        clicked: true,
        when: new Date(),
        client: data.data(),
      };
      console.log(data.data());
      await setDoc(clientRef, newClick);
      setParticipant(newClick);
    } catch (error) {
      console.error("Error to register click: " + error);
    }
  };

  const trackParticipant = async () => {
    try {
      if (!clientId) return;

      const clientRef_ = doc(db, "clients", clientId);
      const data = await getDoc(clientRef_);
      if (!data.exists()) return;

      const clientRef = doc(db, "participants", clientId);
      const participantDoc = await getDoc(clientRef);
      console.log(participantDoc.data())

      if (participantDoc.exists()) {
        setParticipant(participantDoc.data());
      } else {
        setParticipant((prev) => ({
          ...prev,
          id: "",
          clicked: false,
          when: "",
          client: "",
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
