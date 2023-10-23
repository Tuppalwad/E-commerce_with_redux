import React from "react";
import Navbar from "./components/reusable_components/Navbar";
import Landing from "./components/landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/reusable_components/footer";
import GoToTop from "./components/reusable_components/GoToTop";
import Shop from "./components/Product/Shop";
import Cart from "./components/Product/Cart";
import Details from "./components/Product/Details";
import Login from "./components/Autho/Login";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog";
import BlogPage from "./components/Blog/BlogPage";
import ShippingCart from "./components/Product/ShippingCart";
import { useSelector } from "react-redux"
import Otp from "./components/Autho/Otp";
import ReviewProduct from "./components/Product/ReviewProduct";
import Address from "./components/Product/Address";
function App() {
  const selectore = useSelector(state => state)
  console.log(selectore)
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ShippingCart />
        <Address />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Landing />} />
          <Route path="/order" element={<Landing />} />
          <Route path="/payment" element={<Landing />} />
          <Route path="/otp/:id" element={<Otp />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/shippingcart" element={<ShippingCart />} />
          <Route path="/addrescart" element={<Address />} />
          <Route path="/reviewdetails" element={<ReviewProduct />} />
          <Route path="/cart/:id" element={<Cart />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        <GoToTop />
        <Footer />
      </Router>

    </div>
  );
}

export default App;
