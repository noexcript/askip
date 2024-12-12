import React, { useContext, useState } from "react";
import { menuItems } from "../mock/menuItems";
import MenuItem from "./menuItem";
import { Context } from "../context";

const timesLeft_ = {
    'dias': 0,
    'horas': 0,
    'mins': 0,
    'seg': 0,
}


function Menu() {

    const { timesLeft, click, participant } = useContext(Context)


    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const toggleMenu = () => setIsMenuOpen(!isMenuOpen);



    return (

        <nav className="flex items-center justify-end gap-2 mt-4 md:mt-10">

            {/* <button
                className="lg:hidden text-black"
                onClick={toggleMenu}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button> */}


            <div className="flex items-center gap-2 flex-col text-white">
                <div className="text-sm font-bold">
                    NUMERO DE PARTICIPANTES : {click}
                </div>
                <div className="flex gap-4 text-sm font-bold">

                    {!participant.clicked && Object.entries(timesLeft_).map(([key, value], index) => (
                        <div className="flex flex-col items-center justify-center" key={index}>
                            <span>{value}</span>
                            <span className="hidden md:flex">{key}</span>
                        </div>
                    ))  
                    // Object.entries(timesLeft_).map(([key, value], index) => (
                    //     <div className="flex flex-col items-center justify-center" key={index}>
                    //         <span>{value}</span>
                    //         <span className="hidden md:flex">{key}</span>
                    //     </div>
                    // ))
                    }

                </div>
                {/* {menuItems.map((item, index) => (
                    <MenuItem key={index} href={item.href} text={item.text} />
                ))} */}
            </div>


            {/* {isMenuOpen && (
                <div className="lg:hidden absolute top-16 left-0 w-full bg-blue-600 p-4 z-50">
                    {menuItems.map((item, index) => (
                        <MenuItem key={index} href={item.href} text={item.text} />
                    ))}
                </div>
            )} */}

        </nav>
    );
};

export default Menu;