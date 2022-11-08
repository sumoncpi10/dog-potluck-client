import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import Aside from '../Shared/Aside';
import { useEffect } from 'react';
import { useState } from 'react';

const AboutUs = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://obscure-forest-36360.herokuapp.com/abouts`)
            .then(res => res.json())
            .then(data => {
                // setProducts(data);
                console.log(data);
                setProducts(data);

            }
            )

    }, []);
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
                        {
                            products.map(product => <div className="container" key={product._id}>
                                <div className="about-item about-item-style2 position-relative">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="about-thumb text-center">
                                                <img src={product?.img} width="529" height="429" alt="Image-HasTech" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="about-content">
                                                <div className="section-title shape-left">
                                                    <h5 className="sub-title">{product?.tittle}</h5>
                                                    <h2 className="title">{product?.boldTittle}</h2>
                                                </div>
                                                <p>{product?.description1}</p>
                                                <p className="text-color-theme">{product?.description2}</p>
                                                <Link className="btn-theme" to={`/${product?.btnUrl}`}>Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }

                    </section>


                </main>



                <Footer></Footer>


                <div id="scroll-to-top" className="scroll-to-top"><span className="fa fa-angle-up"></span></div>
                <Aside></Aside>


            </div>
        </div>
    );
};

export default AboutUs;