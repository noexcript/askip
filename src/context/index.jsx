import { createContext } from "react";
import { useCount } from "../hooks/useCount";
import { useParticipant } from "../hooks/useParticipant";
import { useClick } from "../hooks/useClick";

const Context = createContext();

const CountProvider = ({ children }) => {
  const { timesLeft } = useCount();
  const { click, storeClick } = useParticipant()
  const { participant, registerClick } = useClick()

  return (
    <Context.Provider value={{ timesLeft, click, storeClick, participant, registerClick }}>
      {children}
    </Context.Provider>
  );
};

export { CountProvider, Context };
