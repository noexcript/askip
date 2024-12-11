import ButtonLink from "../components/buttonLink";
import ContainerPage from "../components/containerPage";
import HomeText from "../components/homeText";
import Overlay from "../components/overlay";
import WrapperPage from "../components/wrapperPage";


export default function Home() {

    return (
        <ContainerPage>


            {/* <Overlay /> */}
            <WrapperPage className="md:justify-center">
                <HomeText />
                <ButtonLink />
            </WrapperPage>
        </ContainerPage >
    )
}
