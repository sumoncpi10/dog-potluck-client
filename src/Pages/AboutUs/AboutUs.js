import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import Aside from '../Shared/Aside';

const AboutUs = () => {
    return (
        <div>
            <div className="wrapper">
                <div className="preloader-wrap">
                    <div className="preloader">
                        <div className="dog-head"></div>
                        <div className="dog-body"></div>
                    </div>
                </div>
                {/* <Header></Header> */}


                <Header></Header>

                <main className="main-content">

                    <div className="page-header-area" style={{ "backgroundImage": "url(assets/img/photos/bg1.webp)" }} >
                        <div className="container pt--0 pb--0">
                            <div className="row">
                                <div className="col-12">
                                    <div className="page-header-content">
                                        <h2 className="title">About Us</h2>
                                        <nav className="breadcrumb-area">
                                            <ul className="breadcrumb">
                                                <li><Link to="/">Home</Link></li>
                                                <li className="breadcrumb-sep">//</li>
                                                <li>About Us</li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="about-area about-inner-area bg-color-f6">
                        <div className="container">
                            <div className="about-item about-item-style2 position-relative">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="about-thumb text-center">
                                            <img src="assets/img/about/2.webp" width="529" height="429" alt="Image-HasTech" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="about-content">
                                            <div className="section-title shape-left">
                                                <h5 className="sub-title">Best PRODUCT</h5>
                                                <h2 className="title">Best Pet Food</h2>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                                            <p className="text-color-theme">Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata non proident, sunt in culpa qui officia deserun</p>
                                            <Link className="btn-theme" to="/shop">Shop Now</Link>
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
                                        <p className="desc">Lorem ipsum dolor sit amet, consectel adipisicing elit, sed do eiusmod temp incidid ut labore et dolo</p>
                                        <div className="social-icons">
                                            <a href="https://www.facebook.com/" target="_blank" rel="noopener"><i className="fa fa-facebook"></i></a>
                                            <a href="https://instagram.com/" target="_blank" rel="noopener"><i className="fa fa-instagram"></i></a>
                                            <a href="https://www.pinterest.com/" target="_blank" rel="noopener"><i className="fa fa-pinterest-p"></i></a>
                                            <a href="https://twitter.com/" target="_blank" rel="noopener"><i className="fa fa-twitter"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="widget-item nav-menu-item1">
                                        <h4 className="widget-title">Information</h4>
                                        <h4 className="widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#widgetId-1">Our Policy</h4>
                                        <div id="widgetId-1" className="collapse widget-collapse-body">
                                            <div className="collapse-body">
                                                <div className="widget-menu-wrap">
                                                    <ul className="nav-menu">
                                                        <li><a href="about-us.html">About Us</a></li>
                                                        <li><a href="disclaimer.html">Privacy Policy</a></li>
                                                        <li><a href="disclaimer.html">Disclaimer</a></li>
                                                        <li><a href="contact.html">Contact Us</a></li>
                                                        <li><a href="account-login.html">Loag In Info</a></li>
                                                        <li><a href="account-login.html">Delivery Information</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="widget-item">
                                        <h4 className="widget-title">Contact Info:</h4>
                                        <h4 className="widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#widgetId-3">Contact Info:</h4>
                                        <div id="widgetId-3" className="collapse widget-collapse-body">
                                            <div className="collapse-body">
                                                <div className="widget-contact-info">
                                                    <p className="contact-info-desc">If you have any question.please contact us at <a href="mailto://dogpotluck@gmail.com">dogpotluck@gmail.com</a></p>
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
                                        <p className="copyright">© 2022 DogPotluck. Made with <i className="fa fa-heart"></i> by <a target="_blank" href="#">Robin.</a></p>
                                        <div className="payment">
                                            <a href="index.html"><img src="assets/img/logo-light.webp" width="192" height="21" alt="Payment Logo" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </footer> */}
                <Footer></Footer>


                <div id="scroll-to-top" className="scroll-to-top"><span className="fa fa-angle-up"></span></div>
                <Aside></Aside>
                {/* 
                <aside className="product-action-modal modal fade" id="action-WishlistModal" tabindex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="product-action-view-content">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal">
                                        <i className="pe-7s-close"></i>
                                    </button>
                                    <div className="modal-action-messages">
                                        <i className="pe-7s-check"></i>  Added to wishlist successfully!
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
                                        <i className="pe-7s-check"></i>  Added to cart successfully!
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
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
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
                                                        <button type="button" className="btn-product-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                                                            Add To Cart
                                                        </button>
                                                        <button type="button" className="btn-product-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                            <i className="pe-7s-like"></i>
                                                        </button>
                                                        <button type="button" className="btn-product-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
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

                <aside className="aside-cart-wrapper offcanvas offcanvas-end" tabindex="-1" id="AsideOffcanvasCart" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h1 className="d-none" id="offcanvasRightLabel">Shopping Cart</h1>
                        <button className="btn-aside-cart-close" data-bs-dismiss="offcanvas" aria-label="Close">Shopping Cart <i className="fa fa-chevron-right"></i></button>
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
                        <a className="d-block text-end lh-1" href="shop-checkout.html"><img src="assets/img/photos/paypal.webp" width="133" height="26" alt="Has-image" /></a>
                    </div>
                </aside>

                <aside className="aside-search-box-wrapper offcanvas offcanvas-top" tabindex="-1" id="AsideOffcanvasSearch" aria-labelledby="offcanvasTopLabel">
                    <div className="offcanvas-header">
                        <h5 className="d-none" id="offcanvasTopLabel">Aside Search</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i className="pe-7s-close"></i></button>
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

                <aside className="off-canvas-wrapper offcanvas offcanvas-start" tabindex="-1" id="AsideOffcanvasMenu" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h1 className="d-none" id="offcanvasExampleLabel">Aside Menu</h1>
                        <button className="btn-menu-close" data-bs-dismiss="offcanvas" aria-label="Close">menu <i className="fa fa-chevron-left"></i></button>
                    </div>
                    <div className="offcanvas-body">
                        <nav id="offcanvasNav" className="offcanvas-menu-nav">
                            <ul>
                                <li className="offcanvas-nav-parent">
                                    <a className="offcanvas-nav-item" href="index.html">Home</a>
                                    <ul>
                                        <li><a href="index.html"><span>Home One</span></a></li>
                                        <li><a href="index-two.html"><span>Home Two</span></a></li>
                                    </ul>
                                </li>

                                <li className="offcanvas-nav-parent"><a className="offcanvas-nav-item" href="about-us.html">About</a></li>

                                <li className="offcanvas-nav-parent">
                                    <a className="offcanvas-nav-item" href="shop.html">Shop</a>
                                    <ul>
                                        <li>
                                            <a className="offcanvas-nav-item" href="javascript:void(0)">Shop Layouts</a>
                                            <ul>
                                                <li><a href="shop-three-columns.html"><span>Shop 3 Column</span></a></li>
                                                <li><a href="shop-four-columns.html"><span>Shop 4 Column</span></a></li>
                                                <li><a href="shop-left-sidebar.html"><span>Shop Left Sidebar</span></a></li>
                                                <li><a href="shop.html"><span>Shop Right Sidebar</span></a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="offcanvas-nav-item" href="javascript:void(0)">Single Product</a>
                                            <ul>
                                                <li><a href="single-normal-product.html"><span>Single Product Normal</span></a></li>
                                                <li><a href="single-product.html"><span>Single Product Variable</span></a></li>
                                                <li><a href="single-group-product.html"><span>Single Product Group</span></a></li>
                                                <li><a href="single-affiliate-product.html"><span>Single Product Affiliate</span></a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="offcanvas-nav-item" href="javascript:void(0)">Others Pages</a>
                                            <ul>
                                                <li><a href="shop-cart.html"><span>Shopping Cart</span></a></li>
                                                <li><a href="shop-checkout.html"><span>Checkout</span></a></li>
                                                <li><a href="shop-wishlist.html"><span>Wishlist</span></a></li>
                                                <li><a href="shop-compare.html"><span>Compare</span></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li className="offcanvas-nav-parent">
                                    <a className="offcanvas-nav-item" href="blog-details.html">Blog</a></li>


                                <li className="offcanvas-nav-parent"><a className="offcanvas-nav-item" href="contact.html">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </aside> */}

            </div>
        </div>
    );
};

export default AboutUs;