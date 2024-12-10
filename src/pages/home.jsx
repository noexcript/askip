import ButtonLink from "../components/ButtonLink";
import HomeText from "../components/homeText";
import Video from "../components/video";


export default function Home() {

    return (
        <div className=" relative w-full  h-[calc(100vh-7rem)]  md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4.5rem)] xl:h-[calc(100vh-4.5rem)] flex items-center justify-center">

            <Video url={'/video/landingPage.mp4'} />
            <div className="container w-full flex-col flex h-full items-start justify-center  p-4 gap-5 relative z-10">
                <HomeText />
                <ButtonLink />
            </div>
        </div>
    )
}
