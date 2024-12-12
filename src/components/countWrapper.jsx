import { useContext } from "react"
import { Context } from "../context"
import Count from "./count"

export default function CountWrapper() {
    const { timesLeft } = useContext(Context)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 items-center h-full">
            {Object.entries(timesLeft).map(([key, value], index) => (
                <Count
                    key={index}
                    value={value}
                    label={`${key.toString().charAt(0).toUpperCase()}${key.toString().slice(1)}`}
                />
            ))}
        </div>


    )
}

