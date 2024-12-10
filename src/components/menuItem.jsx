import React from "react"
import { Link } from "react-router-dom"

export default function MenuItem({ href, text }) {

    return (
        <Link to='/' className="no-underline text-white text-lg mx-2 hover:text-yellow-50 hover:transition-all hover:font-bold transition ease-in-out delay-150 duration-300">{text}</Link>
    )

}
