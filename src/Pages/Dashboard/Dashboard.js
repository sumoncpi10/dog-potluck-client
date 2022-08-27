import React from 'react';
import { Link } from 'react-router-dom';
// import './Dashboard.css';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import ProductAdd from './Products/ProductAdd';
import 'react-toastify/dist/ReactToastify.css';
const Dashboard = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

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
                console.log('success', data);

                toast("Product Add Successfully!");
                reset();
            })
    }
    return (
        <div className='d-flex'>
            <div class="flex-shrink-0 p-3  " style={{ "width": "280px", "backgroundColor": "#C4AEAD", "height": "100vh" }}>
                <a href="/" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                    {/* <svg class="bi me-2" width="30" height="24"><use xlink:href="#bootstrap"></use></svg> */}
                    <img class="logo-main" src="assets/img/logo-light.webp" width="158" height="36" alt="Logo" />
                    {/* <span class="fs-5 fw-semibold">Collapsible</span> */}
                </a>
                <ul class="list-unstyled ps-0">
                    {/* <li class="mb-1">
                        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                            Home
                        </button>
                        <div class="collapse show" id="home-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" class="link-dark rounded">Overview</a></li>
                                <li><a href="#" class="link-dark rounded">Updates</a></li>
                                <li><a href="#" class="link-dark rounded">Reports</a></li>
                            </ul>
                        </div>
                    </li> */}
                    <li class="mb-1">
                        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                            Dashboard
                        </button>
                        <div class="collapse" id="dashboard-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><Link to="/admin/add-product" class="link-dark rounded">Add Product</Link></li>
                                <li><Link to="/admin/products" class="link-dark rounded">Manage All Product</Link></li>
                                <li><Link to="/admin/view" class="link-dark rounded">Overview</Link></li>
                                {/* <li><a href="#" class="link-dark rounded">Annually</a></li> */}
                            </ul>
                        </div>
                    </li>
                    <li class="mb-1">
                        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                            Orders
                        </button>
                        <div class="collapse" id="orders-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" class="link-dark rounded">New</a></li>
                                <li><a href="#" class="link-dark rounded">Processed</a></li>
                                <li><a href="#" class="link-dark rounded">Shipped</a></li>
                                <li><a href="#" class="link-dark rounded">Returned</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="border-top my-3"></li>
                    <li class="mb-1">
                        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                            Account
                        </button>
                        <div class="collapse" id="account-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" class="link-dark rounded">New...</a></li>
                                <li><a href="#" class="link-dark rounded">Profile</a></li>
                                <li><a href="#" class="link-dark rounded">Settings</a></li>
                                <li><a href="#" class="link-dark rounded">Sign out</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>

            <ProductAdd></ProductAdd>

        </div >
    );
};

export default Dashboard;