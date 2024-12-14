import React from "react"
import { Link } from "react-router-dom"
export default function Logo() {
    return (
        <h1>
            <Link
                to="/"
                className="font-rubik  font-extrabold italic animate-gradient flex items-center  p-0"
            >
                <img className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-cover " src="/img/logo.png" alt="askip-logo" />
                <img className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] object-cover " src="/img/2.png" alt="askip-logo" />
            </Link>
        </h1>


    )
}
