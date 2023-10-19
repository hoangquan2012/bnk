import React from "react";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import Signup from "../pages/signup";
export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}