import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './DashboardLeftSidebar.css';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import ProductAdd from './Products/ProductAdd';
import 'react-toastify/dist/ReactToastify.css';
const DashboardLeftSidebar = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const SignOut = (e) => {
        sessionStorage.clear();
        navigate('/');
    }
    const onSubmit = (e) => {
        // e.preventDefault();
        console.log(e);
        const category = e.category;
        const name = e.productName;
        const brand = e.brandName;
        const price = e.price;
        const quantity = e.quantity;
        const minquantity = e.minquantity;
        const img = e.imgURL;
        const description = e.description;
        const supplier = e.supplierName;
        // console.log(name, email, password);
        const product = { name, brand, price, quantity, minquantity, img, description, supplier, category };
        // send data to the server 
        fetch('https://ancient-sierra-92602.herokuapp.com/productAdd', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('success', data);

                toast("Product Add Successfully!");
                reset();
            })
    }
    return (

        <div className="flex-shrink-0 p-3  " style={{ "width": "280px", "backgroundColor": "#C4AEAD", "height": "100vh" }}>
            <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                {/* <svg className="bi me-2" width="30" height="24"><use xlink:href="#bootstrap"></use></svg> */}
                <img className="logo-main" src="/assets/img/logo-light.webp" width="158" height="36" alt="Logo" />
                {/* <span className="fs-5 fw-semibold">Collapsible</span> */}
            </a>
            <ul className="list-unstyled ps-0">
                {/* <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                            Home
                        </button>
                        <div className="collapse show" id="home-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="link-dark rounded">Overview</a></li>
                                <li><a href="#" className="link-dark rounded">Updates</a></li>
                                <li><a href="#" className="link-dark rounded">Reports</a></li>
                            </ul>
                        </div>
                    </li> */}
                <li className="mb-1">
                    <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="true">
                        Dashboard
                    </button>
                    <div className="collapse show" id="dashboard-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><Link to="/add-product" className="link-dark rounded">Add Product</Link></li>
                            <li><Link to="/manageProduct" className="link-dark rounded">Manage All Product</Link></li>
                            {/* <li><Link to="/admin/view" className="link-dark rounded">Overview</Link></li> */}
                            {/* <li><a href="#" className="link-dark rounded">Annually</a></li> */}
                        </ul>
                    </div>
                </li>
                <li className="mb-1">
                    <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#manage-collapse" aria-expanded="true">
                        Message
                    </button>
                    <div className="collapse " id="manage-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><Link to="/manageMessage" className="link-dark rounded">Manage All Message</Link></li>
                            {/* <li><Link to="/admin/view" className="link-dark rounded">Overview</Link></li> */}
                            {/* <li><a href="#" className="link-dark rounded">Annually</a></li> */}
                        </ul>
                    </div>
                </li>
                <li className="mb-1">
                    <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#blog-collapse" aria-expanded="true">
                        Blog
                    </button>
                    <div className="collapse " id="blog-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><Link to="/add-blog" className="link-dark rounded">Add Blog</Link></li>
                            <li><Link to="/manageBlog" className="link-dark rounded">Manage All Blog</Link></li>
                            {/* <li><Link to="/admin/view" className="link-dark rounded">Overview</Link></li> */}
                            {/* <li><a href="#" className="link-dark rounded">Annually</a></li> */}
                        </ul>
                    </div>
                </li>
                {/* <li className="mb-1">
                    <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                        Orders
                    </button>
                    <div className="collapse" id="orders-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="link-dark rounded">New</a></li>
                            <li><a href="#" className="link-dark rounded">Processed</a></li>
                            <li><a href="#" className="link-dark rounded">Shipped</a></li>
                            <li><a href="#" className="link-dark rounded">Returned</a></li>
                        </ul>
                    </div>
                </li> */}
                <li className="border-top my-3"></li>
                <li className="mb-1">
                    <button className="btn btn-toggle align-items-center rounded " data-bs-toggle="collapse" data-bs-target="#pages-collapse" aria-expanded="false">
                        Pages
                    </button>
                    <div className="collapse" id="pages-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><Link to="/manageAboutPage" className="link-dark rounded">Manage About</Link></li>
                            <li><a href="#" className="link-dark rounded">Manage Contact</a></li>
                            <li><a href="/updateButtonLink" className="link-dark rounded">Manage Button Link</a></li>
                            {/* <li><a href="#" className="link-dark rounded">Settings</a></li> */}
                            {/* <li><a href="" onClick={SignOut} className="link-dark rounded">Sign out</a></li> */}
                        </ul>
                    </div>
                </li>
                <li className="mb-1">
                    <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                        Account
                    </button>
                    <div className="collapse" id="account-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="link-dark rounded">New...</a></li>
                            <li><a href="#" className="link-dark rounded">Profile</a></li>
                            <li><a href="#" className="link-dark rounded">Settings</a></li>
                            <li><a href="" onClick={SignOut} className="link-dark rounded">Sign out</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>


    );
};

export default DashboardLeftSidebar;