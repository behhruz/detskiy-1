import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Dashboard/Login";
import Register from "./Dashboard/Register";
import AdminPanel from "./Dashboard/AdminPanel";
import Navbar from "./Components/Navbar";
import Portners from "./Components/Portners";
import Ot from "./Components/ot";
import Categories from "./Components/Category";
import Xm from "./Components/Cards";
import Carusel from "./Components/Carousel";
import Pages from "./Components/Pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/pages" element={<Pages />} />
        
        <Route path="/" element={<Navigate to="/home" />} />

        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Carusel />
              <main>
                <Portners />
                <Ot />
                <Categories />
                <Xm />
                {/* <Pages/> */}
              </main>
            </>
          }
        />
        
      </Routes>
    </>
  );
}

export default App;
