import ButtonLink from "../components/buttonLink";
import ContainerPage from "../components/containerPage";
import HomeText from "../components/homeText";

import WrapperPage from "../components/wrapperPage";



export default function Home() {

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
