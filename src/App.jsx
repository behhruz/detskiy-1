import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Dashboard/Login";
import Register from "./Dashboard/Register";
import AdminPanel from "./Dashboard/AdminPanel";
import Navbar from "./Components/Navbar";
import Portners from "./Components/Portners";
import Ot from "./Components/ot";
import Categories from "./Components/Category";
import Xm from "./Components/Cards";
import Carusel from "./Components/Carousel";
import PrivateRoute from "./Dashboard/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route 
        path="/home" 
        element={
          <PrivateRoute>
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
          </PrivateRoute>
        } 
      />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default App;
