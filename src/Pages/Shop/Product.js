import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Product = ({ product }) => {
    let navigate = useNavigate();
    const NevigateToDtail = () => {

        navigate(`/${product?._id}`);
    }
    return (
        <div class="col-sm-6 col-xl-3">

            <div class="product-item">
                <div class="product-thumb">
                    <Link to={`/${product?._id}`}>
                        <img src={product.img} width="270" height="320" alt="Image-HasTech" />
                    </Link>
                </div>
                <div class="product-info">
                    <h4 class="title"><Link to={`/${product?._id}`}>{product.name}</Link></h4>
                    <div class="rating-box-wrap" style={{ "color": "#ffde00" }}>
                        <div class="rating-box">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                    </div>
                    <button onClick={NevigateToDtail} type="button" class="btn-product-cart" data-bs-toggle="modal">Buy Now
                    </button>
                </div>

            </div>

        </div >
    );
};

export default Product;