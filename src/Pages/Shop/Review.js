import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="comment-content">
            <div className="rating-box">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
            </div>
            <h4 className="title"><span>{review?.Reviewname}</span> - {review.today}</h4>
            <p className="desc red">{review?.ReviewComment}</p>
        </div>
    );
};

export default Review;