import { v4 as uuidv4 } from "uuid";

const getOrCreatedClientId = () => {
  try {
    if (typeof localStorage !== "undefined") {
      let clientId = localStorage.getItem("clientId");
      if (!clientId) {
        clientId = uuidv4();
        localStorage.setItem("clientId", clientId);
      }
      return clientId;
    }
  } catch (error) {
    console.warn("localStorage não está disponível. Usando ID temporário.");
  }
  return uuidv4();
};

export default getOrCreatedClientId;
