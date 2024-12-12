import { createContext } from "react";
import { useCount } from "../hooks/useCount";
import { useParticipant } from "../hooks/useParticipan";
import { useClick } from "../hooks/useClick";

const Context = createContext();

const CountProvider = ({ children }) => {
  const { timesLeft,timesLeftTip } = useCount();
  const { click, storeClick } = useParticipant()
  const { participant, registerClick } = useClick()

  return (
    <Context.Provider value={{ timesLeft, click, storeClick, participant, registerClick, timesLeftTip }}>
      {children}
    </Context.Provider>
  );
};

export { CountProvider, Context };
