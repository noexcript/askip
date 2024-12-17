import { useContext, useEffect } from "react";
import ContainerPage from "../components/containerPage";
import WrapperPage from "../components/wrapperPage";
import { Context } from "../context";
import Paragraph from "../components/paragraph";


export default function About() {
    const { setTiming } = useContext(Context)


    useEffect(() => {
        setTiming(true)
    })

    return (
        <ContainerPage className='justify-start flex-col'>


            {/* <Overlay /> */}
            <WrapperPage className="md:justify-center gap-36 py-4 items-start ">
                <Paragraph>
                    <div>
                        <div className="flex gap-4 flex-row items-center">
                            
                            <span className="text-red-500  text-4xl font-norma"><strong>AskipMob</strong> </span>
                        </div>
                        <p className="w-full text-white text-justify indent-16 text-2xl font-thin leading-snug mt-4">
                            É um coletivo e produtora musical que reúne artístas que se definem pela inovação e pela criatividade contemporânea . Com o objetivo de transformar ideias em projetos de impacto, o coletivo combina talentos emergentes, tecnologias modernas e uma visão estratégica para criar experiências autênticas e cativantes. Mais que produzir música, a Askip Mob actua em diversas áreas artísticas promovendo, deste modo, conexões emocionais e culturais, consolidando-se como referência na criação de música e arte moderna.
                        </p>
                    </div>
                    <div className="flex w-full gap-2 flex-col items-">
                        <div className="flex gap-4 flex-row">
                            <img src="/img/sorteio.png" alt="" className="w-[50px]" />
                            <span className="text-white uppercase text-2xl  ">SORTEIO</span>
                        </div>
                        <p className="w-full text-white text-justify text-2xl font-thin leading-snug indent-16 mt-2">
                            Foi criado como comemoração do primeiro ano de atuação do coletivo, mesmo que sútil os primeiros projetos foram bem aceitos pelo o primeiro público da MOB. Por este feito, queremos selar este ano e marcar um novo arco com o primeiro projeto solo do artista  <strong><i>YOUNG KILLAN</i></strong> com mixtape <strong>D13</strong> . Não perca o seu tempo e resgate o seu prêmio.
                        </p>
                    </div>
                </Paragraph>
            </WrapperPage>
        </ContainerPage >
    )
}
