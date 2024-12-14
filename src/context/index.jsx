import { createContext, useEffect, useState } from "react";
import { useCount } from "../hooks/useCount";
import { useParticipant } from "../hooks/useParticipan";
import { useClick } from "../hooks/useClick";
import { useClient } from "../hooks/useClient";

const Context = createContext();

const CountProvider = ({ children }) => {
  const { timesLeft, timesLeftTip } = useCount();
  const { click, storeClick } = useParticipant()
  const { participant, registerClick } = useClick()
  const [isTiming, setTiming] = useState(false)
  const { trackClientVisit } = useClient()


  useEffect(() => {
    trackClientVisit()
  }, [])

  return (
    <Context.Provider value={{ timesLeft, click, storeClick, participant, registerClick, timesLeftTip, setTiming, isTiming }}>
      {children}
    </Context.Provider>
  );
};

export { CountProvider, Context };
