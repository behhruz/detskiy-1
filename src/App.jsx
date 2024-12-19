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
import ProductList from "./Components/ProductList";

function App() {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <Routes>
      {/* Login and Register Routes */}
      <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/home" />} />
      <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/home" />} />

      {/* Admin Route */}
      <Route path="/admin" element={<AdminPanel />} />

      {/* Home Route with Protected Route */}
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

      {/* Redirect to Login if not authenticated */}
      <Route path="/" element={!isAuthenticated ? <Navigate to="/login" /> : <Navigate to="/home" />} />

      {/* Product List Route */}
      <Route
        path="/products/:category"
        element={
          <>
            <Navbar />
            <ProductList />
          </>
        }
      />
    </Routes>
  );
}

export default App;
