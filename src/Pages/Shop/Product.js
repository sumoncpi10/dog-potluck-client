import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Product = ({ product }) => {
    let navigate = useNavigate();
    const NevigateToDtail = () => {

        navigate(`/product/${product?._id}`);
    }
    return (
        <div className="col-sm-6 col-xl-3">

            <div className="product-item">
                <div className="product-thumb">
                    <Link to={`/product/${product?._id}`}>
                        <img src={product.img} width="270" height="320" alt="Image-HasTech" />
                    </Link>
                </div>
                <div className="product-info">
                    <h4 className="title"><Link to={`/product/${product?._id}`}>{product.name}</Link></h4>
                    <div className="rating-box-wrap" style={{ "color": "#ffde00" }}>
                        <div className="rating-box">
                            {
                                product?.rating >= 1 ? <i className="fa fa-star"></i> : <i class="fa fa-star" style={{ color: 'gray' }}></i>
                            }
                            {
                                product?.rating >= 2 ? <i className="fa fa-star"></i> : <i class="fa fa-star" style={{ color: 'gray' }}></i>
                            }
                            {
                                product?.rating >= 3 ? <i className="fa fa-star"></i> : <i class="fa fa-star" style={{ color: 'gray' }}></i>
                            }
                            {
                                product?.rating >= 4 ? <i className="fa fa-star"></i> : <i class="fa fa-star" style={{ color: 'gray' }}></i>
                            }
                            {
                                product?.rating == 5 ? <i className="fa fa-star"></i> : <i class="fa fa-star" style={{ color: 'gray' }}></i>
                            }

                        </div>
                    </div>
                    <button onClick={NevigateToDtail} type="button" className="btn-product-cart" data-bs-toggle="modal">Buy Now
                    </button>
                </div>

            </div>

        </div >
    );
};

export default Product;