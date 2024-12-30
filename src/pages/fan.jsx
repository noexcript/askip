import Fans from "@/components/fans";
import ContainerPage from "../components/containerPage";
import WrapperPage from "@/components/wrapperPage";

export default function Fan() {

    return (
        <ContainerPage className="items-start justify-center">
            <WrapperPage className='items-center md:justify-center container'>
                <Fans />
            </WrapperPage>
        </ContainerPage >
    )
}
