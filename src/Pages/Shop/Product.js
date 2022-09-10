import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Product = ({ product }) => {
    let navigate = useNavigate();
    const NevigateToDtail = () => {

        navigate(`/${product?._id}`);
    }
    return (
        <div className="col-sm-6 col-xl-3">

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
                    <button onClick={NevigateToDtail} type="button" className="btn-product-cart" data-bs-toggle="modal">Buy Now
                    </button>
                </div>

            </div>

        </div >
    );
};

export default Product;