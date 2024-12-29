import { decrypt, encrypt } from "@/utils/cripto";
import { useCallback, useEffect, useState } from "react";


const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const decryptData = useCallback((data) => {
    return data ? decrypt(data) : null;
  }, []);

  const encryptData = useCallback((data) => {
    return encrypt(data);
  });

  const signin = (username, password) => {
    if (username === "youngkillan@askipmob.org" && password === "Trx@15000") {
      const userData = { username, password };
      const encryptedData = encryptData(userData);
      localStorage.setItem("user", encryptedData);
      setUser(username);
      setIsAuthenticated(true);
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const decryptedUser = decryptData(storedUser);
      if (decryptedUser) {
        const { username } = decryptedUser;
        setUser(username);
        setIsAuthenticated(true);
      }
    }
  }, [decryptData]);

  const signout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
  };

  return {
    user,
    isAuthenticated,
    signin,
    signout,
  };
};

export { useAuth };
