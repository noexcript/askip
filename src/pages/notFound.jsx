import { useContext, useEffect } from "react";
import ContainerPage from "../components/containerPage";
import WrapperPage from "../components/wrapperPage";
import { Context } from "../context";

export default function NotFound() {
    const { setTiming } = useContext(Context)
    
    
    useEffect(() => {
        setTiming(true)
    }, [])
    return (
        <ContainerPage>

            <WrapperPage className="md:justify-center gap-36 py-6 min-h-[350px]">
                <img
                    src="/img/not_found.png"
                    alt="Image Responsive"
                    className="w-full sm:w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/2 "
                />
            </WrapperPage>


        </ContainerPage >
    )
}