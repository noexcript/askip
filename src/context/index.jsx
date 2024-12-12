import { createContext } from "react";
import { useCount } from "../hooks/useCount";
import { useParticipant } from "../hooks/useParticipan";

const Context = createContext();

const CountProvider = ({ children }) => {
  const { timesLeft } = useCount();
  const { click, storeClick } = useParticipant()

  return (
    <Context.Provider value={{ timesLeft, click, storeClick }}>
      {children}
    </Context.Provider>
  );
};

export { CountProvider, Context };
