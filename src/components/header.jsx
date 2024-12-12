import Logo from "./logo"
import Menu from "./menu"

function Header() {
    return (
        <header className="w-full bg-transparent opacity- flex 
         items-center justify-center  px-2">
        <div className="container flex items-start justify-between p-4 px-0">
          <Logo />
          <Menu />
        </div>
      </header>
      
    )
}

export default Header