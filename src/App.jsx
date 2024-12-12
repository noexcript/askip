import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header'
import Home from './pages/home'
import Timer from "./pages/timer";
import Luck from "./pages/luck";
import { Context } from "./context";

const App = () => {
  const { participant } = useContext(Context)
  const [isClicked, setClicked] = useState(false)

  useEffect(() => {
    setClicked(participant.clicked)
  })
  return (
    <div className="h-screen w-screen bg-gradient-to-tl from-green-950 via-blue-950 to-black animate-gradient bg-[length:400%_400%] flex flex-col">

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={isClicked ? <Timer /> : < Home />} />
          {/* <Route path="/timer" element={<Timer />} />
          <Route path="/luck" element={<Luck />} /> */}

        </Routes>
      </Router>
    </div>
  );
};

export default App;
