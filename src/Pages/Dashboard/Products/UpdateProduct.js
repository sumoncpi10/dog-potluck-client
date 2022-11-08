import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import DashboardLeftSidebar from '../DashboardLeftSidebar';

const UpdateProduct = () => {
    const params = useParams();
    let [product, setProduct] = useState([]);
    // let [quantity, setQuantity] = useState(1);
    useEffect(() => {
        fetch(`https://obscure-forest-36360.herokuapp.com/product/${params.id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setProduct(data);
            })
    }, []);

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        // const id = product._id;
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
        //console.log(product);
        fetch(`https://obscure-forest-36360.herokuapp.com/product/${params.id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('success', data);
                e.target.reset();
                toast("Product Update Successfully!");
            })
    }
    const handleQuantity = (e) => {
        e.preventDefault();

        const quantity = e.target.qty.value;

        // console.log(name, email, password);
        const product = { quantity };
        // send data to the server 
        fetch(`https://thawing-earth-85807.herokuapp.com/product/${params.id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('success', data);
                e.target.reset();
                toast("Quantity Update Successfully!");
            })
    }
    const handleDelivered = (e) => {
        e.preventDefault();
        const { quantity, ...rest } = product;
        if (quantity > 0) {
            const newQuantity = parseInt(quantity) - 1;
            const newProduct = { quantity: newQuantity, ...rest };
            // console.log(newProduct)
            setProduct(newProduct);


            // console.log(name, email, password);
            const productUpdate = { quantity: newQuantity };
            // send data to the server 
            fetch(`https://thawing-earth-85807.herokuapp.com/product/${params.id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(productUpdate)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log('success', data);
                    // e.target.reset();
                    toast("Quantity Update Successfully!");
                })
        }
        else {
            toast("Update Stock Please!");
        }

    }

    const nameChange = (e) => {
        const { name, ...rest } = product;
        const newName = e.target.value;
        const newProduct = { name: newName, ...rest };
        setProduct(newProduct);
    }
    const categoryChange = (e) => {
        const { category, ...rest } = product;
        const newBrand = e.target.value;
        const newProduct = { category: newBrand, ...rest };
        setProduct(newProduct);
    }
    const collectionTypeChange = (e) => {
        const { collection_type, ...rest } = product;
        const newBrand = e.target.value;
        const newProduct = { collection_type: newBrand, ...rest };
        setProduct(newProduct);
    }
    const dealsChange = (e) => {
        const { dealsOfDay, ...rest } = product;
        const newBrand = e.target.value;
        const newProduct = { dealsOfDay: newBrand, ...rest };
        setProduct(newProduct);
    }
    const brandChange = (e) => {
        const { brand, ...rest } = product;
        const newBrand = e.target.value;
        const newProduct = { brand: newBrand, ...rest };
        setProduct(newProduct);
    }

    const descriptionChange1 = (e) => {
        const { description1, ...rest } = product;
        const newBrand = e.target.value;
        const newProduct = { description1: newBrand, ...rest };
        setProduct(newProduct);
    }
    const descriptionChange2 = (e) => {
        const { description2, ...rest } = product;
        const newBrand = e.target.value;
        const newProduct = { description2: newBrand, ...rest };
        setProduct(newProduct);
    }


    const sizeChange = (e) => {
        const { size, ...rest } = product;
        const newBrand = e.target.value;
        const newProduct = { size: newBrand, ...rest };
        setProduct(newProduct);
    }
    const ratingChange = (e) => {
        const { rating, ...rest } = product;
        const newBrand = e.target.value;
        const newProduct = { rating: newBrand, ...rest };
        setProduct(newProduct);
    }
    const informationChange = (e) => {
        const { information, ...rest } = product;
        const newBrand = e.target.value;
        const newProduct = { information: newBrand, ...rest };
        setProduct(newProduct);
    }
    const reviewChange = (e) => {
        const { review, ...rest } = product;
        const newBrand = e.target.value;
        const newProduct = { review: newBrand, ...rest };
        setProduct(newProduct);
    }
    const tagChange = (e) => {
        const { tag, ...rest } = product;
        const newBrand = e.target.value;
        const newProduct = { tag: newBrand, ...rest };
        setProduct(newProduct);
    }
    const pcodeChange = (e) => {
        const { pcode, ...rest } = product;
        const newBrand = e.target.value;
        const newProduct = { pcode: newBrand, ...rest };
        setProduct(newProduct);
    }
    const priceChange = (e) => {
        const { priceUrl, ...rest } = product;
        const newBrand = e.target.value;
        const newProduct = { priceUrl: newBrand, ...rest };
        setProduct(newProduct);
    }
    const imgChange = (e) => {
        const { img, ...rest } = product;
        const newBrand = e.target.value;
        const newProduct = { img: newBrand, ...rest };
        setProduct(newProduct);
    }
    const imgChange1 = (e) => {
        const { imgUrl1, ...rest } = product;
        const newBrand = e.target.value;
        const newProduct = { imgUrl1: newBrand, ...rest };
        setProduct(newProduct);
    }
    const imgChange2 = (e) => {
        const { imgUrl2, ...rest } = product;
        const newBrand = e.target.value;
        const newProduct = { imgUrl2: newBrand, ...rest };
        setProduct(newProduct);
    }
    const imgChange3 = (e) => {
        const { imgUrl3, ...rest } = product;
        const newBrand = e.target.value;
        const newProduct = { imgUrl3: newBrand, ...rest };
        setProduct(newProduct);
    }
    return (
        <div className='d-flex'>
            <DashboardLeftSidebar></DashboardLeftSidebar>

            <div className='container'>
                <h1 className='m-3 d-flex justify-content-center'>Update Your Product: {product.name}</h1>
                <form onSubmit={handleQuantity}>
                    <div className='d-flex justify-content-center'>
                        <img src={product.img} className='m-5' alt="" srcset="" />

                    </div>
                </form>
                <form onSubmit={handleUpdateProduct}>



                    <div className="d-flex flex-column justify-content-center mx-auto">
                        <div className="row mb-2">
                            <input onChange={nameChange} value={product.name} type="text" name='name' className="form-control" placeholder="Product name" required />
                        </div>

                        <div className="row mb-2">
                            <select name='category' onChange={categoryChange} value={product?.category} className="form-select form-control" aria-label="Default select example">
                                <option selected>Category</option>
                                <option value="cat">Cat Food</option>
                                <option value="fish">Fish Food</option>
                                <option value="bird">Bird Food</option>
                                <option value="dog">Dog Food</option>
                                <option value="rabbit">Rabbit Food</option>
                            </select>
                        </div>
                        <div className="row mb-2">
                            <select name='collection_type' onChange={collectionTypeChange} value={product?.collection_type} className="form-select form-control" aria-label="Default select example">
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
                            <select name='dealsOfDay' onChange={dealsChange} value={product?.dealsOfDay} className="form-select form-control" aria-label="Default select example">

                                <option value="none" selected>None</option>
                                <option value="deals" >Deals Of The Day</option>
                            </select>
                        </div>
                        <div className="row mb-2">
                            {/* <input type="textarea" name='description' className="form-control" placeholder="Description" /> */}
                            <textarea type="text" onChange={descriptionChange1} value={product.description1} name='description1' className="form-control" placeholder="Description1" ></textarea>
                        </div>
                        <div className="row mb-2">
                            {/* <input type="textarea" name='description' className="form-control" placeholder="Description" /> */}
                            <textarea type="text" onChange={descriptionChange2} value={product.description2} name='description2' className="form-control" placeholder="Description2" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <input onChange={brandChange} value={product.brand} type="text" name='brand' className="form-control" placeholder="Brand name" />
                        </div>
                        <div className="row mb-2">
                            <input onChange={sizeChange} value={product?.size} type="text" name='size' className="form-control" placeholder="Size" />
                        </div>
                        <div className="row mb-2">
                            <input onChange={ratingChange} value={product?.rating} type="text" name='rating' className="form-control" placeholder="Rating" />
                        </div>
                        <div className="row mb-2">
                            <input onChange={informationChange} value={product?.information} type="text" name='information' className="form-control" placeholder="Information" />
                        </div>
                        <div className="row mb-2">
                            <input onChange={reviewChange} value={product?.review} type="text" name='review' className="form-control" placeholder="Review" />
                        </div>
                        <div className="row mb-2">
                            <input onChange={tagChange} value={product?.tag} type="text" name='tag' className="form-control" placeholder="Tag" />
                        </div>
                        <div className="row mb-2">
                            <input onChange={pcodeChange} value={product?.pcode} type="text" name='pcode' className="form-control" placeholder="Product Code" />
                        </div>
                        <div className="row mb-2">
                            <input onChange={priceChange} value={product?.priceUrl} type="text" name='priceUrl' className="form-control" placeholder="Price Url" required />
                        </div>
                        <div className="row mb-2">
                            <input onChange={imgChange} value={product?.img} type="text" name='img' className="form-control" placeholder="Main Img Url" required />
                        </div>
                        <div className="row mb-2">
                            <input onChange={imgChange1} value={product?.imgUrl1} type="text" name='imgUrl1' className="form-control" placeholder="Img Url 1" />
                        </div>
                        <div className="row mb-2">
                            <input onChange={imgChange2} value={product?.imgUrl2} type="text" name='imgUrl2' className="form-control" placeholder="Img Url 2" />
                        </div>
                        <div className="row mb-2">
                            <input onChange={imgChange3} value={product?.imgUrl3} type="text" name='imgUrl3' className="form-control" placeholder="Img Url 3" />
                        </div>
                    </div>
                    {/* <button className="btn btn-primary m-3" type="submit">Add Product</button> */}


                    <button className="btn btn-primary m-3" type="submit">Update Product</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;