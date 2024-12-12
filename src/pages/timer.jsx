
import Congratulation from "../components/congratulation";
import ContainerPage from "../components/containerPage";
import CountDown from "../components/countDown";
import Overlay from "../components/overlay";

import WrapperPage from "../components/wrapperPage";


export default function Timer() {

    return (

        <ContainerPage>
                <Congratulation  />
            {/* <Overlay /> */}
            <WrapperPage className='items-center md:justify-center  flex-col'>
                <CountDown />
            </WrapperPage>
        </ContainerPage >
    )
}
