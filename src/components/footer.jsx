import { Link } from "react-router-dom"

export default function Footer() {

    const getYear = () => {
        return (new Date()).getFullYear()
    }
    return (
        <div className=" flex-col md:flex-row flex items-center justify-center text-white gap-2 p-2 roboto-regular ">
            <div className="flex gap-2">

            <span>&copy; {getYear()} Copyright</span> |
            <span><Link to="/about">Sobre</Link></span> <span className="hidden md:flex">|</span> 
            </div>
            <div className="flex gap-2">

            <span><a href="https://www.facebook.com/share/18YqQNGcUf/?mibextid=LQQJ4d" target="_blank">Facebook</a></span>|
            <span><a href="https://www.instagram.com/askipmob_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">Instagram</a></span>|
            <span><a href="https://www.youtube.com/@ASKIPMob_Oficial" target="_blank">Youtube</a></span>
            </div>
        </div>
    )
}