import { useContext } from "react"
import Logo from "./logo"
import Menu from "./menu"
import { Context } from "@/context"
import { User } from "./user"

function Header() {
  const { isAuthenticated } = useContext(Context)
  return (
    <header className="w-full bg-transparent flex 
         items-center justify-center  px-6 -mt-4">
      <div className="w-full flex items-center justify-between px-0">
        <Logo />
        <div className="flex gap-x-4">
          <Menu />
          {isAuthenticated && <User />}
        </div>
      </div>
    </header>
  )
}

export default Header