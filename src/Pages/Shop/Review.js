import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="comment-content">
            <div class="rating-box">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
            <h4 class="title"><span>{review?.Reviewname}</span> - {review.today}</h4>
            <p class="desc red">{review?.ReviewComment}</p>
        </div>
    );
};

export default Review;