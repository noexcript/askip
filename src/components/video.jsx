import { useRef } from "react";

export default function Video({ url }) {
    const videoRef = useRef(null);

    const handleVideoEnd = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    };
    return (
        <>

            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            <video className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                onEnded={handleVideoEnd}
            >

                <source src={url} type="video/mp4" />

                Your browswer doesn't support videos.

            </video>
        </>
    )
}