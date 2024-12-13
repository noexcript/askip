import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "../context";
import Home from "./home";
import About from "./about";
import Timing from '../components/timing'
import Header from '../components/header'
import Footer from '../components/footer'



const Pages = () => {
    const { participant } = useContext(Context) || {}
    const [isClicked, setClicked] = useState(false)

    useEffect(() => {
        setClicked(participant.clicked)
    })
    return (
        <>
            <Timing />
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={isClicked ? <Timer /> : < Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
};

export default Pages;
