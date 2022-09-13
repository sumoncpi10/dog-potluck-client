import React from 'react';
import { Link } from 'react-router-dom';

const Aside = () => {
    return (
        <div>
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
                                    <h4 className="product-name"><Link to="/">Joust Duffle Bag</Link></h4>
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
                                                        <Link to="javascript:void(0)">(5 Customer Review)</Link>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et
                                                    dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                                                <div className="product-single-meta">
                                                    <ul>
                                                        <li><span>SKU:</span> Ch-256xl</li>
                                                        <li><span>Categories:</span>
                                                            <Link to="/">Pet Food. eCommerce</Link>
                                                        </li>
                                                        <li><span>Tags:</span>
                                                            <Link to="/">Petfood. Pet</Link>,
                                                            <Link to="/">Animal.</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="product-quick-action">

                                                    <button type="button" className="btn-product-cart" data-bs-toggle="modal"
                                                        data-bs-target="#action-CartAddModal" style={{ "marginLeft": "0px" }}>
                                                        <Link to="/">Buy Now</Link>
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
                            <Link to="#/" className="remove">×</Link>
                            <Link to="/">
                                <img src="/assets/img/shop/product-mini/1.webp" width="90" height="110" alt="Image-HasTech" />
                                <span className="product-title">Leather Mens Slipper</span>
                            </Link>
                            <span className="product-price">1 × £69.99</span>
                        </li>
                        <li className="aside-product-list-item">
                            <Link to="#/" className="remove">×</Link>
                            <Link to="/">
                                <img src="assets/img/shop/product-mini/2.webp" width="90" height="110" alt="Image-HasTech" />
                                <span className="product-title">Quickiin Mens shoes</span>
                            </Link>
                            <span className="product-price">1 × £20.00</span>
                        </li>
                    </ul>
                    <p className="cart-total"><span>Subtotal:</span><span className="amount">£89.99</span></p>
                    <Link className="btn-total" to="">View cart</Link>
                    <Link className="btn-total" to="">Checkout</Link>
                    <Link className="d-block text-end lh-1" to=""><img src="assets/img/photos/paypal.webp" width="133"
                        height="26" alt="Has-image" /></Link>
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
                                <Link className="offcanvas-nav-item" to="/">Home</Link>

                            </li>

                            <li className="offcanvas-nav-parent"><Link className="offcanvas-nav-item" to="/about-us">About</Link></li>

                            <li className="offcanvas-nav-parent">
                                <Link className="offcanvas-nav-item" to="/shop">Shop</Link>

                            </li>

                            <li className="offcanvas-nav-parent">
                                <Link className="offcanvas-nav-item" to="/blogs">Blog</Link>

                            </li>



                            <li className="offcanvas-nav-parent"><Link className="offcanvas-nav-item" to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
    );
};

export default Aside;