import { useContext } from "react"
import { Context } from "../context"


export default function Timing() {
    const { timesLeftTip, click, participant, isTiming } = useContext(Context)
    return (
        <div className="w-full bg-slate-950">
            <div className="gap-2 text-sm font-bold flex items-center justify-center text-blue-400 p-3  ">

                {(!participant.clicked || isTiming) && Object.entries(timesLeftTip).map(([key, value], index) => (
                    <div className="flex flex-row items-center justify-center roboto-medium border p-2 w-[40px] h-[30px] rounded-sm border-blue-400" key={index}>
                        <span>{value}</span>
                        <span className="hidden md:flex">{key}</span>
                    </div>
                ))
                    // Object.entries(timesLeft_).map(([key, value], index) => (
                    //     <div className="flex flex-col items-center justify-center" key={index}>
                    //         <span>{value}</span>
                    //         <span className="hidden md:flex">{key}</span>
                    //     </div>
                    // ))
                }

            </div>
        </div>
    )
}