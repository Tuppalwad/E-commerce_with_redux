import React from "react";
import Navbar from "./components/reusable_components/navbar";
import Landing from "./components/landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/reusable_components/footer";
import GoToTop from "./components/reusable_components/GoToTop";
import Shop from "./components/Product/Shop";
import Cart from "./components/Product/Cart";
import Details from "./components/Product/Details";
import Login from "./components/Autho/Login";
import Register from "./components/Autho/Register";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog";
import BlogPage from "./components/Blog/BlogPage";
import ShippingCart from "./components/Product/ShippingCart";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Landing />} />
          <Route path="/order" element={<Landing />} />
          <Route path="/payment" element={<Landing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/details" element={<Details />} />
          <Route path="/shippingcart" element={<ShippingCart />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        <GoToTop />
        <Footer />
      </Router>

    </div>
  );
}

export default App;
