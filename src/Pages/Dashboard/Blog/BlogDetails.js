import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer';
import Header from '../../Shared/Header';
import { Link } from 'react-router-dom';
import Aside from '../../Shared/Aside';
const BlogDetails = () => {
    const [blog, setBlog] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/blog/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setBlog(data);
            })
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

                <Header></Header>


                <main className="main-content">

                    <div className="page-header-area" style={{ "backgroundImage": "url(/assets/img/photos/bg1.webp)" }}>
                        <div className="container pt--0 pb--0">
                            <div className="row">
                                <div className="col-12">
                                    <div className="page-header-content">
                                        <h2 className="title">Blog</h2>
                                        <nav className="breadcrumb-area">
                                            <ul className="breadcrumb">
                                                <li><Link to="/">Home</Link></li>
                                                <li className="breadcrumb-sep">//</li>
                                                <li>Blog</li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="blog-details-area">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-12">
                                    <div className="blog-details-content-wrap">
                                        <h1 className='text-center pb-3'>The Best Dry Dog Foods October 2022</h1>
                                        <div className="blog-details-item mb-3">
                                            <div className="blog-details-thumb">
                                                <img className='w-50 rounded mx-auto d-block' src={blog?.img || blog?.img1} width="1100" height="590" alt="Image-HasTech" />
                                            </div>
                                            <div className="blog-details-content">
                                                <h3 className="main-title text-center">{blog?.Tittle1}</h3>
                                                <div className='px-5 '>
                                                    <p className='font-weight-bold'>{blog?.description11}</p>
                                                    <p className='font-weight-bold'>{blog?.description21}</p>
                                                    <p className='font-weight-bold'>{blog?.description31}</p>
                                                </div>
                                                <div className="product-quick-action d-flex justify-content-center pb-5">
                                                    <button type="button" className="btn btn-warning" data-bs-toggle="modal" style={{ "marginLeft": "0px" }}>
                                                        <a target='_blank' href={blog?.priceUrl1}>CHECK PRICE</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="blog-details-item mb-3">
                                            <div className="blog-details-thumb">
                                                <img className='w-50 rounded mx-auto d-block' src={blog?.img2} width="1100" height="590" alt="Image-HasTech" />
                                            </div>
                                            <div className="blog-details-content">
                                                <h3 className="main-title text-center">{blog?.Tittle2}</h3>
                                                <div className='px-5 '>
                                                    <p className='font-weight-bold'>{blog?.description12}</p>
                                                    <p className='font-weight-bold'>{blog?.description22}</p>
                                                    <p className='font-weight-bold'>{blog?.description32}</p>
                                                </div>
                                                <div className="product-quick-action d-flex justify-content-center pb-5">
                                                    <button type="button" className="btn btn-warning" data-bs-toggle="modal" style={{ "marginLeft": "0px" }}>
                                                        <a target='_blank' href={blog?.priceUrl2}>CHECK PRICE</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="blog-details-item mb-3">
                                            <div className="blog-details-thumb">
                                                <img className='w-50 rounded mx-auto d-block' src={blog?.img3} width="1100" height="590" alt="Image-HasTech" />
                                            </div>
                                            <div className="blog-details-content">
                                                <h3 className="main-title text-center">{blog?.Tittle3}</h3>
                                                <div className='px-5 '>
                                                    <p className='font-weight-bold'>{blog?.description13}</p>
                                                    <p className='font-weight-bold'>{blog?.description23}</p>
                                                    <p className='font-weight-bold'>{blog?.description33}</p>
                                                </div>
                                                <div className="product-quick-action d-flex justify-content-center pb-5">
                                                    <button type="button" className="btn btn-warning" data-bs-toggle="modal" style={{ "marginLeft": "0px" }}>
                                                        <a target='_blank' href={blog?.priceUrl3}>CHECK PRICE</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="blog-details-item mb-3">
                                            <div className="blog-details-thumb">
                                                <img className='w-50 rounded mx-auto d-block' src={blog?.img4} width="1100" height="590" alt="Image-HasTech" />
                                            </div>
                                            <div className="blog-details-content">
                                                <h3 className="main-title text-center">{blog?.Tittle4}</h3>
                                                <div className='px-5 '>
                                                    <p className='font-weight-bold'>{blog?.description14}</p>
                                                    <p className='font-weight-bold'>{blog?.description24}</p>
                                                    <p className='font-weight-bold'>{blog?.description34}</p>
                                                </div>
                                                <div className="product-quick-action d-flex justify-content-center pb-5">
                                                    <button type="button" className="btn btn-warning" data-bs-toggle="modal" style={{ "marginLeft": "0px" }}>
                                                        <a target='_blank' href={blog?.priceUrl4}>CHECK PRICE</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="blog-details-item mb-3">
                                            <div className="blog-details-thumb">
                                                <img className='w-50 rounded mx-auto d-block' src={blog?.img5} width="1100" height="590" alt="Image-HasTech" />
                                            </div>
                                            <div className="blog-details-content">
                                                <h3 className="main-title text-center">{blog?.Tittle5}</h3>
                                                <div className='px-5 '>
                                                    <p className='font-weight-bold'>{blog?.description15}</p>
                                                    <p className='font-weight-bold'>{blog?.description25}</p>
                                                    <p className='font-weight-bold'>{blog?.description35}</p>
                                                </div>
                                                <div className="product-quick-action d-flex justify-content-center pb-5">
                                                    <button type="button" className="btn btn-warning" data-bs-toggle="modal" style={{ "marginLeft": "0px" }}>
                                                        <a target='_blank' href={blog?.priceUrl5}>CHECK PRICE</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="blog-details-item mb-3">
                                            <div className="blog-details-thumb">
                                                <img className='w-50 rounded mx-auto d-block' src={blog?.img6} width="1100" height="590" alt="Image-HasTech" />
                                            </div>
                                            <div className="blog-details-content">
                                                <h3 className="main-title text-center">{blog?.Tittle6}</h3>
                                                <div className='px-5 '>
                                                    <p className='font-weight-bold'>{blog?.description16}</p>
                                                    <p className='font-weight-bold'>{blog?.description26}</p>
                                                    <p className='font-weight-bold'>{blog?.description36}</p>
                                                </div>
                                                <div className="product-quick-action d-flex justify-content-center pb-5">
                                                    <button type="button" className="btn btn-warning" data-bs-toggle="modal" style={{ "marginLeft": "0px" }}>
                                                        <a target='_blank' href={blog?.priceUrl6}>CHECK PRICE</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="blog-details-item mb-3">
                                            <div className="blog-details-thumb">
                                                <img className='w-50 rounded mx-auto d-block' src={blog?.img7} width="1100" height="590" alt="Image-HasTech" />
                                            </div>
                                            <div className="blog-details-content">
                                                <h3 className="main-title text-center">{blog?.Tittle7}</h3>
                                                <div className='px-5 '>
                                                    <p className='font-weight-bold'>{blog?.description17}</p>
                                                    <p className='font-weight-bold'>{blog?.description27}</p>
                                                    <p className='font-weight-bold'>{blog?.description37}</p>
                                                </div>
                                                <div className="product-quick-action d-flex justify-content-center pb-5">
                                                    <button type="button" className="btn btn-warning" data-bs-toggle="modal" style={{ "marginLeft": "0px" }}>
                                                        <a target='_blank' href={blog?.priceUrl7}>CHECK PRICE</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-details-item mb-3">
                                            <div className="blog-details-thumb">
                                                <img className='w-50 rounded mx-auto d-block' src={blog?.img8} width="1100" height="590" alt="Image-HasTech" />
                                            </div>
                                            <div className="blog-details-content">
                                                <h3 className="main-title text-center">{blog?.Tittle8}</h3>
                                                <div className='px-5 '>
                                                    <p className='font-weight-bold'>{blog?.description18}</p>
                                                    <p className='font-weight-bold'>{blog?.description28}</p>
                                                    <p className='font-weight-bold'>{blog?.description38}</p>
                                                </div>
                                                <div className="product-quick-action d-flex justify-content-center pb-5">
                                                    <button type="button" className="btn btn-warning" data-bs-toggle="modal" style={{ "marginLeft": "0px" }}>
                                                        <a target='_blank' href={blog?.priceUrl8}>CHECK PRICE</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-details-item mb-3">
                                            <div className="blog-details-thumb">
                                                <img className='w-50 rounded mx-auto d-block' src={blog?.img9} width="1100" height="590" alt="Image-HasTech" />
                                            </div>
                                            <div className="blog-details-content">
                                                <h3 className="main-title text-center">{blog?.Tittle9}</h3>
                                                <div className='px-5 '>
                                                    <p className='font-weight-bold'>{blog?.description19}</p>
                                                    <p className='font-weight-bold'>{blog?.description29}</p>
                                                    <p className='font-weight-bold'>{blog?.description39}</p>
                                                </div>
                                                <div className="product-quick-action d-flex justify-content-center pb-5">
                                                    <button type="button" className="btn btn-warning" data-bs-toggle="modal" style={{ "marginLeft": "0px" }}>
                                                        <a target='_blank' href={blog?.priceUrl9}>CHECK PRICE</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="blog-details-item mb-3">
                                            <div className="blog-details-thumb">
                                                <img className='w-50 rounded mx-auto d-block' src={blog?.img10} width="1100" height="590" alt="Image-HasTech" />
                                            </div>
                                            <div className="blog-details-content">
                                                <h3 className="main-title text-center">{blog?.Tittle10}</h3>
                                                <div className='px-5 '>
                                                    <p className='font-weight-bold'>{blog?.description110}</p>
                                                    <p className='font-weight-bold'>{blog?.description210}</p>
                                                    <p className='font-weight-bold'>{blog?.description310}</p>
                                                </div>
                                                <div className="product-quick-action d-flex justify-content-center pb-5">
                                                    <button type="button" className="btn btn-warning" data-bs-toggle="modal" style={{ "marginLeft": "0px" }}>
                                                        <a target='_blank' href={blog?.priceUrl10}>CHECK PRICE</a>
                                                    </button>
                                                </div>
                                                <div className="blog-details-footer">
                                                    <div className="tage-list">
                                                        <span>Tags:</span>
                                                        <Link to={`/${blog?.category}`} className='uppercase' >{blog?.category}</Link>
                                                        <Link to="/blog">Animal</Link>
                                                        <Link to="/blog">Dog</Link>
                                                    </div>
                                                    <div className="social-icons">
                                                        <span>Share:</span>
                                                        <a href="https://www.facebook.com/" target="_blank" rel="noopener"><i className="fa fa-facebook"></i></a>
                                                        <a href="https://instagram.com/" target="_blank" rel="noopener"><i className="fa fa-instagram"></i></a>
                                                        <a href="https://www.pinterest.com/" target="_blank" rel="noopener"><i className="fa fa-pinterest-p"></i></a>
                                                        <a href="https://twitter.com/" target="_blank" rel="noopener"><i className="fa fa-twitter"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>




                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </main>



                <Footer></Footer>
                <div id="scroll-to-top" className="scroll-to-top"><span className="fa fa-angle-up"></span></div>
                <Aside></Aside>


            </div>
        </div >
    );
};

export default BlogDetails;

