import { useNavigate, useParams } from "react-router-dom";
import ContainerPage from "../components/containerPage";
import WrapperPage from "../components/wrapperPage";
import { useContext, useEffect } from "react";
import { Context } from "../context";
import LoginForm from "@/components/loginForm";



export default function Login() {

    const { setTiming, isAuthenticated } = useContext(Context)
    const navigate = useNavigate()

    useEffect(() => {
        setTiming(true)
        if (isAuthenticated) {
            navigate('/')
        }
    }, [])
    return (
        <ContainerPage>
            <WrapperPage className="md:justify-center gap-36 py-6 min-h-[350px]">
                {!isAuthenticated && <LoginForm />}
            </WrapperPage>
        </ContainerPage >
    )
}
