import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase";
import getOrCreatedClientId from "../utils/clientId";

const useClient = () => {
  const [clientData, setClientData] = useState({
    id: "",
    firstVisit: "",
    lastVisit: "",
    visitCount: 0,
    preferences: {
      fingerprint: {
        userAgent: "",
        language: "",
        screenResolutation: "",
        timezone: "",
      },
      initialEntryPage: "",
    },
  });

  const generateClientFingerprint = () => {
    return {
      userAgent: navigator.userAgent,
      language: navigator.language,
      screenResolutation: `${window.screen.width}x${window.screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
  };

  

  const trackClientVisit = async () => {
    const clientId = getOrCreatedClientId();
    const fingerprint = generateClientFingerprint();

    try {
      const clientRef = doc(db, "clients", clientId);
      const clientDoc = await getDoc(clientRef);

      if (!clientDoc.exists()) {
        const newClientData = {
          id: clientId,
          firstVisit: new Date(),
          lastVisit: new Date(),
          visitCount: 1,
          preferences: {
            fingerprint,
            initialEntryPage: window.location.pathname,
          },
        };


        await setDoc(clientRef, newClientData);

        setClientData(newClientData);
      } else {
        const updatedData = {
          ...clientDoc.data(),
          lastVisit: new Date(),
          visitCount: (clientDoc.data().visitCount || 0) + 1,
        };

        await updateDoc(clientRef, updatedData);
        setClientData(updatedData);
      }
    } catch (error) {
      console.error("Erro ao rastear client:  ", error);
    }
  };

  useEffect(() => {
      trackClientVisit();
    
  });

  //   const updateClientPreferences = async (newPreferences) => {
  //     if (clientData) {
  //       try {
  //         const clientRef = doc(db, "clients", clientData.id);

  //         await setDoc(
  //           clientRef,
  //           {
  //             preferences: {
  //               ...clientData.preferences,
  //               ...newPreferences,
  //             },
  //           },
  //           { merge: true }
  //         );

  //         setClientData((prev) =>
  //           prev
  //             ? {
  //                 ...prev,
  //                 preferences: {
  //                   ...prev.preferences,
  //                   ...newPreferences,
  //                 },
  //               }
  //             : null
  //         );
  //       } catch (error) {
  //         console.error("Erro ao actualizar preferências");
  //       }
  //     }
  //   };
  return {
    clientData,
    // updateClientPreferences,
  };
};

export { useClient };
