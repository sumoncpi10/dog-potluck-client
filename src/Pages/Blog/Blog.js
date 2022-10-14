import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Blog = ({ blog }) => {
    const navigate = useNavigate();
    console.log(blog);
    return (

        <div className="col-md-6 col-lg-4">

            <div className="post-item">
                <div className="thumb">
                    <Link to={`/blog/${blog?._id}`}>
                        <img src={blog?.img || blog?.img1} width="350" height="250" alt="Image-HasTech" />
                    </Link>
                </div>
                <div className="content">
                    <div className="meta">
                        <ul>
                            <li className="author-info"><span>By:</span> <a href="/blog">Admin</a></li>
                            {/* <li className="post-date"><a href="/blog">{blog?.date}</a></li> */}

                        </ul>
                    </div>
                    <h4 className="title"><Link to={`/blog/${blog?._id}`}>{blog?.Tittle1}</Link></h4>
                    {/* <p>{blog?.description11}</p> */}
                    <Link className="btn-theme btn-sm" to={`/blog/${blog?._id}`}>Read More</Link>
                </div>
            </div>

        </div>
    );
};

export default Blog;