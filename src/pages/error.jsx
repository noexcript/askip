import ContainerPage from "@/components/containerPage";
import Overlay from "@/components/overlay";
import Paragraph from "@/components/paragraph";


export default function Error() {


    return (
        <ContainerPage>

            <OverlayLogo />
            <Overlay />
            <WrapperPage className="md:justify-center gap-36 py-4 items-start h-full relative">
                <Paragraph>
                    <div className="flex w-full flex-col">
                        <h1 className="w-full text-white whitespace-break-spaces text-lg font-[500px] text-center md:text-2xl  leading-snug ">Comunicado Oficial de Cancelamento do Sorteio</h1>
                    </div>
                    <div className="flex w-full flex-col">
                        <p className="w-full text-white whitespace-break-spaces text-lg font-[500px] text-center md:text-2xl  leading-snug ">Prezados participantes,</p>
                    </div>
                    <div className="flex w-full flex-col">
                        <p className="w-full text-white whitespace-break-spaces text-lg font-[500px] text-center md:text-2xl  leading-snug ">
                           Lamentamos informar que, devido a uma série de reclamações recebidas e à crescente desconfiança quanto à integridade do sorteio, decidimos, de forma responsável, cancelar o evento. A transparência e a confiança de todos são nossa prioridade, e não podemos prosseguir sem garantir que todos se sintam seguros e bem tratados.
                        </p>
                    </div>
                    <div className="flex w-full flex-col">
                        <p className="w-full text-white whitespace-break-spaces font-[500px] text-lg text-center md:text-2xl  leading-snug ">
                            Nosso compromisso é com a honestidade e o respeito por todos os nossos participantes. Agradecemos a todos pela participação e apoio.
                        </p>
                    </div>
                    <div className="flex w-full flex-col">
                        <p className="w-full text-white whitespace-break-spaces font-[500px] text-lg text-center md:text-2xl  leading-snug mt-2">
                            Atenciosamente, equipe ASKIPMOB.
                        </p>
                    </div>
                </Paragraph>
            </WrapperPage>
        </ContainerPage >
    )
}
function WrapperPage({ children, className }) {
    return (
        <div className={`container w-full flex-col flex  items-center justify-center bg-transparent p-4 gap-5 ${className && className} overflow-x-hidden`}>
            {children}
        </div>
    )
}


function OverlayLogo() {
    return <img className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-1/2 h-auto object-fill"
        src="/img/logo.png"
    />
}

