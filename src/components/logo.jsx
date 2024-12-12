import React from "react"
import { Link } from "react-router-dom"
export default function Logo() {
    return (
        <h1>
            <Link
                to="/"
                className="font-rubik text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-rose-500 via-deepPink-600 to-violet-600  text-4xl font-extrabold italic animate-gradient flex items-center"
            >
                <img className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] object-cover" src="/img/logo.png" alt="askip-logo" />
                <img className="w-[50px] h-[40px] md:w-[120px] md:h-[120px] object-fill" src="/img/2.png" alt="askip-logo" />
            </Link>
        </h1>


    )
}
