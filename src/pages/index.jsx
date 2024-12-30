import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "../context";
import Home from "./home";
import Timer from "./timer";
import About from "./about";
import Timing from '../components/timing'
import Header from '../components/header'
import Footer from '../components/footer'
import NotFound from "./notFound";
import Login from "./login";
import Main from "./main";
import TimingMiddleware from "@/middleware/timingMiddleware";
import Luck from "./fan";
import Fan from "./fan";



const Pages = () => {
    const { isTiming } = useContext(Context)

    return (
        <>
            {isTiming && <Timing />}
            <Router>
                <Routes>
                    <Route path="/" element={<Main />} >
                        <Route index element={
                            <TimingMiddleware>
                                < Home />
                            </TimingMiddleware>
                        } />
                        <Route path="/participant/:link" element={< Home />} />
                        {/* <Route path="/fans" element={< Fan />} /> */}
                        <Route path="/about" element={<About />} />
                    </Route>
                    {/* <Route path="/login-askipmob" element={<Login />} /> */}
                    <Route path="*" element={<NotFound />} />
                </Routes>

            </Router>
        </>
    );
};

export default Pages;
