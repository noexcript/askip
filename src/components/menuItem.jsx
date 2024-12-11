import React from "react"
import { Link } from "react-router-dom"

export default function MenuItem({ href, text }) {

    return (
        <Link to={href} className="no-underline text-black text-lg mx-2 hover:text-blue-900 hover:transition-all hover:font-bold transition ease-in-out delay-150 duration-300">{text}</Link>
    )

}
