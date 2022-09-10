import React from 'react';

import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <header className="header-area transparent">
                <div className="container">
                    <div className="row no-gutter align-items-center position-relative">
                        <div className="col-12">
                            <div className="header-align">
                                <div className="header-align-start">
                                    <div className="header-logo-area">
                                        <Link to="/">
                                            <img className="logo-main" src="assets/img/logo-light.webp" width="158" height="36" alt="Logo" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="header-align-center">
                                    <div className="header-navigation-area position-relative">
                                        <ul className="main-menu nav">
                                            <li><Link to="/"><span>Home</span></Link></li>
                                            <li><Link to="/about-us"><span>About</span></Link></li>
                                            <li><Link to="/shop"><span>Shop</span></Link></li>
                                            <li><Link to="/blogs"><span>Blog</span></Link>
                                                {/* <ul className="submenu-nav submenu-nav-mega">
                                                        <li className="mega-menu-item"><a href="#/" className="mega-title">Blog Layout</a>
                                                            <ul>
                                                                <li><a href="blog-grid.html">Blog Grid</a></li>
                                                                <li><a href="blog.html">Blog Left Sidebar</a></li>
                                                                <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-menu-item"><a href="#/" className="mega-title">Single Blog</a>
                                                            <ul>
                                                                <li><a href="blog-details-no-sidebar.html">Blog Details</a></li>
                                                                <li><a href="blog-details.html">Blog Details Left Sidebar</a></li>
                                                                <li><a href="blog-details-right-sidebar.html">Blog Details Right Sidebar</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul> */}
                                            </li>
                                            <li className="has-submenu"><a to="#/"><span>Pages</span></a>
                                                {/* <ul className="submenu-nav">
                                                        <li><a href="account.html"><span>Account</span></a></li>
                                                        <li><a href="account-login.html"><span>Login</span></a></li>
                                                        <li><a href="account-register.html"><span>Register</span></a></li>
                                                        <li><a href="page-not-found.html"><span>Page Not Found</span></a></li>
                                                    </ul> */}
                                            </li>
                                            <li><Link to="/contact"><span>Contact</span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="header-align-end">
                                    <div className="header-action-area">
                                        <div className="shopping-search">
                                            <button className="shopping-search-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#AsideOffcanvasSearch" aria-controls="AsideOffcanvasSearch"><i className="pe-7s-search icon"></i></button>
                                        </div>
                                        {/* <div className="shopping-account">
                                                <a className="shopping-account-btn" href="account-login.html">
                                                    <i className="pe-7s-users icon"></i>
                                                </a>
                                            </div>
                                            <div className="shopping-wishlist">
                                                <a className="shopping-wishlist-btn" href="shop-wishlist.html">
                                                    <i className="pe-7s-like icon"></i>
                                                </a>
                                            </div>
                                            <div className="shopping-cart">
                                                <button className="shopping-cart-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#AsideOffcanvasCart" aria-controls="AsideOffcanvasCart">
                                                    <i className="pe-7s-shopbag icon"></i>
                                                    <sup className="shop-count">2</sup>
                                                </button>
                                            </div> */}
                                        <button className="btn-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#AsideOffcanvasMenu" aria-controls="AsideOffcanvasMenu">
                                            <i className="pe-7s-menu"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;