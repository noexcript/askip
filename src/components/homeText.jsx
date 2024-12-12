import TypewriterEffect from "./typewriterEffect";

export default function HomeText() {
    return (
        <div className="container flex flex-col gap-8 md:gap-4 w-full lg:w-[75%] text-white">

            <p className="  md:flex-row text-3xl   md:text-6xl justify-center lg:text-6xl xl:text-8xl  leading-[40px] lg:leading-[70px] font-party text-center font-extrabold roboto-black flex gap-2items-start gap-2">
            Ganhe até €1500,00 <span className=" flex items-center justify-center w-[20px] h-[20px] md:w-[30px] md:h-[30px] text-sm md:text-lg rounded-full border-[2px] md:border-[3px] bg-slate-950">?</span>
            </p>


            {/* <p className="text-sm md:text-md lg:text-2xl font-semiBold  leading-snug roboto-regularn text-center ">
            Para poder participar, voce precisa preencher os pré-requisitos: Increveve-se no canal youtube, like e comenta no último video, siga ASKIP no instagram.
            </p> */}
            <p className="text-xl md:text- lg:text-2xl font-semiBold italic leading-snug roboto-regularn text-center ">
                Todas as etapas são de caracter obrigatório
            </p>
            <p className="text-md md:text-md lg:text-2xl   leading-snug roboto-regular text-center ">A falta de uma das etapas te tornará ilegível ao prémio</p>
        </div>
    )
}