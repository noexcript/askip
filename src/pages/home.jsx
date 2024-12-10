import { useRef } from "react";
import ButtonLink from "../components/ButtonLink";
import HomeText from "../components/homeText";


export default function Home() {

    const videoRef = useRef(null);

  // Função chamada quando o vídeo termina
  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reinicia o vídeo
      videoRef.current.play(); // Começa a reprodução imediatamente
    }
  };

    return (
        <div className=" relative w-full  h-[calc(100vh-7rem)]  md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4.5rem)] xl:h-[calc(100vh-4.5rem)] flex items-center justify-center">
            <video  className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                onEnded={handleVideoEnd}
            >

                <source src="/video/landingPage.mp4" type="video/mp4" />

                Your browswer doesn't support videos.

            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            <div className="container w-full flex-col flex h-full items-start justify-center  p-4 gap-5 relative z-10">
                <HomeText />
                <ButtonLink />
            </div>
        </div>
    )
}