
import { useContext, useEffect } from "react";
import Congratulation from "../components/congratulation";
import ContainerPage from "../components/containerPage";
import CountDown from "../components/countDown";
import WrapperPage from "../components/wrapperPage";
import { Context } from "../context";

export default function Timer() {

    const {setTiming} =  useContext(Context)

    useEffect(()=>{
        setTiming(false)
    }, [])

    return (
        <ContainerPage>
            <Congratulation />
            <WrapperPage className='items-center md:justify-center flex-col'>
                <CountDown />
            </WrapperPage>
        </ContainerPage >
    )
}
