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
import UpdateBlog from "./Pages/Dashboard/Blog/UpdateBlog";
import ManageAllMassage from "./Pages/Dashboard/Message/ManageAllMassage";
import EditAboutPage from "./Pages/Dashboard/Page/EditAboutPage";
import { toast, ToastContainer } from 'react-toastify';
import AddBlog from "./Pages/Dashboard/Blog/AddBlog";
import BlogDetails from "./Pages/Dashboard/Blog/BlogDetails";
import Disclaimer from "./Pages/Disclaimer/Disclaimer";
import { useEffect } from "react";
import { useState } from "react";
import ManageAboutPage from "./Pages/Dashboard/Page/ManageAboutPage";
import ManageBlogs from "./Pages/Dashboard/Blog/ManageBlogs";
import EditButtonLink from "./Pages/Dashboard/Page/EditButtonLink";
import Loading from "./Pages/Shared/Loading";

function App() {
  const [userV, setuserV] = useState('');
  const [pload, setProducts] = useState([]);
  useEffect(() => {
    setuserV(sessionStorage.getItem('userValid'));
  }, [window?.location?.pathname]);
  // console.log(userV);
  useEffect(() => {
    fetch(`https://dog-potluck.onrender.com/abouts`)
      .then(res => res.json())
      .then(data => {
        // setProducts(data);
        console.log(data);
        setProducts(data);
      }
      )

  }, [pload]);
  if (!pload) {
    return <Loading></Loading>
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Shop />}></Route>
        <Route path='/product/:id' element={<ProductDetails></ProductDetails>}></Route>
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
            <Route path="/updateBlog/:id" element={< UpdateBlog />}></Route >
            <Route path="/manageMessage" element={<ManageAllMassage />}></Route>
            <Route path="/manageAboutPage" element={<ManageAboutPage />}></Route>
            <Route path="/updateAbout/:id" element={<EditAboutPage />}></Route>
            <Route path="/updateButtonLink" element={<EditButtonLink />}></Route>
            <Route path="/updateContact/:id" element={<ManageAllMassage />}></Route>
            <Route path="/manageBlog" element={<ManageBlogs />}></Route>
            <Route path="/add-blog" element={<AddBlog />}></Route></> : ''
        }
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
