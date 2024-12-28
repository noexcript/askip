
import Winner from "@/components/winner";
import ContainerPage from "../components/containerPage";
import Overlay from "../components/overlay";
import WrapperPage from "@/components/wrapperPage";

// import Video from "../components/video";


export default function Luck() {

    return (

        <ContainerPage>
            {/* <Overlay /> */}
            <WrapperPage className='items-center md:justify-center sm:mt-12'>
                <Winner />
            </WrapperPage>
        </ContainerPage >
    )
}
