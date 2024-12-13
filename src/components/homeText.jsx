import Interrogation from "./interrogation";
export default function HomeText() {
    return (
        <div className="container flex flex-col gap-8 md:gap-4 w-full lg:w-[75%] text-white">
            <div className=" md:flex-row text-3xl   md:text-6xl justify-center lg:text-6xl xl:text-8xl  leading-[40px] lg:leading-[70px] font-party text-center font-extrabold roboto-black flex gap-2items-start gap-2">
                <span>Ganhe até €1500,00</span>
                <Interrogation />

            </div>
            <p className="text-xl md:text- lg:text-2xl font-semiBold italic leading-snug roboto-regularn text-center ">
                Todas as etapas são de caracter obrigatório
            </p>
            <p className="text-md md:text-md lg:text-2xl   leading-snug roboto-regular text-center ">A falta de uma das etapas te tornará ilegível ao prémio</p>
        </div>
    )
}