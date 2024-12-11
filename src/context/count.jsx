import { createContext } from "react";
import { useCount } from "../hooks/useCount";

const CountContext = createContext();

const CountProvider = ({ children }) => {
  const { timesLeft } = useCount();

  return (
    <CountContext.Provider value={{ timesLeft }}>
      {children}
    </CountContext.Provider>
  );
};

export { CountProvider, CountContext };
