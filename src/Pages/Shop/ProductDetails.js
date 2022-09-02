import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Shared/Header';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Review from './Review';
import Footer from '../Shared/Footer';
const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [reviews, setReview] = useState([]);
    const today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setProduct(data);
            })
    }, []);
    useEffect(() => {
        fetch(`http://localhost:5000/review/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setReview(data);
            })
    }, []);

    const addReview = (e) => {
        e.preventDefault();

        const ReviewComment = e.target.ReviewComment.value;
        const Reviewname = e.target.Reviewname.value;
        const Reviewemail = e.target.Reviewemail.value;

        // console.log(name, email, password);
        const review = { ReviewComment, Reviewname, Reviewemail, ProductID: id, today };
        // send data to the server 
        console.log(product)
        fetch('http://localhost:5000/reviewAdd', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);

                toast("Review Add Successfully!");
                e.target.reset();
            })
    }
    return (

        <div class="wrapper">

            <div class="preloader-wrap">
                <div class="preloader">
                    <div class="dog-head"></div>
                    <div class="dog-body"></div>
                </div>
            </div>

            <Header></Header>

            {/* <header class="header-area transparent">
                <div class="container">
                    <div class="row no-gutter align-items-center position-relative">
                        <div class="col-12">
                            <div class="header-align">
                                <div class="header-align-start">
                                    <div class="header-logo-area">
                                        <a href="index.html">
                                            <img class="logo-main" src="assets/img/logo-light.webp" width="158" height="36" alt="Logo" />
                                        </a>
                                    </div>
                                </div>
                                <div class="header-align-center">
                                    <div class="header-navigation-area position-relative">
                                        <ul class="main-menu nav">
                                            <li><a href="index.html"><span>Home</span></a></li>
                                            <li><a href="about-us.html"><span>About</span></a></li>
                                            <li><a href="shop.html"><span>Shop</span></a></li>
                                            <li><a href="blog.html"><span>Blog</span></a>

                                            </li>

                                            <li><a href="contact.html"><span>Contact</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="header-align-end">
                                    <div class="header-action-area">
                                        <div class="shopping-search">
                                            <button class="shopping-search-btn" type="button" data-bs-toggle="offcanvas"
                                                data-bs-target="#AsideOffcanvasSearch" aria-controls="AsideOffcanvasSearch"><i
                                                    class="pe-7s-search icon"></i></button>
                                        </div>

                                        <button class="btn-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#AsideOffcanvasMenu"
                                            aria-controls="AsideOffcanvasMenu">
                                            <i class="pe-7s-menu"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header> */}


            <main class="main-content">

                <div class="page-header-area" style={{ "backgroundImage": "url(assets/img/photos/bg1.webp)" }}>
                    <div class="container pt--0 pb--0">
                        <div class="row">
                            <div class="col-12">
                                <div class="page-header-content">
                                    <h2 class="title">Products</h2>
                                    <nav class="breadcrumb-area">
                                        <ul class="breadcrumb">
                                            <li><a href="index.html">Home</a></li>
                                            <li class="breadcrumb-sep">//</li>
                                            <li>Products</li>
                                            <li class="breadcrumb-sep">//</li>
                                            <li>{product?.name}</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section class="product-area product-single-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="product-single-item">
                                    <div class="row">
                                        <div class="col-lg-6">

                                            <div class="product-single-thumb">
                                                <div class="swiper single-product-thumb single-product-thumb-slider">
                                                    <div class="swiper-wrapper">
                                                        <div class="swiper-slide">
                                                            <a class="lightbox-image" data-fancybox="gallery"
                                                                href="assets/img/shop/product-single/1.webp">
                                                                <img src={product?.img} width="570" height="675"
                                                                    alt="Image-HasTech" />
                                                            </a>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <a class="lightbox-image" data-fancybox="gallery"
                                                                href="assets/img/shop/product-single/2.webp">
                                                                <img src={product?.img} width="570" height="675"
                                                                    alt="Image-HasTech" />
                                                            </a>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <a class="lightbox-image" data-fancybox="gallery"
                                                                href="assets/img/shop/product-single/3.webp">
                                                                <img src={product?.img} width="570" height="675"
                                                                    alt="Image-HasTech" />
                                                            </a>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <a class="lightbox-image" data-fancybox="gallery"
                                                                href="assets/img/shop/product-single/4.webp">
                                                                <img src={product?.img} width="570" height="675"
                                                                    alt="Image-HasTech" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-single-swiper-wrap position-relative">
                                                    <div class="swiper single-product-nav single-product-nav-slider">
                                                        <div class="swiper-wrapper">
                                                            <div class="swiper-slide">
                                                                <img src={product?.img} width="127" height="127"
                                                                    alt="Image-HasTech" />
                                                            </div>
                                                            <div class="swiper-slide">
                                                                <img src={product?.img} width="127" height="127"
                                                                    alt="Image-HasTech" />
                                                            </div>
                                                            <div class="swiper-slide">
                                                                <img src={product?.img} width="127" height="127"
                                                                    alt="Image-HasTech" />
                                                            </div>
                                                            <div class="swiper-slide">
                                                                <img src={product?.img} width="127" height="127"
                                                                    alt="Image-HasTech" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="single-swiper-btn-wrap">
                                                        <div class="swiper-btn-prev">
                                                            <i class="fa fa-angle-left"></i>
                                                        </div>
                                                        <div class="swiper-btn-next">
                                                            <i class="fa fa-angle-right"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-lg-6">

                                            <div class="product-single-info">
                                                <h3 class="main-title">{product?.name}</h3>

                                                <div class="rating-box-wrap">
                                                    <div class="rating-box">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                    <div class="review-status">
                                                        <a href="javascript:void(0)">(5 Customer Review)</a>
                                                    </div>
                                                </div>
                                                <p>{product?.description1}</p>
                                                <div class="product-single-meta">
                                                    <ul>
                                                        <li><span>SKU:</span> {product?.size}</li>
                                                        <li><span>Categories:</span>
                                                            <a href="shop.html"> {product?.category} Food, Pet Food. eCommerce</a>
                                                        </li>
                                                        <li><span>Tags:</span>
                                                            <a href="shop.html">Petfood. Pet</a>,
                                                            <a href="shop.html">Animal.</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="product-quick-action">

                                                    <button type="button" class="btn-product-cart" data-bs-toggle="modal" style={{ "marginLeft": "0px" }}>
                                                        <a href="https://www.facebook.com/">CHECK PRICE</a>
                                                    </button>

                                                </div>
                                                <div class="product-review-tabs-content">
                                                    <ul class="nav product-tab-nav" id="ReviewTab" role="tablist">
                                                        <li role="presentation">
                                                            <a class="active" id="information-tab" data-bs-toggle="pill" href="#information" role="tab"
                                                                aria-controls="information" aria-selected="true">Information</a>
                                                        </li>
                                                        <li role="presentation">
                                                            <a id="description-tab" data-bs-toggle="pill" href="#description" role="tab"
                                                                aria-controls="description" aria-selected="false">Description</a>
                                                        </li>
                                                        <li role="presentation">
                                                            <a id="reviews-tab" data-bs-toggle="pill" href="#reviews" role="tab" aria-controls="reviews"
                                                                aria-selected="false">Reviews (05)</a>
                                                        </li>
                                                    </ul>
                                                    <div class="tab-content product-tab-content" id="ReviewTabContent">
                                                        <div class="tab-pane fade show active" id="information" role="tabpanel"
                                                            aria-labelledby="information-tab">
                                                            <div class="product-information">
                                                                <p>{product?.information}</p>
                                                            </div>
                                                        </div>
                                                        <div class="tab-pane fade" id="description" role="tabpanel" aria-labelledby="description-tab">
                                                            <div class="product-description">
                                                                <p>{product?.description2}</p>
                                                            </div>
                                                        </div>
                                                        <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                                            <div class="product-review-content">
                                                                <div class="comment-author">
                                                                    <div class="comment-thumb">
                                                                        <img src="assets/img/shop/avatar.webp" width="60" height="60" alt="Image-HasTech" />
                                                                    </div>
                                                                    {
                                                                        reviews.map(review => <Review key={review._id} review={review}></Review>)
                                                                    }


                                                                </div>
                                                                <div class="comment-form-content">
                                                                    <h4 class="title collapsed" data-bs-toggle="collapse"
                                                                        data-bs-target="#comment-widgetId-1">Add Reviwe</h4>
                                                                    <div id="comment-widgetId-1" class="collapse collapse-body">
                                                                        <div class="review-comment-form">
                                                                            <form onSubmit={addReview} method='post'>
                                                                                <div class="row">
                                                                                    <div class="col-12">
                                                                                        <div class="form-group">
                                                                                            <label for="ReviewComment" class="form-label">Your review *</label>
                                                                                            <textarea name='ReviewComment' id="ReviewComment" class="form-control" required></textarea>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-12">
                                                                                        <div class="form-group">
                                                                                            <label for="Reviewname" class="form-label">Name *</label>
                                                                                            <input name="Reviewname" id="Reviewname" class="form-control" type="text" required />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-12">
                                                                                        <div class="form-group">
                                                                                            <label for="Reviewemail" class="form-label">Email *</label>
                                                                                            <input name="Reviewemail" id="Reviewemail" class="form-control" type="email" required />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-12">
                                                                                        <div class="form-group mb--0">
                                                                                            <button type="submit">Submit</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="product-area product-default-area">
                    <div class="container pt--0">
                        <div class="row">
                            <div class="col-12">
                                <div class="section-title shape-center text-center">
                                    <h5 class="sub-title">Best PRODUCT</h5>
                                    <h2 class="title">Related Products</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6 col-lg-3">

                                <div class="product-item">
                                    <div class="product-thumb">
                                        <a href="single-product.html">
                                            <img src="assets/img/shop/5.webp" width="270" height="320" alt="Image-HasTech" />
                                        </a>
                                    </div>
                                    <div class="product-info">
                                        <h4 class="title"><a href="single-product.html">Fusion Backpack</a></h4>
                                        <div class="rating-box-wrap" style={{ "color": "#ffde00" }}>
                                            <div class="rating-box">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <button type="button" class="btn-product-cart" data-bs-toggle="modal"><a
                                            href="single-product.html">Buy Now</a>
                                        </button>
                                    </div>

                                </div>

                            </div>
                            <div class="col-sm-6 col-lg-3">

                                <div class="product-item">
                                    <div class="product-thumb">
                                        <a href="single-product.html">
                                            <img src="assets/img/shop/6.webp" width="270" height="320" alt="Image-HasTech" />
                                        </a>
                                    </div>
                                    <div class="product-info">
                                        <h4 class="title"><a href="single-product.html">Savvy Shoulder Tote</a></h4>
                                        <div class="rating-box-wrap" style={{ "color": "#ffde00" }}>
                                            <div class="rating-box">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <button type="button" class="btn-product-cart" data-bs-toggle="modal"><a
                                            href="single-product.html">Buy Now</a>
                                        </button>
                                    </div>

                                </div>

                            </div>
                            <div class="col-sm-6 col-lg-3">

                                <div class="product-item">
                                    <div class="product-thumb">
                                        <a href="single-product.html">
                                            <img src="assets/img/shop/7.webp" width="270" height="320" alt="Image-HasTech" />
                                        </a>
                                    </div>
                                    <div class="product-info">
                                        <h4 class="title"><a href="single-product.html">Voyage Yoga Bag</a></h4>
                                        <div class="rating-box-wrap" style={{ "color": "#ffde00" }}>
                                            <div class="rating-box">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <button type="button" class="btn-product-cart" data-bs-toggle="modal"><a
                                            href="single-product.html">Buy Now</a>
                                        </button>
                                    </div>

                                </div>

                            </div>
                            <div class="col-sm-6 col-lg-3">

                                <div class="product-item">
                                    <div class="product-thumb">
                                        <a href="single-product.html">
                                            <img src="assets/img/shop/8.webp" width="270" height="320" alt="Image-HasTech" />
                                        </a>
                                    </div>
                                    <div class="product-info">
                                        <h4 class="title"><a href="single-product.html">Wayfarer Messenger Bag</a></h4>
                                        <div class="rating-box-wrap" style={{ "color": "#ffde00" }}>
                                            <div class="rating-box">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <button type="button" class="btn-product-cart" data-bs-toggle="modal"><a
                                            href="single-product.html">Buy Now</a>
                                        </button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </main>


            {/* <footer class="footer-area">

                <div class="footer-main">
                    <div class="container pt--0 pb--0">
                        <div class="row">
                            <div class="col-md-6 col-lg-4">
                                <div class="widget-item widget-about">
                                    <h4 class="widget-title">About Us</h4>
                                    <p class="desc">Lorem ipsum dolor sit amet, consectel adipisicing elit, sed do eiusmod temp incidid ut
                                        labore et dolo</p>
                                    <div class="social-icons">
                                        <a href="https://www.facebook.com/" target="_blank" rel="noopener"><i class="fa fa-facebook"></i></a>
                                        <a href="https://instagram.com/" target="_blank" rel="noopener"><i class="fa fa-instagram"></i></a>
                                        <a href="https://www.pinterest.com/" target="_blank" rel="noopener"><i
                                            class="fa fa-pinterest-p"></i></a>
                                        <a href="https://twitter.com/" target="_blank" rel="noopener"><i class="fa fa-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <div class="widget-item nav-menu-item1">
                                    <h4 class="widget-title">Information</h4>
                                    <h4 class="widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#widgetId-1">Our
                                        Policy</h4>
                                    <div id="widgetId-1" class="collapse widget-collapse-body">
                                        <div class="collapse-body">
                                            <div class="widget-menu-wrap">
                                                <ul class="nav-menu">
                                                    <li><a href="about-us.html">About Us</a></li>
                                                    <li><a href="disclaimer.html">Privacy Policy</a></li>
                                                    <li><a href="disclaimer.html">Disclaimer</a></li>
                                                    <li><a href="contact.html">Contact Us</a></li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-4">
                                <div class="widget-item">
                                    <h4 class="widget-title">Contact Info:</h4>
                                    <h4 class="widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#widgetId-3">
                                        Contact Info:</h4>
                                    <div id="widgetId-3" class="collapse widget-collapse-body">
                                        <div class="collapse-body">
                                            <div class="widget-contact-info">
                                                <p class="contact-info-desc">If you have any question.please contact us at <a
                                                    href="mailto://dogpotluck@gmail.com">dogpotluck@gmail.com</a></p>
                                                <div class="contact-item">
                                                    <div class="icon">
                                                        <i class="pe-7s-map-marker"></i>
                                                    </div>
                                                    <div class="info">
                                                        <p>36-20 Summers Place <br />Saskatoon, SK, Canada.</p>
                                                    </div>
                                                </div>
                                                <div class="contact-item phone-info">
                                                    <div class="icon">
                                                        <i class="pe-7s-phone"></i>
                                                    </div>
                                                    <div class="info">
                                                        <p><span>Have any Question</span> <br /><a href="tel://+1 639 318 3375">+1 639 318 3375</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                    <div class="container pt--0 pb--0">
                        <div class="row">
                            <div class="col-12">
                                <div class="footer-bottom-content">
                                    <p class="copyright">© 2022 DogPotluck. Made with <i class="fa fa-heart"></i> by <a target="_blank"
                                        href="#">Robin.</a></p>
                                    <div class="payment">
                                        <a href="index.html"><img src="assets/img/logo-light.webp" width="192" height="21"
                                            alt="Payment Logo" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer> */}

            <Footer></Footer>

            <div id="scroll-to-top" class="scroll-to-top"><span class="fa fa-angle-up"></span></div>


            <aside class="product-action-modal modal fade" id="action-WishlistModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="product-action-view-content">
                                <button type="button" class="btn-close" data-bs-dismiss="modal">
                                    <i class="pe-7s-close"></i>
                                </button>
                                <div class="modal-action-messages">
                                    <i class="pe-7s-check"></i> Added to wishlist successfully!
                                </div>
                                <div class="modal-action-product">
                                    <div class="thumb">
                                        <img src="assets/img/shop/modal1.webp" alt="Organic Food Juice" width="466" height="320" />
                                    </div>
                                    <h4 class="product-name"><a href="single-product.html">Joust Duffle Bag</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            <aside class="product-action-modal modal fade" id="action-CartAddModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="product-action-view-content">
                                <button type="button" class="btn-close" data-bs-dismiss="modal">
                                    <i class="pe-7s-close"></i>
                                </button>
                                <div class="modal-action-messages">
                                    <i class="pe-7s-check"></i> Added to cart successfully!
                                </div>
                                <div class="modal-action-product">
                                    <div class="thumb">
                                        <img src="assets/img/shop/modal1.webp" alt="Organic Food Juice" width="466" height="320" />
                                    </div>
                                    <h4 class="product-name"><a href="single-product.html">Joust Duffle Bag</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            <aside class="product-cart-view-modal modal fade" id="action-QuickViewModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="product-quick-view-content">
                                <button type="button" class="btn-close" data-bs-dismiss="modal">
                                    <span class="pe-7s-close"></span>
                                </button>
                                <div class="container pt--0 pb--0">
                                    <div class="row">
                                        <div class="col-lg-6">

                                            <div class="product-single-thumb">
                                                <img src="assets/img/shop/quick-view1.webp" width="544" height="560" alt="Image-HasTech" />
                                            </div>

                                        </div>
                                        <div class="col-lg-6">

                                            <div class="product-single-info">
                                                <h3 class="main-title">Joust Duffle Bag</h3>
                                                <div class="prices">
                                                    <span class="price">$20.19</span>
                                                </div>
                                                <div class="rating-box-wrap">
                                                    <div class="rating-box">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                    <div class="review-status">
                                                        <a href="javascript:void(0)">(5 Customer Review)</a>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et
                                                    dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                                                <div class="product-single-meta">
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
                                                <div class="product-quick-action">
                                                    <div class="qty-wrap">
                                                        <div class="pro-qty">
                                                            <input type="text" title="Quantity" value="01" />
                                                        </div>
                                                    </div>
                                                    <button type="button" class="btn-product-cart" data-bs-toggle="modal"
                                                        data-bs-target="#action-CartAddModal">
                                                        Add To Cart
                                                    </button>
                                                    <button type="button" class="btn-product-wishlist" data-bs-toggle="modal"
                                                        data-bs-target="#action-WishlistModal">
                                                        <i class="pe-7s-like"></i>
                                                    </button>
                                                    <button type="button" class="btn-product-quick-view" data-bs-toggle="modal"
                                                        data-bs-target="#action-QuickViewModal">
                                                        <i class="pe-7s-look"></i>
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

            <aside class="aside-cart-wrapper offcanvas offcanvas-end" tabindex="-1" id="AsideOffcanvasCart"
                aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h1 class="d-none" id="offcanvasRightLabel">Shopping Cart</h1>
                    <button class="btn-aside-cart-close" data-bs-dismiss="offcanvas" aria-label="Close">Shopping Cart <i
                        class="fa fa-chevron-right"></i></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="aside-cart-product-list">
                        <li class="aside-product-list-item">
                            <a href="#/" class="remove">×</a>
                            <a href="single-product.html">
                                <img src="assets/img/shop/product-mini/1.webp" width="90" height="110" alt="Image-HasTech" />
                                <span class="product-title">Leather Mens Slipper</span>
                            </a>
                            <span class="product-price">1 × £69.99</span>
                        </li>
                        <li class="aside-product-list-item">
                            <a href="#/" class="remove">×</a>
                            <a href="single-product.html">
                                <img src="assets/img/shop/product-mini/2.webp" width="90" height="110" alt="Image-HasTech" />
                                <span class="product-title">Quickiin Mens shoes</span>
                            </a>
                            <span class="product-price">1 × £20.00</span>
                        </li>
                    </ul>
                    <p class="cart-total"><span>Subtotal:</span><span class="amount">£89.99</span></p>
                    <a class="btn-total" href="shop-cart.html">View cart</a>
                    <a class="btn-total" href="shop-checkout.html">Checkout</a>
                    <a class="d-block text-end lh-1" href="shop-checkout.html"><img src="assets/img/photos/paypal.webp" width="133"
                        height="26" alt="Has-image" /></a>
                </div>
            </aside>

            <aside class="aside-search-box-wrapper offcanvas offcanvas-top" tabindex="-1" id="AsideOffcanvasSearch"
                aria-labelledby="offcanvasTopLabel">
                <div class="offcanvas-header">
                    <h5 class="d-none" id="offcanvasTopLabel">Aside Search</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i
                        class="pe-7s-close"></i></button>
                </div>
                <div class="offcanvas-body">
                    <div class="container pt--0 pb--0">
                        <div class="search-box-form-wrap">
                            <div class="search-note">
                                <p>Start typing and press Enter to search</p>
                            </div>
                            <form action="#" method="post">
                                <div class="search-form position-relative">
                                    <label for="search-input" class="visually-hidden">Search</label>
                                    <input id="search-input" type="search" class="form-control" placeholder="Search entire store…" />
                                    <button class="search-button"><i class="fa fa-search"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </aside>

            <aside class="off-canvas-wrapper offcanvas offcanvas-start" tabindex="-1" id="AsideOffcanvasMenu"
                aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h1 class="d-none" id="offcanvasExampleLabel">Aside Menu</h1>
                    <button class="btn-menu-close" data-bs-dismiss="offcanvas" aria-label="Close">menu <i
                        class="fa fa-chevron-left"></i></button>
                </div>
                <div class="offcanvas-body">
                    <nav id="offcanvasNav" class="offcanvas-menu-nav">
                        <ul>
                            <li class="offcanvas-nav-parent">
                                <a class="offcanvas-nav-item" href="index.html">Home</a>

                            </li>

                            <li class="offcanvas-nav-parent"><a class="offcanvas-nav-item" href="about-us.html">About</a></li>

                            <li class="offcanvas-nav-parent">
                                <a class="offcanvas-nav-item" href="shop.html">Shop</a>

                            </li>

                            <li class="offcanvas-nav-parent">
                                <a class="offcanvas-nav-item" href="blog-details.html">Blog</a>

                            </li>



                            <li class="offcanvas-nav-parent"><a class="offcanvas-nav-item" href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </aside>

        </div>


    );
};

export default ProductDetails;