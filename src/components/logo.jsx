import React from "react"
import { Link } from "react-router-dom"
export default function Logo() {
    return (
        <h1>
            <Link
                to="/"
                className="font-rubik  font-extrabold italic animate-gradient flex items-center  p-0 "
            >
                <img className="w-[100px] h-[90px] md:w-[140px] md:h-[100px] object-contain " src="/img/logo.png" alt="askip-logo" />
            </Link>
        </h1>


    )
}
