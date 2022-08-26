import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Shop from "./Pages/Shop/Shop";
import Products from "./Pages/Products/Products";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ProductDetails from "./Pages/Shop/ProductDetails";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="products" element={<Shop />}>

        </Route>
        <Route path='/:id' element={
          <ProductDetails></ProductDetails>
        }>
        </Route>
        <Route path="/cat" element={<Shop />} />
        <Route path="/fish" element={<Shop />} />
        <Route path="/bird" element={<Shop />} />
        <Route path="/dog" element={<Shop />} />
        <Route path="rabbit" element={<Shop />} />
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>

    </>
  );
}

export default App;
