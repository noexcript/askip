const timesLeft_ = {
    'dias': 0,
    'horas': 0,
    'mins': 0,
    'seg': 0,
}


export default function Timer() {
    const { timesLeft, click, participant } = useContext(Context)
    return (
        <div className="w-full">
            <div className="flex gap-4 text-sm font-bold">

                {!participant.clicked && Object.entries(timesLeft_).map(([key, value], index) => (
                    <div className="flex flex-col items-center justify-center" key={index}>
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