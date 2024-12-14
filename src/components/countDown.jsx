import React, { useState, useEffect } from "react";
import CountWrapper from "./countWrapper";

const CountDown = () => {

    return (
        <div className="justify-center items-center min-h-[450px] p-5 gap-10  max-w-7xl  shadow-sm shadow-white rounded-lg bg-white flex flex-col ">
            <p className=" text-black  text-lg font-medium text-center">Parabéns, você concluir á primeira fase</p>
            <img src="/img/euro.gif" alt="euro-gif"  className="w-[100px] h-[100px]"/>
            <div className="flex items-center flex-col gap-6  w-full">
                <p>Disponível para:</p>
                <CountWrapper />
            </div>
        </div>

    );

};

export default CountDown;
