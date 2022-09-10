import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banar from "../Shared/Banar";
import Footer from "../Shared/Footer";
import HeaderHome from "../Shared/HeaderHome";
import Product from '../Shop/Product';
import DealsOfTheDay from './DealsOfTheDay';
import LoadProduct from './LoadProduct';
import Loading from '../Shared/Loading';
// import $ from "jquery";
import Swiper, { Navigation } from 'swiper';
const Home = () => {
    Swiper.use([Navigation]);
    (function ($) {

        "use strict";

        // Preloader
        function stylePreloader() {
            $('body').addClass('preloader-deactive');
        }

        // Background Image Js
        const bgSelector = $("[data-bg-img]");
        bgSelector.each(function (index, elem) {
            let element = $(elem),
                bgSource = element.data('bg-img');
            element.css('background-image', 'url(' + bgSource + ')');
        });

        // Background Color Js
        const Bgcolorcl = $("[data-bg-color]");
        Bgcolorcl.each(function (index, elem) {
            let element = $(elem),
                Bgcolor = element.data('bg-color');
            element.css('background-color', Bgcolor);
        });

        // Offcanvas Nav Js
        var $offcanvasNav = $("#offcanvasNav a");
        $offcanvasNav.on("click", function () {
            var link = $(this);
            var closestUl = link.closest("ul");
            var activeLinks = closestUl.find(".active");
            var closestLi = link.closest("li");
            var linkStatus = closestLi.hasClass("active");
            var count = 0;

            closestUl.find("ul").slideUp(function () {
                if (++count == closestUl.find("ul").length)
                    activeLinks.removeClass("active");
            });

            if (!linkStatus) {
                closestLi.children("ul").slideDown();
                closestLi.addClass("active");
            }
        });

        // Menu Activeion Js
        var cururl = window.location.pathname;
        var curpage = cururl.substr(cururl.lastIndexOf('/') + 1);
        var hash = window.location.hash.substr(1);
        if ((curpage === "" || curpage === "/" || curpage === "admin") && hash === "") {
        } else {
            $(".header-navigation-area li").each(function () {
                $(this).removeClass("active");
            });
            if (hash != "")
                $(".header-navigation-area li a[href='" + hash + "']").parents("li").addClass("active");
            else
                $(".header-navigation-area li a[href='" + curpage + "']").parents("li").addClass("active");
        }

        // Swiper Default Slider Js
        var mainlSlider = new Swiper('.default-slider-container', {
            slidesPerView: 1,
            slidesPerGroup: 1,
            loop: true,
            speed: 700,
            spaceBetween: 0,
            effect: 'fade',
            autoHeight: true, //enable auto height
            fadeEffect: {
                crossFade: true,
            },
            navigation: {
                nextEl: '.default-slider-container .swiper-btn-next',
                prevEl: '.default-slider-container .swiper-btn-prev',
            },
        });

        // Product Single Thumb Slider Js
        var ProductNav = new Swiper('.single-product-nav-slider', {
            spaceBetween: 20,
            slidesPerView: 3,
            mousewheel: {
                invert: true,
            },
            navigation: {
                nextEl: '.product-single-swiper-wrap .swiper-btn-next',
                prevEl: '.product-single-swiper-wrap .swiper-btn-prev',
            },
        });
        var ProductThumb = new Swiper('.single-product-thumb-slider', {
            effect: 'fade',
            mousewheelControl: true,
            fadeEffect: {
                crossFade: true,
            },
            thumbs: {
                swiper: ProductNav,
            }
        });

        // Testimonial Slider Js
        var testimonialSlider = new Swiper('.testimonial-slider-container', {
            slidesPerView: 3,
            slidesPerGroup: 1,
            allowTouchMove: false,
            spaceBetween: 30,
            speed: 600,
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            breakpoints: {
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                992: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                0: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    allowTouchMove: true,
                },
            }
        });

        // Fancybox Js
        $('.image-popup').fancybox();
        $('.video-popup').fancybox();

        // Product Quantity JS
        var proQty = $(".pro-qty");
        proQty.append('<div class= "dec qty-btn">-</div>');
        proQty.append('<div className="inc qty-btn">+</div>');
        $('.qty-btn').on('click', function (e) {
            e.preventDefault();
            var $button = $(this);
            var oldValue = $button.parent().find('input').val();
            if ($button.hasClass('inc')) {
                var newVal = parseFloat(oldValue) + 1;
            } else {
                // Don't allow decrementing below zero
                if (oldValue > 1) {
                    var newVal = parseFloat(oldValue) - 1;
                } else {
                    newVal = 1;
                }
            }
            $button.parent().find('input').val(newVal);
        });

        // // Countdown Js 
        $(".ht-countdown").each(function (index, element) {
            var $element = $(element),
                $date = $element.data('date');
            $element.countdown($date, function (event) {
                var $this = $(this).html(event.strftime(''
                    +
                    '<div className="countdown-item"><span className="countdown-item__time">%D</span><span className="countdown-item__label">days</span></div>' +
                    '<div className="countdown-item"><span className="countdown-item__time">%H</span><span className="countdown-item__label">Hours</span></div>' +
                    '<div className="countdown-item"><span className="countdown-item__time">%M</span><span className="countdown-item__label">Mins</span></div>' +
                    '<div className="countdown-item"><span className="countdown-item__time">%S</span><span className="countdown-item__label">Secs</span></div>'));
            });
        });

        // Price Range
        $(".js-range-slider").ionRangeSlider({
            skin: "round",
            hide_min_max: true,    // show/hide MIN and MAX labels
            prefix: "$",
        });

        // Ajax Contact Form JS
        var form = $('#contact-form');
        var formMessages = $('.form-message');

        $(form).submit(function (e) {
            e.preventDefault();
            var formData = form.serialize();
            $.ajax({
                type: 'POST',
                url: form.attr('action'),
                data: formData
            }).done(function (response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass('alert alert-danger');
                $(formMessages).addClass('alert alert-success fade show');

                // Set the message text.
                formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");
                formMessages.append(response);

                // Clear the form.
                $('#contact-form input,#contact-form textarea').val('');
            }).fail(function (data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('alert alert-success');
                $(formMessages).addClass('alert alert-danger fade show');

                // Set the message text.
                if (data.responseText === '') {
                    formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");
                    formMessages.append(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occurred and your message could not be sent.');
                }
            });
        });

        // Portfolio Filter Js
        const activeId = $(".isotope-filter button");
        // $(".isotope-grid").isotope();
        activeId.on('click', function () {
            const $this = $(this),
                filterValue = $this.data('filter');
            // $(".isotope-grid").isotope({
            //     filter: filterValue
            // });
            activeId.removeClass('active');
            $this.addClass('active');
        });

        // scrollToTop Js
        function scrollToTop() {
            var $scrollUp = $('#scroll-to-top'),
                $lastScrollTop = 0,
                $window = $(window);
            $window.on('scroll', function () {
                var st = $(this).scrollTop();
                if (st > $lastScrollTop) {
                    $scrollUp.removeClass('show');
                } else {
                    if ($window.scrollTop() > 120) {
                        $scrollUp.addClass('show');
                    } else {
                        $scrollUp.removeClass('show');
                    }
                }
                $lastScrollTop = st;
            });
            $scrollUp.on('click', function (evt) {
                $('html, body').animate({ scrollTop: 0 }, 50);
                evt.preventDefault();
            });
        }
        scrollToTop();

        /* ==========================================================================
           When document is loading, do
           ========================================================================== */
        var varWindow = $(window);
        varWindow.on('load', function () {
            // stylePreloader
            stylePreloader();
        });

    })(window.jQuery);
    const [products, setProducts] = useState([]);
    const [dealsOfTheDay, setdealsOfTheDay] = useState([]);
    console.log(products)
    useEffect(() => {
        fetch(`http://localhost:5000/productType/${'all'}`)
            .then(res => res.json())
            .then(data =>
                setProducts(data))
    }, []);
    useEffect(() => {
        fetch(`http://localhost:5000/dealsOfTheDay/${'deals'}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setdealsOfTheDay(data)
            })

    }, []);
    const LoadAllProducts = (collection_type) => {

        fetch(`http://localhost:5000/productType/${collection_type}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data =>
                setProducts(data))
    }
    if (!products) {
        return <Loading></Loading>
    }
    return (
        <div>
            <>
                {/* <Banar /> */}
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
                        <section className="home-slider-area">
                            <div className="swiper home-slider-container default-slider-container">
                                <div className="swiper-wrapper home-slider-wrapper slider-default">
                                    <div className="swiper-slide">
                                        <div className="slider-content-area" data-bg-img="assets/img/slider/slider-bg.webp">
                                            <div className="container">
                                                <div className="slider-container">
                                                    <div className="row justify-content-between align-items-center">
                                                        <div className="col-sm-6 col-md-6">
                                                            <div className="slider-content">
                                                                <div className="content">
                                                                    <div className="sub-title-box">
                                                                        <h5 className="sub-title">Up To 40% Off</h5>
                                                                    </div>
                                                                    <div className="title-box">
                                                                        <h2 className="title">A Greate Meal With Your Pet</h2>
                                                                    </div>
                                                                    <div className="btn-box">
                                                                        <a className="btn-theme text-dark" href="shop.html">Shop Now</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-md-6">
                                                            <div className="slider-thumb mousemove">
                                                                <div className="thumb">
                                                                    <img src="assets/img/slider/slider-01.webp" width="585" height="579" alt="Image-HasTech" />
                                                                    <div className="shape-one"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="slider-content-two-area" data-bg-img="assets/img/slider/slider-02.webp">
                                            <div className="container">
                                                <div className="slider-container">
                                                    <div className="row justify-content-sm-end justify-content-center align-items-center">
                                                        <div className="col-sm-8 col-md-6">
                                                            <div className="slider-content">
                                                                <div className="content">
                                                                    <div className="sub-title-box">
                                                                        <h5 className="sub-title">100% Genue Products</h5>
                                                                    </div>
                                                                    <div className="title-box">
                                                                        <h2 className="title">This Food Best Your Pet</h2>
                                                                    </div>
                                                                    <div className="desc-box">
                                                                        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddo do eiusmod tempor incidid ut labore.</p>
                                                                    </div>
                                                                    <div className="btn-box">
                                                                        <a className="btn-theme text-dark" href="shop.html">Shop Now</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="home-overlay"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-btn-wrap">
                                    <div className="swiper-btn-prev">
                                        <i className="pe-7s-angle-left"></i>
                                    </div>
                                    <div className="swiper-btn-next">
                                        <i className="pe-7s-angle-right"></i>
                                    </div>
                                </div>
                            </div>
                        </section>






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
                                                <Link to='/dog'>
                                                    <img src="assets/img/shop/banner/1.webp" width="570" height="300" alt="Image-HasTech" />
                                                </Link>

                                            </div>
                                            <div className="content">
                                                <h5 className="sub-title">50% Off</h5>
                                                <h5 className="title">Dog Food</h5>
                                                <Link className="btn-theme btn-theme-color btn-sm" to='/dog'>Buy Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="banner-product-single-item">
                                            <div className="thumb">
                                                <Link to='/cat'>
                                                    <img src="assets/img/shop/banner/2.webp" width="570" height="300" alt="Image-HasTech" />
                                                </Link>
                                            </div>
                                            <div className="content">
                                                <h5 className="sub-title">50% Off</h5>
                                                <h5 className="title">Cat Food</h5>
                                                <Link className="btn-theme btn-theme-color btn-sm" to='/cat'>Buy Now</Link>

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
                                            <button onClick={() => LoadAllProducts('all')} className="active" data-filter="*">All</button>
                                            <button onClick={() => LoadAllProducts('new')} data-filter=".filter_new">New</button>
                                            <button onClick={() => LoadAllProducts('bestSeller')} data-filter=".filter_best_sellers">Best Sellers</button>
                                            <button onClick={() => LoadAllProducts('featured')} data-filter=".filter_featured">Featured</button>
                                            <button onClick={() => LoadAllProducts('onSall')} data-filter=".filter_on_sall">On Sall</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row isotope-grid">
                                    {
                                        products?.map(product => <Product key={product._id} product={product}></Product>)
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
                                    {
                                        dealsOfTheDay.map(deals => <DealsOfTheDay key={deals?._id} deals={deals}></DealsOfTheDay>)
                                    }

                                    {/* <div className="col-12 col-sm-6">

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

                                    </div> */}
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
                                                <Link className="btn-theme" to="/shop">Shop Now</Link>
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
                                                        <img src="/assets/img/shop/quick-view1.webp" width="544" height="560" alt="Image-HasTech" />
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
        </div >
    );
};

export default Home;