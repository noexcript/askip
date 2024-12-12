import { v4 as uuidv4 } from "uuid";
const getOrCreatedClientId = () => {
  let clientId = localStorage.getItem("clientId");
  if (!clientId) {
    clientId = uuidv4();

    localStorage.setItem("clientId", clientId);
  }
  return clientId;
};

export default getOrCreatedClientId;
