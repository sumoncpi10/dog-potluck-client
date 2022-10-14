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
        const flavour = e.target.flavour.value;
        const itemForm = e.target.itemForm.value;
        const breedRecommendation = e.target.breedRecommendation.value;
        const specificUser = e.target.specificUser.value;
        const ageRange = e.target.ageRange.value;
        const itemWeight = e.target.itemWeight.value;
        const unitCount = e.target.unitCount.value;
        const numberOfItems = e.target.numberOfItems.value;
        const modelName = e.target.modelName.value;
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
        const product = { name, category, collection_type, dealsOfDay, description1, description2, brand, flavour, itemForm, breedRecommendation, specificUser, ageRange, itemWeight, unitCount, numberOfItems, modelName, size, rating, information, review, tag, pcode, img, imgUrl1, imgUrl2, imgUrl3, priceUrl };
        //console.log(product);
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
                // console.log('success', data);
                e.target.reset();
                toast("Product Add Successfully!");
            })
    }
    return (



        <div className='d-flex'>
            <DashboardLeftSidebar></DashboardLeftSidebar>

            <div className='container p-5'>
                <h1 className='mb-4'>Add Your Product</h1>
                <form onSubmit={handleAddProduct}>
                    <div className="d-flex flex-column justify-content-center mx-auto">
                        <div className="row mb-2">
                            <input type="text" name='name' className="form-control" placeholder="Product name" required />
                        </div>

                        <div className="row mb-2">
                            <select name='category' className="form-select form-control" aria-label="Default select example">
                                <option selected>Category</option>
                                <option value="cat">Cat Food</option>
                                <option value="fish">Fish Food</option>
                                <option value="bird">Bird Food</option>
                                <option value="dog">Dog Food</option>
                                <option value="rabbit">Rabbit Food</option>
                            </select>
                        </div>
                        <div className="row mb-2">
                            <select name='collection_type' className="form-select form-control" aria-label="Default select example">
                                <option selected>Collection Type</option>
                                <option value="avg">AVERAGE</option>
                                <option value="all">All</option>
                                <option value="new">NEW</option>
                                <option value="bestSeller">BEST SELLERS</option>
                                <option value="featured">FEATURED</option>
                                <option value="onSall">ON SALL</option>
                            </select>
                        </div>
                        <div className="row mb-2">
                            <select name='dealsOfDay' className="form-select form-control" aria-label="Default select example">
                                <option value="none" selected>None</option>
                                <option value="deals" >Deals Of The Day</option>
                            </select>
                        </div>

                        <div className="row mb-2">
                            {/* <input type="textarea" name='description' className="form-control" placeholder="Description" /> */}
                            <textarea type="text" name='description1' className="form-control" placeholder="Description1" ></textarea>
                        </div>
                        <div className="row mb-2">
                            {/* <input type="textarea" name='description' className="form-control" placeholder="Description" /> */}
                            <textarea type="text" name='description2' className="form-control" placeholder="Description2" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='brand' className="form-control" placeholder="Brand name" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='flavour' className="form-control" placeholder="Flavour" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='itemForm' className="form-control" placeholder="Item Form" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='breedRecommendation' className="form-control" placeholder="Breed Recommendation" />
                        </div>

                        <div className="row mb-2">
                            <input type="text" name='specificUser' className="form-control" placeholder="Specific uses for product" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='packageInfo' className="form-control" placeholder="Package Info" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='ageRange' className="form-control" placeholder="Age Range" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='itemWeight' className="form-control" placeholder="Item Weight" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='unitCount' className="form-control" placeholder="Unit Count" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='numberOfItems' className="form-control" placeholder="Number Of Items" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='modelName' className="form-control" placeholder="Model Name" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='size' className="form-control" placeholder="Size" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='rating' className="form-control" placeholder="Rating" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='information' className="form-control" placeholder="Information" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='review' className="form-control" placeholder="Review" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='tag' className="form-control" placeholder="Tag" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='pcode' className="form-control" placeholder="Product Code" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='priceUrl' className="form-control" placeholder="Price Url" required />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='img' className="form-control" placeholder="Img Url Main" required />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='imgUrl1' className="form-control" placeholder="Img Url 1" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='imgUrl2' className="form-control" placeholder="Img Url 2" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='imgUrl3' className="form-control" placeholder="Img Url 3" />
                        </div>
                    </div>
                    <button className="btn btn-primary m-3" type="submit">Add Product</button>
                </form>
            </div>








































        </div >

    );
};

export default ProductAdd;