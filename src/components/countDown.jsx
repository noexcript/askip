import React, { useState, useEffect } from "react";
import CountWrapper from "./countWrapper";

const CountDown = () => {

    return (
        <div className="justify-center items-center  gap-10  w-1/3  max-w-3xl shadow-sm shadow-white rounded-lg bg-white flex flex-col border p-4">
            <p className=" text-black  text-lg font-normal ">Parabéns voce concluir á tarefa</p>
            <div className="flex items-center flex-col gap-4">

                <p>Disponsível para:</p>
                <CountWrapper />
            </div>
        </div>

    );

};

export default CountDown;
