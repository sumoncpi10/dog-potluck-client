import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Aside from '../Shared/Aside';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import Loading from '../Shared/Loading';
import Product from './Product';
const Shop = () => {

    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(8);
    const pathname = window?.location?.pathname;
    const path = pathname.split("/");
    // const categoryy = pathname[1];
    const [category, setCategory] = useState(path[1]);
    // const [bgImg, setBgImg] = useState();
    let bgImg = '';
    // console.log(page, size);
    // console.log(category);
    useEffect(() => {
        fetch(`http://localhost:5000/productCount?view=${'detail'}category=${category ? category : ''}`)
            .then(res => res.json())
            .then(data => {
                const count = data?.count;
                const page = Math.ceil(count / size);
                // console.log(page);
                setPageCount(page);
            })
    }, [size]);

    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&size=${size}&category=${category ? category : ''}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                // console.log(data);
            }
            )

    }, [page, size, category]);

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    if (!products) {
        return <Loading></Loading>
    }
    if (category) {
        console.log(category);
        if (category === 'cat') {
            bgImg = 'cat.jpg';
        }
        else if (category === 'rabbit') {
            bgImg = 'rabbit.jpg';
        }
        else if (category === 'fish') {
            bgImg = 'fish.jpg';
        }
        else if (category === 'bird') {
            bgImg = 'bird.jpg';
        }
        else {
            bgImg = 'bg1.webp';
        }
    }
    return (
        <div>
            <div className="wrapper">
                <div className="preloader-wrap">
                    <div className="preloader">
                        <div className="dog-head"></div>
                        <div className="dog-body"></div>
                    </div>
                </div>
                <Header></Header>

                <main className="main-content">

                    <div className="page-header-area " style={{ "backgroundImage": `url(assets/img/photos/${bgImg})` }} >

                        <div className="container pt--0 pb--0">
                            <div className="row">
                                <div className="col-12">
                                    <div className="page-header-content">
                                        <h2 className="title text-secondary">Products</h2>
                                        <nav className="breadcrumb-area">
                                            <ul className="breadcrumb">
                                                <li><Link to="/">Home</Link></li>
                                                <li className="breadcrumb-sep">//</li>
                                                <li>{pathname == '/shop' ? 'Products' : pathname.split("/") + ' Food'} </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="product-area">
                        <div className="container" style={{ "paddingTop": "90px" }}>
                            <div className="row justify-content-between">
                                <div className="col-12">

                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="tab-content" id="nav-tabContent">
                                                <div className="tab-pane fade show active" id="nav-grid" role="tabpanel" aria-labelledby="nav-grid-tab">
                                                    <div className='row'>
                                                        {
                                                            products.map(product => <Product product={product} key={product._id}></Product>)
                                                        }
                                                        <div className="col-12">
                                                            <div className="pagination-items pagination-items-style1">
                                                                <ul className="pagination justify-content-center mb--0">
                                                                    {
                                                                        [...Array(pageCount).keys()].map(number => <li onClick={() => setPage(number)}>
                                                                            <button className='border-0 bg-white' ><Link className={page == number ? 'active' : ''} to="/shop">{number + 1}</Link></button>
                                                                        </li>)
                                                                    }

                                                                    {/* <li><a href="shop-four-columns.html">2</a></li>
                                                                    <li><a href="shop-four-columns.html">3</a></li>
                                                                    <li><a href="shop-four-columns.html" className="icon"><i className="fa fa-angle-right"></i></a>
                                                                    </li> */}
                                                                    <li>
                                                                        <select onChange={e => setSize(e.target.value)}>
                                                                            <option value="4" >4</option>
                                                                            <option value="8" selected>8</option>
                                                                            <option value="16">16</option>
                                                                            <option value="32">32</option>
                                                                            <option value="64">66</option>
                                                                            <option value="128">128</option>
                                                                            <option value="256">256</option>
                                                                        </select>
                                                                    </li>
                                                                </ul>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <div className="row">
                                                        <div className="col-sm-6 col-xl-3">

                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <a href="single-product.html">
                                                                        <img src="assets/img/shop/2.webp" width="270" height="320" alt="Image-HasTech" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-info">
                                                                    <h4 className="title"><a href="single-product.html">Endeavor Daytripa</a></h4>
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
                                                        <div className="col-sm-6 col-xl-3">

                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <a href="single-product.html">
                                                                        <img src="assets/img/shop/3.webp" width="270" height="320" alt="Image-HasTech" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-info">
                                                                    <h4 className="title"><a href="single-product.html">Impulse Duffle</a></h4>
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
                                                        <div className="col-sm-6 col-xl-3">

                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <a href="single-product.html">
                                                                        <img src="assets/img/shop/4.webp" width="270" height="320" alt="Image-HasTech" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-info">
                                                                    <h4 className="title"><a href="single-product.html">Driven Backpack</a></h4>
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
                                                        <div className="col-sm-6 col-xl-3">

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
                                                        <div className="col-sm-6 col-xl-3">

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
                                                        <div className="col-sm-6 col-xl-3">

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
                                                        <div className="col-sm-6 col-xl-3">

                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <a href="single-product.html">
                                                                        <img src="assets/img/shop/3.webp" width="270" height="320" alt="Image-HasTech" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-info">
                                                                    <h4 className="title"><a href="single-product.html">Impulse Duffle</a></h4>
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
                                                        <div className="col-sm-6 col-xl-3">

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
                                                                    <button type="button" className="btn-product-cart" data-bs-toggle="modal"><a
                                                                        href="single-product.html">Buy Now</a>
                                                                    </button>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-sm-6 col-xl-3">

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
                                                        <div className="col-sm-6 col-xl-3">

                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <a href="single-product.html">
                                                                        <img src="assets/img/shop/4.webp" width="270" height="320" alt="Image-HasTech" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-info">
                                                                    <h4 className="title"><a href="single-product.html">Driven Backpack</a></h4>
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
                                                        <div className="col-sm-6 col-xl-3">

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
                                                        <div className="col-sm-6 col-xl-3">

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
                                                        <div className="col-sm-6 col-xl-3">

                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <a href="single-product.html">
                                                                        <img src="assets/img/shop/2.webp" width="270" height="320" alt="Image-HasTech" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-info">
                                                                    <h4 className="title"><a href="single-product.html">Endeavor Daytripa</a></h4>
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
                                                        <div className="col-sm-6 col-xl-3">

                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <a href="single-product.html">
                                                                        <img src="assets/img/shop/3.webp" width="270" height="320" alt="Image-HasTech" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-info">
                                                                    <h4 className="title"><a href="single-product.html">Impulse Duffle</a></h4>
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
                                                        <div className="col-sm-6 col-xl-3">

                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <a href="single-product.html">
                                                                        <img src="assets/img/shop/4.webp" width="270" height="320" alt="Image-HasTech" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-info">
                                                                    <h4 className="title"><a href="single-product.html">Driven Backpack</a></h4>
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
                                                        <div className="col-sm-6 col-xl-3">

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
                                                        <div className="col-12">
                                                            <div className="pagination-items pagination-items-style1">
                                                                <ul className="pagination justify-content-center mb--0">
                                                                    <li><a className="active" href="shop-four-columns.html">1</a></li>
                                                                    <li><a href="shop-four-columns.html">2</a></li>
                                                                    <li><a href="shop-four-columns.html">3</a></li>
                                                                    <li><a href="shop-four-columns.html" className="icon"><i className="fa fa-angle-right"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                </div>
                                                {/* <div className="tab-pane fade" id="nav-list" role="tabpanel" aria-labelledby="nav-list-tab">
                                                    <div className="row">
                                                        <div className="col-12">

                                                            <div className="product-item product-list-item">
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <div className="product-thumb">
                                                                            <a href="single-product.html">
                                                                                <img src="assets/img/shop/col2-1.webp" width="420" height="320" alt="Image-HasTech" />
                                                                            </a>

                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-8">
                                                                        <div className="product-info">
                                                                            <h4 className="title"><a href="single-product.html">Endeavor Daytripa</a></h4>
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
                                                                            <p className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
                                                                                quo, rerum rem soluta quisquam, repellat is deleniti omnis culpa ea quis provident
                                                                                dolore esse, offici modi dolorem nam cum eligendi enim!</p>
                                                                            <button type="button" className="btn-theme btn-sm" data-bs-toggle="modal"
                                                                                data-bs-target="#action-CartAddModal">
                                                                                Add To Cart
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="col-12">

                                                            <div className="product-item product-list-item">
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <div className="product-thumb">
                                                                            <a href="single-product.html">
                                                                                <img src="assets/img/shop/col2-2.webp" width="420" height="320" alt="Image-HasTech" />
                                                                            </a>

                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-8">
                                                                        <div className="product-info">
                                                                            <h4 className="title"><a href="single-product.html">Impulse Duffle</a></h4>
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
                                                                            <p className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
                                                                                quo, rerum rem soluta quisquam, repellat is deleniti omnis culpa ea quis provident
                                                                                dolore esse, offici modi dolorem nam cum eligendi enim!</p>
                                                                            <button type="button" className="btn-theme btn-sm" data-bs-toggle="modal"
                                                                                data-bs-target="#action-CartAddModal">
                                                                                Add To Cart
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="col-12">

                                                            <div className="product-item product-list-item">
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <div className="product-thumb">
                                                                            <a href="single-product.html">
                                                                                <img src="assets/img/shop/col2-3.webp" width="420" height="320" alt="Image-HasTech" />
                                                                            </a>

                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-8">
                                                                        <div className="product-info">
                                                                            <h4 className="title"><a href="single-product.html">Driven Backpack</a></h4>
                                                                            <button type="button" className="btn-product-cart" data-bs-toggle="modal"><a
                                                                                href="single-product.html">Buy Now</a>
                                                                            </button>
                                                                            <p className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
                                                                                quo, rerum rem soluta quisquam, repellat is deleniti omnis culpa ea quis provident
                                                                                dolore esse, offici modi dolorem nam cum eligendi enim!</p>
                                                                            <button type="button" className="btn-theme btn-sm" data-bs-toggle="modal"
                                                                                data-bs-target="#action-CartAddModal">
                                                                                Add To Cart
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="col-12">

                                                            <div className="product-item product-list-item">
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <div className="product-thumb">
                                                                            <a href="single-product.html">
                                                                                <img src="assets/img/shop/col2-4.webp" width="420" height="320" alt="Image-HasTech" />
                                                                            </a>

                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-8">
                                                                        <div className="product-info">
                                                                            <h4 className="title"><a href="single-product.html">Savvy Shoulder Tote</a></h4>
                                                                            <button type="button" className="btn-product-cart" data-bs-toggle="modal"><a
                                                                                href="single-product.html">Buy Now</a>
                                                                            </button>
                                                                            <p className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
                                                                                quo, rerum rem soluta quisquam, repellat is deleniti omnis culpa ea quis provident
                                                                                dolore esse, offici modi dolorem nam cum eligendi enim!</p>
                                                                            <button type="button" className="btn-theme btn-sm" data-bs-toggle="modal"
                                                                                data-bs-target="#action-CartAddModal">
                                                                                Add To Cart
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="col-12">

                                                            <div className="product-item product-list-item">
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <div className="product-thumb">
                                                                            <a href="single-product.html">
                                                                                <img src="assets/img/shop/col2-5.webp" width="420" height="320" alt="Image-HasTech" />
                                                                            </a>

                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-8">
                                                                        <div className="product-info">
                                                                            <h4 className="title"><a href="single-product.html">Voyage Yoga Bag</a></h4>
                                                                            <button type="button" className="btn-product-cart" data-bs-toggle="modal"><a
                                                                                href="single-product.html">Buy Now</a>
                                                                            </button>
                                                                            <p className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
                                                                                quo, rerum rem soluta quisquam, repellat is deleniti omnis culpa ea quis provident
                                                                                dolore esse, offici modi dolorem nam cum eligendi enim!</p>
                                                                            <button type="button" className="btn-theme btn-sm" data-bs-toggle="modal"
                                                                                data-bs-target="#action-CartAddModal">
                                                                                Add To Cart
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="col-12">

                                                            <div className="product-item product-list-item">
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <div className="product-thumb">
                                                                            <a href="single-product.html">
                                                                                <img src="assets/img/shop/col2-6.webp" width="420" height="320" alt="Image-HasTech" />
                                                                            </a>

                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-8">
                                                                        <div className="product-info">
                                                                            <h4 className="title"><a href="single-product.html">Wayfarer Messenger Bag</a></h4>
                                                                            <button type="button" className="btn-product-cart" data-bs-toggle="modal"><a
                                                                                href="single-product.html">Buy Now</a>
                                                                            </button>
                                                                            <p className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
                                                                                quo, rerum rem soluta quisquam, repellat is deleniti omnis culpa ea quis provident
                                                                                dolore esse, offici modi dolorem nam cum eligendi enim!</p>
                                                                            <button type="button" className="btn-theme btn-sm" data-bs-toggle="modal"
                                                                                data-bs-target="#action-CartAddModal">
                                                                                Add To Cart
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="col-12">

                                                            <div className="product-item product-list-item">
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <div className="product-thumb">
                                                                            <a href="single-product.html">
                                                                                <img src="assets/img/shop/col2-8.webp" width="420" height="320" alt="Image-HasTech" />
                                                                            </a>

                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-8">
                                                                        <div className="product-info">
                                                                            <h4 className="title"><a href="single-product.html">Impulse Duffle</a></h4>
                                                                            <button type="button" className="btn-product-cart" data-bs-toggle="modal"><a
                                                                                href="single-product.html">Buy Now</a>
                                                                            </button>
                                                                            <p className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
                                                                                quo, rerum rem soluta quisquam, repellat is deleniti omnis culpa ea quis provident
                                                                                dolore esse, offici modi dolorem nam cum eligendi enim!</p>
                                                                            <button type="button" className="btn-theme btn-sm" data-bs-toggle="modal"
                                                                                data-bs-target="#action-CartAddModal">
                                                                                Add To Cart
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="col-12">
                                                            <div className="pagination-items pagination-items-style1">
                                                                <ul className="pagination justify-content-center mb--0">
                                                                    <li><a className="active" href="shop.html">1</a></li>
                                                                    <li><a href="shop-four-columns.html">2</a></li>
                                                                    <li><a href="shop-three-columns.html">3</a></li>
                                                                    <li><a href="shop.html" className="icon"><i className="fa fa-angle-right"></i></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="nav-grid2" role="tabpanel" aria-labelledby="nav-grid2-tab">
                                                    <div className="row">
                                                        <div className="col-sm-6 col-xl-6">

                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <a href="single-product.html">
                                                                        <img src="assets/img/shop/col2-1.webp" width="420" height="320" alt="Image-HasTech" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-info">
                                                                    <h4 className="title"><a href="single-product.html">Endeavor Daytripa</a></h4>
                                                                    <button type="button" className="btn-product-cart" data-bs-toggle="modal"><a
                                                                        href="single-product.html">Buy Now</a>
                                                                    </button>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-sm-6 col-xl-6">

                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <a href="single-product.html">
                                                                        <img src="assets/img/shop/col2-2.webp" width="420" height="320" alt="Image-HasTech" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-info">
                                                                    <h4 className="title"><a href="single-product.html">Impulse Duffle</a></h4>
                                                                    <button type="button" className="btn-product-cart" data-bs-toggle="modal"><a
                                                                        href="single-product.html">Buy Now</a>
                                                                    </button>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-sm-6 col-xl-6">

                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <a href="single-product.html">
                                                                        <img src="assets/img/shop/col2-3.webp" width="420" height="320" alt="Image-HasTech" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-info">
                                                                    <h4 className="title"><a href="single-product.html">Driven Backpack</a></h4>
                                                                    <button type="button" className="btn-product-cart" data-bs-toggle="modal"><a
                                                                        href="single-product.html">Buy Now</a>
                                                                    </button>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-sm-6 col-xl-6">

                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <a href="single-product.html">
                                                                        <img src="assets/img/shop/col2-4.webp" width="420" height="320" alt="Image-HasTech" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-info">
                                                                    <h4 className="title"><a href="single-product.html">Savvy Shoulder Tote</a></h4>
                                                                    <button type="button" className="btn-product-cart" data-bs-toggle="modal"><a
                                                                        href="single-product.html">Buy Now</a>
                                                                    </button>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-sm-6 col-xl-6">

                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <a href="single-product.html">
                                                                        <img src="assets/img/shop/col2-5.webp" width="420" height="320" alt="Image-HasTech" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-info">
                                                                    <h4 className="title"><a href="single-product.html">Voyage Yoga Bag</a></h4>
                                                                    <button type="button" className="btn-product-cart" data-bs-toggle="modal"><a
                                                                        href="single-product.html">Buy Now</a>
                                                                    </button>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-sm-6 col-xl-6">

                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <a href="single-product.html">
                                                                        <img src="assets/img/shop/col2-6.webp" width="420" height="320" alt="Image-HasTech" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-info">
                                                                    <h4 className="title"><a href="single-product.html">Wayfarer Messenger Bag</a></h4>
                                                                    <button type="button" className="btn-product-cart" data-bs-toggle="modal"><a
                                                                        href="single-product.html">Buy Now</a>
                                                                    </button>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-sm-6 col-xl-6">

                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <a href="single-product.html">
                                                                        <img src="assets/img/shop/col2-2.webp" width="420" height="320" alt="Image-HasTech" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-info">
                                                                    <h4 className="title"><a href="single-product.html">Impulse Duffle</a></h4>
                                                                    <button type="button" className="btn-product-cart" data-bs-toggle="modal"><a
                                                                        href="single-product.html">Buy Now</a>
                                                                    </button>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-sm-6 col-xl-6">

                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <a href="single-product.html">
                                                                        <img src="assets/img/shop/col2-7.webp" width="420" height="320" alt="Image-HasTech" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-info">
                                                                    <h4 className="title"><a href="single-product.html">Joust Duffle Bag</a></h4>
                                                                    <button type="button" className="btn-product-cart" data-bs-toggle="modal"><a
                                                                        href="single-product.html">Buy Now</a>
                                                                    </button>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-sm-6 col-xl-6">

                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <a href="single-product.html">
                                                                        <img src="assets/img/shop/col2-8.webp" width="420" height="320" alt="Image-HasTech" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-info">
                                                                    <h4 className="title"><a href="single-product.html">Fusion Backpack</a></h4>
                                                                    <button type="button" className="btn-product-cart" data-bs-toggle="modal"><a
                                                                        href="single-product.html">Buy Now</a>
                                                                    </button>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-sm-6 col-xl-6">

                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <a href="single-product.html">
                                                                        <img src="assets/img/shop/col2-3.webp" width="420" height="320" alt="Image-HasTech" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-info">
                                                                    <h4 className="title"><a href="single-product.html">Driven Backpack</a></h4>
                                                                    <button type="button" className="btn-product-cart" data-bs-toggle="modal"><a
                                                                        href="single-product.html">Buy Now</a>
                                                                    </button>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-sm-6 col-xl-6">

                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <a href="single-product.html">
                                                                        <img src="assets/img/shop/col2-5.webp" width="420" height="320" alt="Image-HasTech" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-info">
                                                                    <h4 className="title"><a href="single-product.html">Voyage Yoga Bag</a></h4>
                                                                    <button type="button" className="btn-product-cart" data-bs-toggle="modal"><a
                                                                        href="single-product.html">Buy Now</a>
                                                                    </button>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-sm-6 col-xl-6">

                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <a href="single-product.html">
                                                                        <img src="assets/img/shop/col2-6.webp" width="420" height="320" alt="Image-HasTech" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-info">
                                                                    <h4 className="title"><a href="single-product.html">Wayfarer Messenger Bag</a></h4>
                                                                    <button type="button" className="btn-product-cart" data-bs-toggle="modal"><a
                                                                        href="single-product.html">Buy Now</a>
                                                                    </button>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-12">
                                                            <div className="pagination-items pagination-items-style1">
                                                                <ul className="pagination justify-content-center mb--0">
                                                                    <li><a className="active" href="shop.html">1</a></li>
                                                                    <li><a href="shop-four-columns.html">2</a></li>
                                                                    <li><a href="shop-three-columns.html">3</a></li>
                                                                    <li><a href="shop.html" className="icon"><i className="fa fa-angle-right"></i></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
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

                <Aside></Aside>
                {/* <aside className="product-action-modal modal fade" id="action-WishlistModal" tabindex="-1" aria-hidden="true">
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
                </aside> */}

            </div>
        </div>
    );
};

export default Shop;