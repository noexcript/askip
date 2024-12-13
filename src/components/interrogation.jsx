export default function Interrogation() {
    return (
        <div className="relative group">
            <span className="flex items-center justify-center w-[20px] h-[20px] md:w-[30px] md:h-[30px] text-sm md:text-lg rounded-full border-[2px] md:border-[3px] bg-slate-950 cursor-default">?</span>
            <div className="flex absolute  opacity-0  group-hover:opacity-100 py-2 p-7 bg-black text-white bg-opacity-90   rounded-md shadow-2xl transition duration-500 ease-in-out w-[320px] roboto-regular text-center text-lg -right-[40%]   md:-left-28 transform md:-translate-x-28  lg:left-1/2  lg:-translate-x-1/2 z-20 top-full">
                Para poder participar, voce precisa preencher os pré-requisitos: Increveve-se no canal youtube, like e comenta no último video, siga ASKIP no instagram.
            </div>
        </div>
    )
}