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



const Pages = () => {
    const { participant, isTiming } = useContext(Context) || {}
    const [isClicked, setClicked] = useState(false)



    useEffect(() => {
        setClicked(participant.clicked)
        // setTiming(false)
    })

    return (
        <>
            {isTiming && <Timing />}
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={isClicked ? <Timer /> : < Home />} />
                    <Route path="/participant/:link" element={< Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/timer" element={<Timer />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
};

export default Pages;
