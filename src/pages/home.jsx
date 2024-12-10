import ButtonLink from "../components/ButtonLink";
import ContainerPage from "../components/containerPage";
import HomeText from "../components/homeText";
import Video from "../components/video";
import WrapperPage from "../components/wrapperPage";


export default function Home() {

    return (
        <ContainerPage>
            <Video
                url={'/video/landingPage.mp4'}
            />
            <WrapperPage>
                <HomeText />
                <ButtonLink />
            </WrapperPage>
        </ContainerPage >
    )
}
