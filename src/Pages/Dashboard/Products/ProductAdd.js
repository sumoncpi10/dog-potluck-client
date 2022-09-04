import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Dashboard from '../Dashboard';
import DashboardLeftSidebar from '../DashboardLeftSidebar';

const ProductAdd = () => {
    const handleAddProduct = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const category = e.target.category.value;
        const collection_type = e.target.collection_type.value;
        const dealsOfDay = e.target.dealsOfDay.value;
        const description1 = e.target.description1.value;
        const description2 = e.target.description2.value;
        const brand = e.target.brand.value;
        const size = e.target.size.value;
        const rating = e.target.rating.value;
        const information = e.target.information.value;
        const review = e.target.review.value;
        const tag = e.target.tag.value;
        const pcode = e.target.pcode.value;
        const priceUrl = e.target.priceUrl.value;
        const img = e.target.img.value;
        const imgUrl1 = e.target.imgUrl1.value;
        const imgUrl2 = e.target.imgUrl2.value;
        const imgUrl3 = e.target.imgUrl3.value;
        // console.log(name, email, password);
        const product = { name, category, collection_type, dealsOfDay, description1, description2, brand, size, rating, information, review, tag, pcode, img, imgUrl1, imgUrl2, imgUrl3, priceUrl };
        console.log(product);
        // send data to the server 

        fetch('http://localhost:5000/productAdd', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                e.target.reset();
                toast("Product Add Successfully!");
            })
    }
    return (



        <div className='d-flex'>
            <DashboardLeftSidebar></DashboardLeftSidebar>

            <div className='container'>
                <h1 className='mb-4'>Add Your Product</h1>
                <form onSubmit={handleAddProduct}>
                    <div class="d-flex flex-column justify-content-center mx-auto">
                        <div class="row mb-2">
                            <input type="text" name='name' class="form-control" placeholder="Product name" required />
                        </div>

                        <div class="row mb-2">
                            <select name='category' class="form-select form-control" aria-label="Default select example">
                                <option selected>Category</option>
                                <option value="cat">Cat Food</option>
                                <option value="fish">Fish Food</option>
                                <option value="bird">Bird Food</option>
                                <option value="dog">Dog Food</option>
                                <option value="rabbit">Rabbit Food</option>
                            </select>
                        </div>
                        <div class="row mb-2">
                            <select name='collection_type' class="form-select form-control" aria-label="Default select example">
                                <option selected>Collection Type</option>
                                <option value="avg">AVERAGE</option>
                                <option value="all">All</option>
                                <option value="new">NEW</option>
                                <option value="bestSeller">BEST SELLERS</option>
                                <option value="featured">FEATURED</option>
                                <option value="onSall">ON SALL</option>
                            </select>
                        </div>
                        <div class="row mb-2">
                            <select name='dealsOfDay' class="form-select form-control" aria-label="Default select example">
                                <option value="none" selected>None</option>
                                <option value="deals" >Deals Of The Day</option>
                            </select>
                        </div>

                        <div class="row mb-2">
                            {/* <input type="textarea" name='description' class="form-control" placeholder="Description" /> */}
                            <textarea type="text" name='description1' class="form-control" placeholder="Description1" required></textarea>
                        </div>
                        <div class="row mb-2">
                            {/* <input type="textarea" name='description' class="form-control" placeholder="Description" /> */}
                            <textarea type="text" name='description2' class="form-control" placeholder="Description2" required></textarea>
                        </div>
                        <div class="row mb-2">
                            <input type="text" name='brand' class="form-control" placeholder="Brand name" required />
                        </div>
                        <div class="row mb-2">
                            <input type="text" name='size' class="form-control" placeholder="Size" required />
                        </div>
                        <div class="row mb-2">
                            <input type="text" name='rating' class="form-control" placeholder="Rating" required />
                        </div>
                        <div class="row mb-2">
                            <input type="text" name='information' class="form-control" placeholder="Information" required />
                        </div>
                        <div class="row mb-2">
                            <input type="text" name='review' class="form-control" placeholder="Review" required />
                        </div>
                        <div class="row mb-2">
                            <input type="text" name='tag' class="form-control" placeholder="Tag" required />
                        </div>
                        <div class="row mb-2">
                            <input type="text" name='pcode' class="form-control" placeholder="Product Code" required />
                        </div>
                        <div class="row mb-2">
                            <input type="text" name='priceUrl' class="form-control" placeholder="Price Url" required />
                        </div>
                        <div class="row mb-2">
                            <input type="text" name='imgUrl1' class="form-control" placeholder="Img Url 1" required />
                        </div>
                        <div class="row mb-2">
                            <input type="text" name='img' class="form-control" placeholder="Img Url 1" required />
                        </div>
                        <div class="row mb-2">
                            <input type="text" name='imgUrl2' class="form-control" placeholder="Img Url 2" required />
                        </div>
                        <div class="row mb-2">
                            <input type="text" name='imgUrl3' class="form-control" placeholder="Img Url 3" required />
                        </div>
                    </div>
                    <button class="btn btn-primary m-3" type="submit">Add Product</button>
                </form>
            </div>

        </div >





















    );
};

export default ProductAdd;