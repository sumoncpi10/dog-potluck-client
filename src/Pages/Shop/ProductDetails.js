import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../Shared/Header';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Review from './Review';
import Footer from '../Shared/Footer';
// import Swiper from 'swiper';
import Swiper, { Navigation, Pagination } from 'swiper';
const ProductDetails = () => {
    Swiper.use([Navigation, Pagination]);
    (function ($) {


        // // Background Image Js
        // const bgSelector = $("[data-bg-img]");
        // bgSelector.each(function (index, elem) {
        //     let element = $(elem),
        //         bgSource = element.data('bg-img');
        //     element.css('background-image', 'url(' + bgSource + ')');
        // });

        // // Background Color Js
        // const Bgcolorcl = $("[data-bg-color]");
        // Bgcolorcl.each(function (index, elem) {
        //     let element = $(elem),
        //         Bgcolor = element.data('bg-color');
        //     element.css('background-color', Bgcolor);
        // });

        // // Offcanvas Nav Js
        // var $offcanvasNav = $("#offcanvasNav a");
        // $offcanvasNav.on("click", function () {
        //     var link = $(this);
        //     var closestUl = link.closest("ul");
        //     var activeLinks = closestUl.find(".active");
        //     var closestLi = link.closest("li");
        //     var linkStatus = closestLi.hasClass("active");
        //     var count = 0;

        //     closestUl.find("ul").slideUp(function () {
        //         if (++count == closestUl.find("ul").length)
        //             activeLinks.removeClass("active");
        //     });

        //     if (!linkStatus) {
        //         closestLi.children("ul").slideDown();
        //         closestLi.addClass("active");
        //     }
        // });

        // // Menu Activeion Js
        // var cururl = window.location.pathname;
        // var curpage = cururl.substr(cururl.lastIndexOf('/') + 1);
        // var hash = window.location.hash.substr(1);
        // if ((curpage === "" || curpage === "/" || curpage === "admin") && hash === "") {
        // } else {
        //     $(".header-navigation-area li").each(function () {
        //         $(this).removeClass("active");
        //     });
        //     if (hash != "")
        //         $(".header-navigation-area li a[href='" + hash + "']").parents("li").addClass("active");
        //     else
        //         $(".header-navigation-area li a[href='" + curpage + "']").parents("li").addClass("active");
        // }

        // // Swiper Default Slider Js
        // var mainlSlider = new Swiper('.default-slider-container', {
        //     slidesPerView: 1,
        //     slidesPerGroup: 1,
        //     loop: true,
        //     speed: 700,
        //     spaceBetween: 0,
        //     effect: 'fade',
        //     autoHeight: true, //enable auto height
        //     fadeEffect: {
        //         crossFade: true,
        //     },
        //     navigation: {
        //         nextEl: '.default-slider-container .swiper-btn-next',
        //         prevEl: '.default-slider-container .swiper-btn-prev',
        //     },
        // });

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

        // // Testimonial Slider Js
        // var testimonialSlider = new Swiper('.testimonial-slider-container', {
        //     slidesPerView: 3,
        //     slidesPerGroup: 1,
        //     allowTouchMove: false,
        //     spaceBetween: 30,
        //     speed: 600,
        //     effect: 'fade',
        //     fadeEffect: {
        //         crossFade: true,
        //     },
        //     breakpoints: {
        //         1200: {
        //             slidesPerView: 3,
        //             spaceBetween: 30,
        //         },
        //         992: {
        //             slidesPerView: 1,
        //             spaceBetween: 30,
        //         },
        //         0: {
        //             slidesPerView: 1,
        //             spaceBetween: 30,
        //             allowTouchMove: true,
        //         },
        //     }
        // });

        // Fancybox Js
        // $('.image-popup').fancybox();
        // $('.video-popup').fancybox();

        // // Product Quantity JS
        // var proQty = $(".pro-qty");
        // proQty.append('<div class= "dec qty-btn">-</div>');
        // proQty.append('<div className="inc qty-btn">+</div>');
        // $('.qty-btn').on('click', function (e) {
        //     e.preventDefault();
        //     var $button = $(this);
        //     var oldValue = $button.parent().find('input').val();
        //     if ($button.hasClass('inc')) {
        //         var newVal = parseFloat(oldValue) + 1;
        //     } else {
        //         // Don't allow decrementing below zero
        //         if (oldValue > 1) {
        //             var newVal = parseFloat(oldValue) - 1;
        //         } else {
        //             newVal = 1;
        //         }
        //     }
        //     $button.parent().find('input').val(newVal);
        // });

        // // Countdown Js 
        // $(".ht-countdown").each(function (index, element) {
        //     var $element = $(element),
        //         $date = $element.data('date');
        //     $element.countdown($date, function (event) {
        //         var $this = $(this).html(event.strftime(''
        //             +
        //             '<div className="countdown-item"><span className="countdown-item__time">%D</span><span className="countdown-item__label">days</span></div>' +
        //             '<div className="countdown-item"><span className="countdown-item__time">%H</span><span className="countdown-item__label">Hours</span></div>' +
        //             '<div className="countdown-item"><span className="countdown-item__time">%M</span><span className="countdown-item__label">Mins</span></div>' +
        //             '<div className="countdown-item"><span className="countdown-item__time">%S</span><span className="countdown-item__label">Secs</span></div>'));
        //     });
        // });

        // // Price Range
        // $(".js-range-slider").ionRangeSlider({
        //     skin: "round",
        //     hide_min_max: true,    // show/hide MIN and MAX labels
        //     prefix: "$",
        // });

        // // Ajax Contact Form JS
        // var form = $('#contact-form');
        // var formMessages = $('.form-message');

        // $(form).submit(function (e) {
        //     e.preventDefault();
        //     var formData = form.serialize();
        //     $.ajax({
        //         type: 'POST',
        //         url: form.attr('action'),
        //         data: formData
        //     }).done(function (response) {
        //         // Make sure that the formMessages div has the 'success' class.
        //         $(formMessages).removeClass('alert alert-danger');
        //         $(formMessages).addClass('alert alert-success fade show');

        //         // Set the message text.
        //         formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");
        //         formMessages.append(response);

        //         // Clear the form.
        //         $('#contact-form input,#contact-form textarea').val('');
        //     }).fail(function (data) {
        //         // Make sure that the formMessages div has the 'error' class.
        //         $(formMessages).removeClass('alert alert-success');
        //         $(formMessages).addClass('alert alert-danger fade show');

        //         // Set the message text.
        //         if (data.responseText === '') {
        //             formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");
        //             formMessages.append(data.responseText);
        //         } else {
        //             $(formMessages).text('Oops! An error occurred and your message could not be sent.');
        //         }
        //     });
        // });

        // Portfolio Filter Js
        const activeId = $(".isotope-filter button");
        $(".isotope-grid").isotope();
        activeId.on('click', function () {
            const $this = $(this),
                filterValue = $this.data('filter');
            $(".isotope-grid").isotope({
                filter: filterValue
            });
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
        // varWindow.on('load', function () {
        //     // stylePreloader
        //     stylePreloader();
        // });

    })(window.jQuery);
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
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
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

        <div className="wrapper">

            <div className="preloader-wrap">
                <div className="preloader">
                    <div className="dog-head"></div>
                    <div className="dog-body"></div>
                </div>
            </div>

            <Header></Header>

            {/* <header className="header-area transparent">
                <div className="container">
                    <div className="row no-gutter align-items-center position-relative">
                        <div className="col-12">
                            <div className="header-align">
                                <div className="header-align-start">
                                    <div className="header-logo-area">
                                        <a href="index.html">
                                            <img className="logo-main" src="assets/img/logo-light.webp" width="158" height="36" alt="Logo" />
                                        </a>
                                    </div>
                                </div>
                                <div className="header-align-center">
                                    <div className="header-navigation-area position-relative">
                                        <ul className="main-menu nav">
                                            <li><a href="index.html"><span>Home</span></a></li>
                                            <li><a href="about-us.html"><span>About</span></a></li>
                                            <li><a href="shop.html"><span>Shop</span></a></li>
                                            <li><a href="blog.html"><span>Blog</span></a>

                                            </li>

                                            <li><a href="contact.html"><span>Contact</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="header-align-end">
                                    <div className="header-action-area">
                                        <div className="shopping-search">
                                            <button className="shopping-search-btn" type="button" data-bs-toggle="offcanvas"
                                                data-bs-target="#AsideOffcanvasSearch" aria-controls="AsideOffcanvasSearch"><i
                                                    className="pe-7s-search icon"></i></button>
                                        </div>

                                        <button className="btn-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#AsideOffcanvasMenu"
                                            aria-controls="AsideOffcanvasMenu">
                                            <i className="pe-7s-menu"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header> */}


            <main className="main-content">

                <div className="page-header-area" style={{ "backgroundImage": "url(assets/img/photos/bg1.webp)" }}>
                    <div className="container pt--0 pb--0">
                        <div className="row">
                            <div className="col-12">
                                <div className="page-header-content">
                                    <h2 className="title">Products</h2>
                                    <nav className="breadcrumb-area">
                                        <ul className="breadcrumb">
                                            <li><a href="index.html">Home</a></li>
                                            <li className="breadcrumb-sep">//</li>
                                            <li><Link to={'/shop'}>Products</Link></li>
                                            <li className="breadcrumb-sep">//</li>
                                            <li>{product?.name}</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="product-area product-single-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="product-single-item">
                                    <div className="row">
                                        <div className="col-lg-6">

                                            <div className="product-single-thumb">
                                                <div className="swiper single-product-thumb single-product-thumb-slider">
                                                    <div className="swiper-wrapper">
                                                        <div className="swiper-slide">
                                                            <a className="lightbox-image" data-fancybox="gallery"
                                                                href="assets/img/shop/product-single/1.webp">
                                                                <img src={product?.img} width="570" height="675"
                                                                    alt="Image-HasTech" />
                                                            </a>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <a className="lightbox-image" data-fancybox="gallery"
                                                                href="assets/img/shop/product-single/2.webp">
                                                                <img src={product?.imgUrl1} width="570" height="675"
                                                                    alt="Image-HasTech" />
                                                            </a>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <a className="lightbox-image" data-fancybox="gallery"
                                                                href="assets/img/shop/product-single/3.webp">
                                                                <img src={product?.imgUrl2} width="570" height="675"
                                                                    alt="Image-HasTech" />
                                                            </a>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <a className="lightbox-image" data-fancybox="gallery"
                                                                href="assets/img/shop/product-single/4.webp">
                                                                <img src={product?.imgUrl3} width="570" height="675"
                                                                    alt="Image-HasTech" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-single-swiper-wrap position-relative">
                                                    <div className="swiper single-product-nav single-product-nav-slider">
                                                        <div className="swiper-wrapper">
                                                            <div className="swiper-slide">
                                                                <img src={product?.img} width="127" height="127"
                                                                    alt="Image-HasTech" />
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <img src={product?.imgUrl1} width="127" height="127"
                                                                    alt="Image-HasTech" />
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <img src={product?.imgUrl2} width="127" height="127"
                                                                    alt="Image-HasTech" />
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <img src={product?.imgUrl3} width="127" height="127"
                                                                    alt="Image-HasTech" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="single-swiper-btn-wrap">
                                                        <div className="swiper-btn-prev">
                                                            <i className="fa fa-angle-left"></i>
                                                        </div>
                                                        <div className="swiper-btn-next">
                                                            <i className="fa fa-angle-right"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-lg-6">

                                            <div className="product-single-info">
                                                <h3 className="main-title">{product?.name}</h3>

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
                                                <p className='w-75 text-justify'>{product?.description1}</p>
                                                <div className="product-single-meta">
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
                                                <div className="product-quick-action">

                                                    <button type="button" className="btn-product-cart" data-bs-toggle="modal" style={{ "marginLeft": "0px" }}>
                                                        <a target='_blank' href={product?.priceUrl}>CHECK PRICE</a>
                                                    </button>

                                                </div>
                                                <div className="product-review-tabs-content">
                                                    <ul className="nav product-tab-nav" id="ReviewTab" role="tablist">
                                                        <li role="presentation">
                                                            <a className="active" id="information-tab" data-bs-toggle="pill" href="#information" role="tab"
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
                                                    <div className="tab-content product-tab-content" id="ReviewTabContent">
                                                        <div className="tab-pane fade show active" id="information" role="tabpanel"
                                                            aria-labelledby="information-tab">
                                                            <div className="product-information">
                                                                <p>{product?.information}</p>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="description" role="tabpanel" aria-labelledby="description-tab">
                                                            <div className="product-description">
                                                                <p>{product?.description2}</p>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                                            <div className="product-review-content">
                                                                <div className="comment-author">
                                                                    <div className="comment-thumb">
                                                                        <img src="assets/img/shop/avatar.webp" width="60" height="60" alt="Image-HasTech" />
                                                                    </div>
                                                                    {
                                                                        reviews.map(review => <Review key={review._id} review={review}></Review>)
                                                                    }


                                                                </div>
                                                                <div className="comment-form-content">
                                                                    <h4 className="title collapsed" data-bs-toggle="collapse"
                                                                        data-bs-target="#comment-widgetId-1">Add Reviwe</h4>
                                                                    <div id="comment-widgetId-1" className="collapse collapse-body">
                                                                        <div className="review-comment-form">
                                                                            <form onSubmit={addReview} method='post'>
                                                                                <div className="row">
                                                                                    <div className="col-12">
                                                                                        <div className="form-group">
                                                                                            <label for="ReviewComment" className="form-label">Your review *</label>
                                                                                            <textarea name='ReviewComment' id="ReviewComment" className="form-control" required></textarea>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-12">
                                                                                        <div className="form-group">
                                                                                            <label for="Reviewname" className="form-label">Name *</label>
                                                                                            <input name="Reviewname" id="Reviewname" className="form-control" type="text" required />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-12">
                                                                                        <div className="form-group">
                                                                                            <label for="Reviewemail" className="form-label">Email *</label>
                                                                                            <input name="Reviewemail" id="Reviewemail" className="form-control" type="email" required />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-md-12">
                                                                                        <div className="form-group mb--0">
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

                <section className="product-area product-default-area">
                    <div className="container pt--0">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title shape-center text-center">
                                    <h5 className="sub-title">Best PRODUCT</h5>
                                    <h2 className="title">Related Products</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-lg-3">

                                <div className="product-item">
                                    <div className="product-thumb">
                                        <a href="single-product.html">
                                            <img src="assets/img/shop/5.webp" width="270" height="320" alt="Image-HasTech" />
                                        </a>
                                    </div>
                                    <div className="product-info">
                                        <h4 className="title"><a href="single-product.html">Fusion Backpack</a></h4>
                                        <div className="rating-box-wrap" style={{ "color": "#ffde00" }}>
                                            <div className="rating-box">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <button type="button" className="btn-product-cart" data-bs-toggle="modal"><a
                                            href="single-product.html">Buy Now</a>
                                        </button>
                                    </div>

                                </div>

                            </div>
                            <div className="col-sm-6 col-lg-3">

                                <div className="product-item">
                                    <div className="product-thumb">
                                        <a href="single-product.html">
                                            <img src="assets/img/shop/6.webp" width="270" height="320" alt="Image-HasTech" />
                                        </a>
                                    </div>
                                    <div className="product-info">
                                        <h4 className="title"><a href="single-product.html">Savvy Shoulder Tote</a></h4>
                                        <div className="rating-box-wrap" style={{ "color": "#ffde00" }}>
                                            <div className="rating-box">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <button type="button" className="btn-product-cart" data-bs-toggle="modal"><a
                                            href="single-product.html">Buy Now</a>
                                        </button>
                                    </div>

                                </div>

                            </div>
                            <div className="col-sm-6 col-lg-3">

                                <div className="product-item">
                                    <div className="product-thumb">
                                        <a href="single-product.html">
                                            <img src="assets/img/shop/7.webp" width="270" height="320" alt="Image-HasTech" />
                                        </a>
                                    </div>
                                    <div className="product-info">
                                        <h4 className="title"><a href="single-product.html">Voyage Yoga Bag</a></h4>
                                        <div className="rating-box-wrap" style={{ "color": "#ffde00" }}>
                                            <div className="rating-box">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <button type="button" className="btn-product-cart" data-bs-toggle="modal"><a
                                            href="single-product.html">Buy Now</a>
                                        </button>
                                    </div>

                                </div>

                            </div>
                            <div className="col-sm-6 col-lg-3">

                                <div className="product-item">
                                    <div className="product-thumb">
                                        <a href="single-product.html">
                                            <img src="assets/img/shop/8.webp" width="270" height="320" alt="Image-HasTech" />
                                        </a>
                                    </div>
                                    <div className="product-info">
                                        <h4 className="title"><a href="single-product.html">Wayfarer Messenger Bag</a></h4>
                                        <div className="rating-box-wrap" style={{ "color": "#ffde00" }}>
                                            <div className="rating-box">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <button type="button" className="btn-product-cart" data-bs-toggle="modal"><a
                                            href="single-product.html">Buy Now</a>
                                        </button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </main>


            {/* <footer className="footer-area">

                <div className="footer-main">
                    <div className="container pt--0 pb--0">
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <div className="widget-item widget-about">
                                    <h4 className="widget-title">About Us</h4>
                                    <p className="desc">Lorem ipsum dolor sit amet, consectel adipisicing elit, sed do eiusmod temp incidid ut
                                        labore et dolo</p>
                                    <div className="social-icons">
                                        <a href="https://www.facebook.com/" target="_blank" rel="noopener"><i className="fa fa-facebook"></i></a>
                                        <a href="https://instagram.com/" target="_blank" rel="noopener"><i className="fa fa-instagram"></i></a>
                                        <a href="https://www.pinterest.com/" target="_blank" rel="noopener"><i
                                            className="fa fa-pinterest-p"></i></a>
                                        <a href="https://twitter.com/" target="_blank" rel="noopener"><i className="fa fa-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="widget-item nav-menu-item1">
                                    <h4 className="widget-title">Information</h4>
                                    <h4 className="widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#widgetId-1">Our
                                        Policy</h4>
                                    <div id="widgetId-1" className="collapse widget-collapse-body">
                                        <div className="collapse-body">
                                            <div className="widget-menu-wrap">
                                                <ul className="nav-menu">
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

                            <div className="col-md-6 col-lg-4">
                                <div className="widget-item">
                                    <h4 className="widget-title">Contact Info:</h4>
                                    <h4 className="widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#widgetId-3">
                                        Contact Info:</h4>
                                    <div id="widgetId-3" className="collapse widget-collapse-body">
                                        <div className="collapse-body">
                                            <div className="widget-contact-info">
                                                <p className="contact-info-desc">If you have any question.please contact us at <a
                                                    href="mailto://dogpotluck@gmail.com">dogpotluck@gmail.com</a></p>
                                                <div className="contact-item">
                                                    <div className="icon">
                                                        <i className="pe-7s-map-marker"></i>
                                                    </div>
                                                    <div className="info">
                                                        <p>36-20 Summers Place <br />Saskatoon, SK, Canada.</p>
                                                    </div>
                                                </div>
                                                <div className="contact-item phone-info">
                                                    <div className="icon">
                                                        <i className="pe-7s-phone"></i>
                                                    </div>
                                                    <div className="info">
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

                <div className="footer-bottom">
                    <div className="container pt--0 pb--0">
                        <div className="row">
                            <div className="col-12">
                                <div className="footer-bottom-content">
                                    <p className="copyright">© 2022 DogPotluck. Made with <i className="fa fa-heart"></i> by <a target="_blank"
                                        href="#">Robin.</a></p>
                                    <div className="payment">
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

            <div id="scroll-to-top" className="scroll-to-top"><span className="fa fa-angle-up"></span></div>


            <aside className="product-action-modal modal fade" id="action-WishlistModal" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="product-action-view-content">
                                <button type="button" className="btn-close" data-bs-dismiss="modal">
                                    <i className="pe-7s-close"></i>
                                </button>
                                <div className="modal-action-messages">
                                    <i className="pe-7s-check"></i> Added to wishlist successfully!
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

            <aside className="product-action-modal modal fade" id="action-CartAddModal" tabindex="-1" aria-hidden="true">
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

            <aside className="product-cart-view-modal modal fade" id="action-QuickViewModal" tabindex="-1" aria-hidden="true">
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
                                                <div className="prices">
                                                    <span className="price">$20.19</span>
                                                </div>
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
                                                    <div className="qty-wrap">
                                                        <div className="pro-qty">
                                                            <input type="text" title="Quantity" value="01" />
                                                        </div>
                                                    </div>
                                                    <button type="button" className="btn-product-cart" data-bs-toggle="modal"
                                                        data-bs-target="#action-CartAddModal">
                                                        Add To Cart
                                                    </button>
                                                    <button type="button" className="btn-product-wishlist" data-bs-toggle="modal"
                                                        data-bs-target="#action-WishlistModal">
                                                        <i className="pe-7s-like"></i>
                                                    </button>
                                                    <button type="button" className="btn-product-quick-view" data-bs-toggle="modal"
                                                        data-bs-target="#action-QuickViewModal">
                                                        <i className="pe-7s-look"></i>
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

            <aside className="aside-cart-wrapper offcanvas offcanvas-end" tabindex="-1" id="AsideOffcanvasCart"
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

            <aside className="aside-search-box-wrapper offcanvas offcanvas-top" tabindex="-1" id="AsideOffcanvasSearch"
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
                                    <label for="search-input" className="visually-hidden">Search</label>
                                    <input id="search-input" type="search" className="form-control" placeholder="Search entire store…" />
                                    <button className="search-button"><i className="fa fa-search"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </aside>

            <aside className="off-canvas-wrapper offcanvas offcanvas-start" tabindex="-1" id="AsideOffcanvasMenu"
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


    );
};

export default ProductDetails;