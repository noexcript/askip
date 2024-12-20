import Logo from "./logo"
import Menu from "./menu"

function Header() {
    return (
        <header className="w-full bg-transparent flex 
         items-center justify-center  px-6 -mt-4">
        <div className="w-full flex items-center justify-between px-0">
          <Logo />
          <Menu />
        </div>
      </header>
    )
}

export default Header