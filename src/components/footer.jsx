import { Link } from "react-router-dom"

export default function Footer() {

    const getYear = () => {
        return (new Date()).getFullYear()
    }
    return (
        <div className=" flex-col md:flex-row flex items-center justify-center text-white gap-2 p-2 roboto-regular">
            <div className="flex gap-2">

            <span>&copy; {getYear()} Copyright</span> |
            <span><Link>Sobre</Link></span> <span className="hidden md:flex">|</span> 
            </div>
            <div className="flex gap-2">

            <span><a href="">Facebook</a></span>|
            <span><a href="">Instagram</a></span>|
            <span><a href="">Youtube</a></span>
            </div>
        </div>
    )
}