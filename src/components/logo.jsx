import React from "react"
import { Link } from "react-router-dom"
export default function Logo() {
    return (
        <h1>
            <Link
                to="/"
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-rose-500 via-deepPink-600 to-violet-600 font-sans text-4xl font-extrabold italic animate-gradient"
            >
                ASKIP
            </Link>
        </h1>


    )
}
