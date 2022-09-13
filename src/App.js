import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Shop from "./Pages/Shop/Shop";
import Products from "./Pages/Products/Products";
import Blogs from "./Pages/Blog/Blogs";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/DashboardLeftSidebar";
import ProductDetails from "./Pages/Shop/ProductDetails";
import ProductAdd from "./Pages/Dashboard/Products/ProductAdd";
import ManageProducts from "./Pages/Dashboard/Products/ManageProducts";
import UpdateProduct from "./Pages/Dashboard/Products/UpdateProduct";
import ManageAllMassage from "./Pages/Dashboard/Message/ManageAllMassage";
import { toast, ToastContainer } from 'react-toastify';
import AddBlog from "./Pages/Dashboard/Blog/AddBlog";
import BlogDetails from "./Pages/Dashboard/Blog/BlogDetails";
import Disclaimer from "./Pages/Disclaimer/Disclaimer";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [userV, setuserV] = useState('');
  useEffect(() => {
    setuserV(sessionStorage.getItem('userValid'));
  }, [window?.location?.pathname]);
  console.log(userV);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Shop />}>

        </Route>
        <Route path='/product/:id' element={
          <ProductDetails></ProductDetails>
        }>
        </Route>
        <Route path="/cat" element={<Shop />} />
        <Route path="/fish" element={<Shop />} />
        <Route path="/bird" element={<Shop />} />
        <Route path="/dog" element={<Shop />} />
        <Route path="/rabbit" element={<Shop />} />
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/disclaimer" element={<Disclaimer />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/blog/:id" element={<BlogDetails />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login setuserV={setuserV} />}></Route>
        {
          userV == 'val' ? <><Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/add-product" element={<ProductAdd />}></Route>
            <Route path="/manageProduct" element={<ManageProducts />}></Route>
            <Route path="/updateProduct/:id" element={<UpdateProduct />}></Route>
            <Route path="/manageMessage" element={<ManageAllMassage />}></Route>
            <Route path="/add-blog" element={<AddBlog />}></Route></> : ''


        }


        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
