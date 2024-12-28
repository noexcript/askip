import { Context } from "@/context"
import Timer from "@/pages/timer";
import { useContext } from "react"


export default function TimingMiddleware({ children }) {
    const { participant } = useContext(Context)

    const isClicked = !participant.clicked
    return isClicked ? children : <Timer />;

}