
import ReactConfetti from "react-confetti";
import  useWindowSize  from "react-use/lib/useWindowSize";

export default function Congratulation() {
    const { width, height } = useWindowSize();
    return (
        
        <ReactConfetti width={width} height={height} recycle={false} className="overflow-hidden" />
    )
}