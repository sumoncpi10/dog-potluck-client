import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banar from "../Shared/Banar";
import Footer from "../Shared/Footer";
import HeaderHome from "../Shared/HeaderHome";
import Product from '../Shop/Product';
import LoadProduct from './LoadProduct';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);

    return (
        <div>
            <>
                <Banar />
                <div className="wrapper">


                    <div className="preloader-wrap">
                        <div className="preloader">
                            <div className="dog-head"></div>
                            <div className="dog-body"></div>
                        </div>
                    </div>

                    {/* header  */}
                    <HeaderHome></HeaderHome>


                    <main className="main-content">



                        <section className="product-area product-category-area bg-color-f2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="section-title shape-center text-center">
                                            <h5 className="sub-title">TRENDING CATEGORIES</h5>
                                            <h2 className="title">Shop By Category</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-gutter-43">
                                    <div className="col">

                                        <div className="product-category-item">
                                            <div className="thumb">
                                                <Link to="/cat"><img src="assets/img/shop/category/1.webp" width="200" height="200"
                                                    alt="Image-HasTech" /></Link>
                                            </div>
                                            <div className="content">
                                                <h3 className="title"><Link to="/cat">Cat Food</Link></h3>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col">

                                        <div className="product-category-item">
                                            <div className="thumb">
                                                <Link to="/fish"><img src="assets/img/shop/category/2.webp" width="200" height="200"
                                                    alt="Image-HasTech" /></Link>
                                            </div>
                                            <div className="content">
                                                <h3 className="title"><Link to="/fish">Fish Food</Link></h3>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col">

                                        <div className="product-category-item">
                                            <div className="thumb">
                                                <Link to="/bird"><img src="assets/img/shop/category/3.webp" width="200" height="200"
                                                    alt="Image-HasTech" /></Link>
                                            </div>
                                            <div className="content">
                                                <h3 className="title"><Link to="/bird">Bird Food</Link></h3>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col">

                                        <div className="product-category-item">
                                            <div className="thumb">
                                                <Link to="/dog"><img src="assets/img/shop/category/4.webp" width="200" height="200"
                                                    alt="Image-HasTech" /></Link>
                                            </div>
                                            <div className="content">
                                                <h3 className="title"><Link to="/dog">Dog Food</Link></h3>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col">

                                        <div className="product-category-item">
                                            <div className="thumb">
                                                <Link to="/rabbit"><img src="assets/img/shop/category/5.webp" width="200" height="200"
                                                    alt="Image-HasTech" /></Link>
                                            </div>
                                            <div className="content">
                                                <h3 className="title"><Link to="/rabbit">Rabbit Food</Link></h3>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col">

                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="product-area product-banner-area">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="banner-product-single-item">
                                            <div className="thumb">
                                                <a href="shop.html">
                                                    <img src="assets/img/shop/banner/1.webp" width="570" height="300" alt="Image-HasTech" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <h5 className="sub-title">50% Off</h5>
                                                <h5 className="title">Dog Food</h5>
                                                <a className="btn-theme btn-theme-color btn-sm" href="sale-product-dog.html">Buy Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="banner-product-single-item">
                                            <div className="thumb">
                                                <a href="shop.html">
                                                    <img src="assets/img/shop/banner/2.webp" width="570" height="300" alt="Image-HasTech" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <h5 className="sub-title">50% Off</h5>
                                                <h5 className="title">Cat Food</h5>
                                                <a className="btn-theme btn-theme-color btn-sm" href="sale-product-cat.html">Buy Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="product-area product-default-area">
                            <div className="container pt--0">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="section-title mb-45 mb-sm-20 shape-center text-center">
                                            <h5 className="sub-title">Best PRODUCT</h5>
                                            <h2 className="title">New Collection</h2>
                                        </div>
                                        <div className="isotope-filter">
                                            <button className="active" data-filter="*">All</button>
                                            <button data-filter=".filter_new">New</button>
                                            <button data-filter=".filter_best_sellers">Best Sellers</button>
                                            <button data-filter=".filter_featured">Featured</button>
                                            <button data-filter=".filter_on_sall">On Sall</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row isotope-grid">
                                    {
                                        products.map(product => <Product key={product._id} product={product}></Product>)
                                    }
                                </div>
                                {/* <div className="row isotope-grid">



                                    <div className="col-sm-6 col-lg-3 isotope-item filter_best_sellers filter_on_sall">

                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="single-product.html">
                                                    <img src="assets/img/shop/1.webp" width="270" height="320" alt="Image-HasTech" />
                                                </a>
                                            </div>
                                            <div className="product-info">
                                                <h4 className="title"><a href="single-product.html">Joust Duffle Bag</a></h4>
                                                <div className="rating-box-wrap" style={{ "color": "#ffde00" }}>
                                                    <div className="rating-box">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                                <button type="button" className="btn-product-cart" data-bs-toggle="modal"><a href="single-product.html">
                                                    Buy Now
                                                </a>
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-sm-6 col-lg-3 isotope-item filter_new filter_featured">

                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="single-product.html">
                                                    <img src="assets/img/shop/2.webp" width="270" height="320" alt="Image-HasTech" />
                                                </a>
                                            </div>
                                            <div className="product-info">
                                                <h4 className="title"><a href="single-product.html">Joust Duffle Bag</a></h4>
                                                <div className="rating-box-wrap" style={{ "color": "#ffde00" }}>
                                                    <div className="rating-box">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                                <button type="button" className="btn-product-cart" data-bs-toggle="modal"><a href="single-product.html">
                                                    Buy Now
                                                </a>
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-sm-6 col-lg-3 isotope-item filter_best_sellers filter_on_sall">

                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="single-product.html">
                                                    <img src="assets/img/shop/3.webp" width="270" height="320" alt="Image-HasTech" />
                                                </a>
                                            </div>
                                            <div className="product-info">
                                                <h4 className="title"><a href="single-product.html">Joust Duffle Bag</a></h4>
                                                <div className="rating-box-wrap" style={{ "color": "#ffde00" }}>
                                                    <div className="rating-box">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                                <button type="button" className="btn-product-cart" data-bs-toggle="modal"><a href="single-product.html">
                                                    Buy Now
                                                </a>
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-sm-6 col-lg-3 isotope-item filter_new filter_featured">

                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="single-product.html">
                                                    <img src="assets/img/shop/4.webp" width="270" height="320" alt="Image-HasTech" />
                                                </a>
                                            </div>
                                            <div className="product-info">
                                                <h4 className="title"><a href="single-product.html">Joust Duffle Bag</a></h4>
                                                <div className="rating-box-wrap" style={{ "color": "#ffde00" }}>
                                                    <div className="rating-box">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                                <button type="button" className="btn-product-cart" data-bs-toggle="modal"><a href="single-product.html">
                                                    Buy Now
                                                </a>
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-sm-6 col-lg-3 isotope-item filter_new filter_featured">

                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="single-product.html">
                                                    <img src="assets/img/shop/6.webp" width="270" height="320" alt="Image-HasTech" />
                                                </a>
                                            </div>
                                            <div className="product-info">
                                                <h4 className="title"><a href="single-product.html">Joust Duffle Bag</a></h4>
                                                <div className="rating-box-wrap" style={{ "color": "#ffde00" }}>
                                                    <div className="rating-box">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                                <button type="button" className="btn-product-cart" data-bs-toggle="modal"><a href="single-product.html">
                                                    Buy Now
                                                </a>
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-sm-6 col-lg-3 isotope-item filter_new filter_featured">

                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="single-product.html">
                                                    <img src="assets/img/shop/5.webp" width="270" height="320" alt="Image-HasTech" />
                                                </a>
                                            </div>
                                            <div className="product-info">
                                                <h4 className="title"><a href="single-product.html">Joust Duffle Bag</a></h4>
                                                <div className="rating-box-wrap" style={{ "color": "#ffde00" }}>
                                                    <div className="rating-box">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                                <button type="button" className="btn-product-cart" data-bs-toggle="modal"><a href="single-product.html">
                                                    Buy Now
                                                </a>
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-sm-6 col-lg-3 isotope-item filter_best_sellers filter_on_sall">

                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="single-product.html">
                                                    <img src="assets/img/shop/7.webp" width="270" height="320" alt="Image-HasTech" />
                                                </a>
                                            </div>
                                            <div className="product-info">
                                                <h4 className="title"><a href="single-product.html">Joust Duffle Bag</a></h4>
                                                <div className="rating-box-wrap" style={{ "color": "#ffde00" }}>
                                                    <div className="rating-box">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                                <button type="button" className="btn-product-cart" data-bs-toggle="modal"><a href="single-product.html">
                                                    Buy Now
                                                </a>
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-sm-6 col-lg-3 isotope-item filter_new filter_featured">

                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="single-product.html">
                                                    <img src="assets/img/shop/8.webp" width="270" height="320" alt="Image-HasTech" />
                                                </a>
                                            </div>
                                            <div className="product-info">
                                                <h4 className="title"><a href="single-product.html">Joust Duffle Bag</a></h4>
                                                <div className="rating-box-wrap" style={{ "color": "#ffde00" }}>
                                                    <div className="rating-box">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                                <button type="button" className="btn-product-cart" data-bs-toggle="modal"><a href="single-product.html">
                                                    Buy Now
                                                </a>
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                </div> */}
                            </div>
                        </section>

                        <section className="bg-theme-color position-relative z-index-1">
                            <div className="container-fluid p--0">
                                <div className="row divider-style1">
                                    <div className="col-lg-3 col-xl-4">
                                        <div className="divider-thumb divider-thumb-left">
                                            <img src="assets/img/photos/divider1.webp" width="351" height="435" alt="Image-HasTech" />
                                            <div className="shape-circle"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-xl-4">
                                        <div className="divider-content text-center">
                                            <h5 className="sub-title">Save 50% Off</h5>
                                            <h2 className="title">Best Deal Offer</h2>
                                            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                incididunt ut labore etlop.</p>
                                            <a className="btn-theme text-dark" href="best-deal-offer.html">Buy Now</a>
                                            <img className="shape-object" src="assets/img/shape/object1.webp" width="316" height="302"
                                                alt="Image-HasTech" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-xl-4">
                                        <div className="divider-thumb divider-thumb-right">
                                            <img src="assets/img/photos/divider2.webp" width="488" height="447" alt="Image-HasTech" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="product-area daily-product-area bg-color-f2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="section-title shape-center text-center">
                                            <h5 className="sub-title">Trending Productts</h5>
                                            <h2 className="title">deal-of-the-day</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-sm-6">

                                        <div className="product-item daily-product-item">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="product-thumb">
                                                        <a href="single-product.html">
                                                            <img src="assets/img/shop/9.webp" width="270" height="320" alt="Image-HasTech" />
                                                        </a>

                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="product-info">
                                                        <div className="ht-countdown-wrap">
                                                            <span className="countdown-title">End In:</span>
                                                            <div className="ht-countdown ht-countdown-style1" data-date="1/10/2022"></div>
                                                        </div>
                                                        <h4 className="title"><a href="deal-of-the-day.html">Joust Duffle Bag</a></h4>
                                                        <div className="rating-box-wrap" style={{ "color": "#ffde00" }}>
                                                            <div className="rating-box">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </div>
                                                        </div>
                                                        <div className="prices">
                                                            <span className="price"><a href="deal-of-the-day.html">Buy Now</a></span>
                                                        </div>
                                                        <div className="product-feature-list">
                                                            <ul>
                                                                <li><span>Predecessor :</span> None.</li>
                                                                <li><span>Support Type :</span> Neutral.</li>
                                                                <li><span>Cushioning :</span> High Energizing.</li>
                                                                <li><span>Total Weight :</span> 300gm</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-12 col-sm-6">

                                        <div className="product-item daily-product-item">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="product-thumb">
                                                        <a href="single-product.html">
                                                            <img src="assets/img/shop/10.webp" width="270" height="320" alt="Image-HasTech" />
                                                        </a>

                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="product-info">
                                                        <div className="ht-countdown-wrap">
                                                            <span className="countdown-title">End In:</span>
                                                            <div className="ht-countdown ht-countdown-style1" data-date="1/10/2022"></div>
                                                        </div>
                                                        <h4 className="title"><a href="deal-of-the-day.html">Wayfarer Messenger Bag</a></h4>
                                                        <div className="rating-box-wrap" style={{ "color": "#ffde00" }}>
                                                            <div className="rating-box">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </div>
                                                        </div>
                                                        <div className="prices">
                                                            <span className="price"><a href="deal-of-the-day.html">Buy Now</a></span>
                                                        </div>
                                                        <div className="product-feature-list">
                                                            <ul>
                                                                <li><span>Predecessor :</span> None.</li>
                                                                <li><span>Support Type :</span> Neutral.</li>
                                                                <li><span>Cushioning :</span> High Energizing.</li>
                                                                <li><span>Total Weight :</span> 300gm</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="about-area">
                            <div className="container">
                                <div className="about-item position-relative">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 order-2 order-lg-1">
                                            <div className="about-content">
                                                <div className="section-title shape-left">
                                                    <h5 className="sub-title">Best PRODUCT</h5>
                                                    <h2 className="title">Best Pet Food</h2>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid ut labore
                                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                                                <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata non proident,
                                                    sunt in culpa qui officia deserun mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                                                    natus error.</p>
                                                <a className="btn-theme" href="shop.html">Shop Now</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 order-1 order-lg-2">
                                            <div className="about-thumb">
                                                <img src="assets/img/about/1.webp" width="569" height="577" alt="Image-HasTech" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="blog-area blog-default-area">
                            <div className="container pt--0">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="section-title shape-center text-center">
                                            <h5 className="sub-title">New & Latest</h5>
                                            <h2 className="title">Latest Blog</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-lg-4">

                                        <div className="post-item">
                                            <div className="thumb">
                                                <a href="blog-details.html">
                                                    <img src="assets/img/blog/1.webp" width="350" height="250" alt="Image-HasTech" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <div className="meta">
                                                    <ul>
                                                        <li className="author-info"><span>By:</span> <a href="blog.html">Admin</a></li>
                                                        <li className="post-date"><a href="blog.html">Sep 24,2022</a></li>
                                                    </ul>
                                                </div>
                                                <h4 className="title"><a href="blog-details.html">Lorem ipsum dolor sit amet conse adipis.</a></h4>
                                                <a className="btn-theme btn-sm" href="blog-details.html">Read More</a>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-6 col-lg-4">

                                        <div className="post-item">
                                            <div className="thumb">
                                                <a href="blog-details.html">
                                                    <img src="assets/img/blog/2.webp" width="350" height="250" alt="Image-HasTech" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <div className="meta">
                                                    <ul>
                                                        <li className="author-info"><span>By:</span> <a href="blog.html">Admin</a></li>
                                                        <li className="post-date"><a href="blog.html">Sep 24,2022</a></li>
                                                    </ul>
                                                </div>
                                                <h4 className="title"><a href="blog-details.html">It is a long established fact that a reader will.</a>
                                                </h4>
                                                <a className="btn-theme btn-sm" href="blog-details.html">Read More</a>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-6 col-lg-4">

                                        <div className="post-item">
                                            <div className="thumb">
                                                <a href="blog-details.html">
                                                    <img src="assets/img/blog/3.webp" width="350" height="250" alt="Image-HasTech" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <div className="meta">
                                                    <ul>
                                                        <li className="author-info"><span>By:</span> <a href="blog.html">Admin</a></li>
                                                        <li className="post-date"><a href="blog.html">Sep 24,2022</a></li>
                                                    </ul>
                                                </div>
                                                <h4 className="title"><a href="blog-details.html">fashions fade, style is eternal About Upto.</a></h4>
                                                <a className="btn-theme btn-sm" href="blog-details.html">Read More</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>

                    </main>

                    <Footer></Footer>

                    <div id="scroll-to-top" className="scroll-to-top"><span className="fa fa-angle-up"></span></div>


                    <aside className="product-action-modal modal fade" id="action-CartAddModal" tabIndex="-1" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="product-action-view-content">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal">
                                            <i className="pe-7s-close"></i>
                                        </button>
                                        <div className="modal-action-messages">
                                            <i className="pe-7s-check"></i> Added to cart successfully!
                                        </div>
                                        <div className="modal-action-product">
                                            <div className="thumb">
                                                <img src="assets/img/shop/modal1.webp" alt="Organic Food Juice" width="466" height="320" />
                                            </div>
                                            <h4 className="product-name"><a href="single-product.html">Joust Duffle Bag</a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    <aside className="product-cart-view-modal modal fade" id="action-QuickViewModal" tabIndex="-1" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="product-quick-view-content">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal">
                                            <span className="pe-7s-close"></span>
                                        </button>
                                        <div className="container pt--0 pb--0">
                                            <div className="row">
                                                <div className="col-lg-6">

                                                    <div className="product-single-thumb">
                                                        <img src="assets/img/shop/quick-view1.webp" width="544" height="560" alt="Image-HasTech" />
                                                    </div>

                                                </div>
                                                <div className="col-lg-6">

                                                    <div className="product-single-info">
                                                        <h3 className="main-title">Joust Duffle Bag</h3>

                                                        <div className="rating-box-wrap">
                                                            <div className="rating-box">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="review-status">
                                                                <a href="javascript:void(0)">(5 Customer Review)</a>
                                                            </div>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et
                                                            dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut
                                                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                                                        <div className="product-single-meta">
                                                            <ul>
                                                                <li><span>SKU:</span> Ch-256xl</li>
                                                                <li><span>Categories:</span>
                                                                    <a href="shop.html">Pet Food. eCommerce</a>
                                                                </li>
                                                                <li><span>Tags:</span>
                                                                    <a href="shop.html">Petfood. Pet</a>,
                                                                    <a href="shop.html">Animal.</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-quick-action">

                                                            <button type="button" className="btn-product-cart" data-bs-toggle="modal"
                                                                data-bs-target="#action-CartAddModal" style={{ "marginLeft": "0px" }}>
                                                                <a href="single-product.html">Buy Now</a>
                                                            </button>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    <aside className="aside-cart-wrapper offcanvas offcanvas-end" tabIndex="-1" id="AsideOffcanvasCart"
                        aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header">
                            <h1 className="d-none" id="offcanvasRightLabel">Shopping Cart</h1>
                            <button className="btn-aside-cart-close" data-bs-dismiss="offcanvas" aria-label="Close">Shopping Cart <i
                                className="fa fa-chevron-right"></i></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="aside-cart-product-list">
                                <li className="aside-product-list-item">
                                    <a href="#/" className="remove">×</a>
                                    <a href="single-product.html">
                                        <img src="assets/img/shop/product-mini/1.webp" width="90" height="110" alt="Image-HasTech" />
                                        <span className="product-title">Leather Mens Slipper</span>
                                    </a>
                                    <span className="product-price">1 × £69.99</span>
                                </li>
                                <li className="aside-product-list-item">
                                    <a href="#/" className="remove">×</a>
                                    <a href="single-product.html">
                                        <img src="assets/img/shop/product-mini/2.webp" width="90" height="110" alt="Image-HasTech" />
                                        <span className="product-title">Quickiin Mens shoes</span>
                                    </a>
                                    <span className="product-price">1 × £20.00</span>
                                </li>
                            </ul>
                            <p className="cart-total"><span>Subtotal:</span><span className="amount">£89.99</span></p>
                            <a className="btn-total" href="shop-cart.html">View cart</a>
                            <a className="btn-total" href="shop-checkout.html">Checkout</a>
                            <a className="d-block text-end lh-1" href="shop-checkout.html"><img src="assets/img/photos/paypal.webp" width="133"
                                height="26" alt="Has-image" /></a>
                        </div>
                    </aside>

                    <aside className="aside-search-box-wrapper offcanvas offcanvas-top" tabIndex="-1" id="AsideOffcanvasSearch"
                        aria-labelledby="offcanvasTopLabel">
                        <div className="offcanvas-header">
                            <h5 className="d-none" id="offcanvasTopLabel">Aside Search</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i
                                className="pe-7s-close"></i></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className="container pt--0 pb--0">
                                <div className="search-box-form-wrap">
                                    <div className="search-note">
                                        <p>Start typing and press Enter to search</p>
                                    </div>
                                    <form action="#" method="post">
                                        <div className="search-form position-relative">
                                            <label htmlFor="search-input" className="visually-hidden">Search</label>
                                            <input id="search-input" type="search" className="form-control" placeholder="Search entire store…" />
                                            <button className="search-button"><i className="fa fa-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </aside>

                    <aside className="off-canvas-wrapper offcanvas offcanvas-start" tabIndex="-1" id="AsideOffcanvasMenu"
                        aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header">
                            <h1 className="d-none" id="offcanvasExampleLabel">Aside Menu</h1>
                            <button className="btn-menu-close" data-bs-dismiss="offcanvas" aria-label="Close">menu <i
                                className="fa fa-chevron-left"></i></button>
                        </div>
                        <div className="offcanvas-body">
                            <nav id="offcanvasNav" className="offcanvas-menu-nav">
                                <ul>
                                    <li className="offcanvas-nav-parent">
                                        <a className="offcanvas-nav-item" href="index.html">Home</a>

                                    </li>

                                    <li className="offcanvas-nav-parent"><a className="offcanvas-nav-item" href="about-us.html">About</a></li>

                                    <li className="offcanvas-nav-parent">
                                        <a className="offcanvas-nav-item" href="shop.html">Shop</a>

                                    </li>

                                    <li className="offcanvas-nav-parent">
                                        <a className="offcanvas-nav-item" href="blog-details.html">Blog</a>

                                    </li>



                                    <li className="offcanvas-nav-parent"><a className="offcanvas-nav-item" href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </aside>

                </div>
            </>
        </div>
    );
};

export default Home;