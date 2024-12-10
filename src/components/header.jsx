import Logo from "./logo"
import Menu from "./menu"

function Header() {
    return (
        <header className="w-full bg-black opacity- flex items-center justify-center shadow-xl">
            <div className="container  flex items-center justify-between p-4">
                <Logo />
                <Menu />
            </div>

        </header>
    )
}

export default Header