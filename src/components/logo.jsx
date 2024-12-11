import React from "react"
import { Link } from "react-router-dom"
export default function Logo() {
    return (
        <h1>
            <Link
                to="/"
                className="font-rubik text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-rose-500 via-deepPink-600 to-violet-600  text-4xl font-extrabold italic animate-gradient"
            >
                <img className="w-[40px] h-[40px] object-cover" src="/img/logo.png" alt="askip-logo" />
            </Link>
        </h1>


    )
}
