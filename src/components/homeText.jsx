import TypewriterEffect from "./typewriterEffect";

export default function HomeText() {
    return (
        <div className="container flex flex-col gap-8 md:gap-4 w-full lg:w-[75%] text-white ">

            <p className="text-xl md:text-2xl lg:text-4xl font-light leading-[40px] lg:leading-[50px] font-party">
                Para poder participar, voce precisa preencher os pré-requisitos: Increveve-se ao canal youtube, like e comenta no último video, siga ASKIP no instagram.
            </p>


            <p className="text-sm md:text-md lg:text-2xl font-semiBold italic leading-snug city">
                »» OBS: Todas as etapas são de caracter obrigatório
            </p>
            <p className="text-sm md:text-md lg:text-2xl   leading-snug city">A falta de uma das etapas te tornará ilegivel ao prémio</p>
        </div>
    )
}