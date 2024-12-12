import TypewriterEffect from "./typewriterEffect";

export default function HomeText() {
    return (
        <div className="container flex flex-col gap-8 md:gap-4 w-full lg:w-[75%] text-white ">

            <p className="text-xl md:text-2xl lg:text-5xl  leading-[40px] lg:leading-[70px] font-party text-center font-extrabold roboto-black ">
            Ganhe até €1500,00 
            </p>


            <p className="text-sm md:text-md lg:text-2xl font-semiBold italic leading-snug roboto-regularn text-center ">
                Todas as etapas são de caracter obrigatório
            </p>
            <p className="text-sm md:text-md lg:text-2xl   leading-snug roboto-regular text-center ">A falta de uma das etapas te tornará ilegível ao prémio</p>
        </div>
    )
}