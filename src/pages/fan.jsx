
import Fans from "@/components/fans";
import ContainerPage from "../components/containerPage";

import WrapperPage from "@/components/wrapperPage";

// import Video from "../components/video";


export default function Fan() {

    return (

        <ContainerPage>
            {/* <Overlay /> */}
            <WrapperPage className='items-center md:justify-center sm:mt-12'>
                <Fans />
            </WrapperPage>
        </ContainerPage >
    )
}
