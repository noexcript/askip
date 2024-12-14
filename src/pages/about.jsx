import { useContext, useEffect } from "react";
import ContainerPage from "../components/containerPage";
import WrapperPage from "../components/wrapperPage";
import { Context } from "../context";


export default function About() {
     const { setTiming } = useContext(Context)
    
    
        useEffect(() => {
            setTiming(true)
        })

    return (
        <ContainerPage>


            {/* <Overlay /> */}
            <WrapperPage className="md:justify-center gap-36 py-4">
                {/* <HomeText />
                <ButtonLink /> */}
            </WrapperPage>
        </ContainerPage >
    )
}
