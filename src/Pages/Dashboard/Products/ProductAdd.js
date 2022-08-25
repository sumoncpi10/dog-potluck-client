import React from 'react';
import { toast } from 'react-toastify';

const ProductAdd = () => {
    const handleAddProduct = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const category = e.target.category.value;
        const description1 = e.target.description1.value;
        const description2 = e.target.description2.value;
        const brand = e.target.brand.value;
        const size = e.target.size.value;
        const rating = e.target.rating.value;
        const information = e.target.information.value;
        const review = e.target.review.value;
        const tag = e.target.tag.value;
        const pcode = e.target.pcode.value;
        const img = e.target.img.value;
        // console.log(name, email, password);
        const product = { name, category, description1, description2, brand, size, rating, information, review, tag, pcode, img };
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
                        <input type="text" name='img' class="form-control" placeholder="Img Url" required />
                    </div>
                </div>
                <button class="btn btn-primary m-3" type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default ProductAdd;