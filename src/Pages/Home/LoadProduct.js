import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LoadProduct = ({ product }) => {

    return (
        <div className="col-sm-6 col-lg-3 isotope-item filter_best_sellers filter_on_sall">

            <div className="product-item">
                <div className="product-thumb">
                    <Link to={`/${product?._id}`}>
                        <img src={product.img} width="270" height="320" alt="Image-HasTech" />
                    </Link>
                </div>
                <div className="product-info">
                    <h4 className="title"><Link to={`/${product?._id}`}>{product.name}</Link></h4>
                    <div className="rating-box-wrap" style={{ "color": "#ffde00" }}>
                        <div className="rating-box">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>
                    <button type="button" className="btn-product-cart" data-bs-toggle="modal"><Link to={`/${product?._id}`}>
                        Buy Now
                    </Link>
                    </button>
                </div>

            </div>

        </div>
    );
};

export default LoadProduct;