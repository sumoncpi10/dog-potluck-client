import React, { useEffect, useState } from 'react';

const LoadProduct = ({ product }) => {

    return (
        <div className="col-sm-6 col-lg-3 isotope-item filter_best_sellers filter_on_sall">

            <div className="product-item">
                <div className="product-thumb">
                    <a href="single-product.html">
                        <img src={product.img} width="270" height="320" alt="Image-HasTech" />
                    </a>
                </div>
                <div className="product-info">
                    <h4 className="title"><a href="single-product.html">{product.name}</a></h4>
                    <div className="rating-box-wrap" style={{ "color": "#ffde00" }}>
                        <div className="rating-box">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>
                    <button type="button" className="btn-product-cart" data-bs-toggle="modal"><a href="single-product.html">
                        Buy Now
                    </a>
                    </button>
                </div>

            </div>

        </div>
    );
};

export default LoadProduct;