import React from 'react';

const Banar = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="swiper-slide">
                            <div className="slider-content-area" style={{ "backgroundImage": "url(assets/img/slider/slider-bg.webp)" }} >
                                <div className="container ">
                                    <div className="slider-container mx-5">
                                        <div className="row justify-content-between align-items-center">
                                            <div className="col-sm-6 col-md-6">
                                                <div className="slider-content">
                                                    <div className="content">
                                                        <div className="sub-title-box">
                                                            <h5 className="sub-title text-white">Up To 40% Off</h5>
                                                        </div>
                                                        <div className="title-box">
                                                            <h2 className="title text-white">A Greate Meal With Your Pet</h2>
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

                    </div>
                    <div className="carousel-item ">
                        <div className="swiper-slide">
                            <div className="slider-content-two-area " style={{ "backgroundImage": "url(assets/img/slider/slider-02.webp)", "backgroundColor": "red" }} >
                                <div className="container">
                                    <div className="slider-container py-3">
                                        <div className="row justify-content-sm-end justify-content-center align-items-center">

                                            <div className="col-sm-8 col-md-6 p-5">
                                                <div className="slider-content ">
                                                    <div className="content ">
                                                        <div className="sub-title-box">
                                                            <h5 className="sub-title " style={{ "color": "#ffd868", "fontSize": "18px", "fontWeight": "400", "letterSpacing": "3.2px", "marginBottom": "21px", "paddingLeft": "0", "position": "relative", "textTransform": "uppercase" }}>100% Genue Products</h5>
                                                        </div>
                                                        <div className="title-box">
                                                            <h2 className="title text-white bold" style={{ "fontSize": "62px", "marginBottom": "30px" }}>This Food Best Your Pet</h2>
                                                        </div>
                                                        <div className="desc-box">
                                                            <p className="desc" style={{ "color": "#fff", "fontSize": "16px", "lineHeight": "1.9375", "marginBottom": "50px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddo do eiusmod
                                                                tempor incidid ut labore.</p>
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

                </div>



                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div >
    );
};

export default Banar;