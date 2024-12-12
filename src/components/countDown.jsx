import React, { useState, useEffect } from "react";
import CountWrapper from "./countWrapper";

const CountDown = () => {

    return (
        <div className="justify-center items-center min-h-[250px] p-5 gap-10  max-w-7xl  shadow-sm shadow-white rounded-lg bg-white flex flex-col ">
            <p className=" text-black  text-lg font-medium text-center">Parabéns, você concluir á primeira fase</p>
            <div className="flex items-center flex-col gap-4  w-full">
                <p>Disponível para:</p>
                <CountWrapper />
            </div>
        </div>

    );

};

export default CountDown;
