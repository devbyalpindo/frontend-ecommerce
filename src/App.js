import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import Admin from "./pages/Admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Order from "./pages/Admin/Order";

function App() {
  return (
    <>
      <ToastContainer theme='colored' />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/admin/order' element={<Order />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
