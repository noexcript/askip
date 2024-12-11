
import Congratulation from "../components/congratulation";
import ContainerPage from "../components/containerPage";
import CountDown from "../components/countDown";
import Overlay from "../components/overlay";

import WrapperPage from "../components/wrapperPage";


export default function Timer() {

    return (

        <ContainerPage>
            {/* <Overlay /> */}
            <WrapperPage className='items-center md:justify-center sm:mt-12 flex-col'>
                <Congratulation />
                <CountDown />
            </WrapperPage>
        </ContainerPage >
    )
}
