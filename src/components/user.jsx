
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Context } from "@/context"
import { useContext } from "react"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { useNavigate } from "react-router-dom"

export function User() {
    const { user, signout } = useContext(Context)
    const navigate = useNavigate()

    const out = () => {
        signout()
        navigate('/login-askipmob')
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar>
                    <AvatarFallback className="font-bold bg-black text-white">{user[0].toString().toUpperCase()}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuItem onClick={out}>
                    Sair
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
