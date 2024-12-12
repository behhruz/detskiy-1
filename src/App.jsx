import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from "./Dashboard/Login";
import Register from "./Dashboard/Register";
import AdminPanel from "./Dashboard/AdminPanel";
import Navbar from "./Components/Navbar";
import Portners from "./Components/Portners";
import Ot from "./Components/ot";
import Categories from "./Components/Category";
import Xm from "./Components/Cards";
import Carusel from "./Components/Carousel";
import Yurak from "./Components/yurak";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/yrak" element={<Yurak    />} />
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
            </main>
          </>
        }
      />
    </Routes>
  );
}

export default App;
