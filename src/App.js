import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import Footer from "./Components/Footer";
import Products from "./Components/Pages/Products";
import Services from "./Components/Pages/Services";
import SignUp from "./Components/Pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
