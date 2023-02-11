import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DealsOfTheDay = ({ deals }) => {
    let navigate = useNavigate();
    const NevigateToDtail = () => {

        navigate(`/${deals?._id}`);
    }
    return (
        <div className="col-12 col-sm-6">

            <div className="product-item daily-product-item">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="product-thumb">

                            <Link to={`/product/${deals?._id}`}>
                                <img src={deals?.img} width="270" height="320" alt="Image-HasTech" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="product-info">
                            {/* <div className="ht-countdown-wrap">
                                <span className="countdown-title">End In:</span>
                                <div className="ht-countdown ht-countdown-style1" data-date="1/10/2022"></div>
                            </div> */}
                            <h4 className="title"><Link to={`/product/${deals?._id}`}>{deals.name}</Link></h4>
                            <div className="rating-box-wrap" style={{ "color": "#ffde00" }}>
                                <div className="rating-box">
                                    {
                                        deals?.rating >= 1 ? <i className="fa fa-star"></i> : <i class="fa fa-star" style={{ color: 'gray' }}></i>
                                    }
                                    {
                                        deals?.rating >= 2 ? <i className="fa fa-star"></i> : <i class="fa fa-star" style={{ color: 'gray' }}></i>
                                    }
                                    {
                                        deals?.rating >= 3 ? <i className="fa fa-star"></i> : <i class="fa fa-star" style={{ color: 'gray' }}></i>
                                    }
                                    {
                                        deals?.rating >= 4 ? <i className="fa fa-star"></i> : <i class="fa fa-star" style={{ color: 'gray' }}></i>
                                    }
                                    {
                                        deals?.rating == 5 ? <i className="fa fa-star"></i> : <i class="fa fa-star" style={{ color: 'gray' }}></i>
                                    }
                                </div>
                            </div>
                            <div className="prices">
                                <span className="price"><Link to={`/product/${deals?._id}`}>Buy Now</Link></span>
                            </div>
                            <div className="product-feature-list">
                                <ul>
                                    {
                                        deals?.unitCount ? <li><span>Total Weight :</span> {deals?.unitCount}</li> : ''
                                    }
                                    {
                                        deals?.numberOfItems ? <li><span>Number of Items:</span> {deals?.numberOfItems}</li> : ''
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default DealsOfTheDay;