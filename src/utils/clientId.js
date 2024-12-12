const getOrCreatedClientId = () => {
  let clientId = localStorage.getItem("clientId");
  if (!clientId) {
    clientId = uuidv4();

    localStorage.setItem("clientId", clientId);
  }
  return clientId;
};

export default getOrCreatedClientId;
