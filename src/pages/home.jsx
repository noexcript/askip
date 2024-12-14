import { useNavigate, useParams } from "react-router-dom";
import ButtonLink from "../components/buttonLink";
import ContainerPage from "../components/containerPage";
import HomeText from "../components/homeText";

import WrapperPage from "../components/wrapperPage";
import { useContext, useEffect } from "react";
import { Context } from "../context";



export default function Home() {

    const { storeClick, registerClick, setTiming } = useContext(Context)
    const { link } = useParams();
    const navigation = useNavigate()
    useEffect(() => {
        setTiming(true)
        if (link) {
            storeClick()
            registerClick()
            navigation('/')
        }
    })

    return (
        <ContainerPage>


            {/* <Overlay /> */}
            <WrapperPage className="md:justify-center gap-36 py-6 min-h-[350px]">
                <HomeText />
                <ButtonLink />
            </WrapperPage>
        </ContainerPage >
    )
}
