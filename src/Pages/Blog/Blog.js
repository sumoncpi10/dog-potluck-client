import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Blog = ({ blog }) => {
    const navigate = useNavigate();
    console.log(blog);
    return (

        <div className="col-md-6 col-lg-4">

            <div className="post-item">
                <div className="thumb">
                    <a href="blog-details.html">
                        <img src={blog?.img} width="350" height="250" alt="Image-HasTech" />
                    </a>
                </div>
                <div className="content">
                    <div className="meta">
                        <ul>
                            <li className="author-info"><span>By:</span> <a href="blog.html">Admin</a></li>
                            <li className="post-date"><a href="blog.html">{blog?.date}</a></li>
                        </ul>
                    </div>
                    <h4 className="title"><a href="blog-details.html">{blog?.Tittle1}</a></h4>
                    <Link className="btn-theme btn-sm" to={`/blog/${blog?._id}`}>Read More</Link>
                </div>
            </div>

        </div>
    );
};

export default Blog;