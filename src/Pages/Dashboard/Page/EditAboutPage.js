import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import DashboardLeftSidebar from '../DashboardLeftSidebar';
const EditAboutPage = () => {
    const params = useParams();
    let [product, setProduct] = useState([]);
    // let [quantity, setQuantity] = useState(1);
    useEffect(() => {
        fetch(`https://dog-potluck.onrender.com/about/${params.id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProduct(data);
            })
    }, []);

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        // const id = product._id;
        const tittle = e.target.tittle.value;
        const boldTittle = e.target.boldTittle.value;

        const description1 = e.target.description1.value;
        const description2 = e.target.description2.value;

        const btnUrl = e.target.btnUrl.value;
        const img = e.target.img.value;

        // console.log(name, email, password);
        const product = { tittle, boldTittle, description1, description2, btnUrl, img };
        //console.log(product);
        fetch(`https://dog-potluck.onrender.com/about/${params.id}`, {
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
                toast("About Page Update Successfully!");
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

    const tittleChange = (e) => {
        const { tittle, ...rest } = product;
        const newName = e.target.value;
        const newProduct = { tittle: newName, ...rest };
        setProduct(newProduct);
    }
    const boldTittleChange = (e) => {
        const { boldTittle, ...rest } = product;
        const newName = e.target.value;
        const newProduct = { boldTittle: newName, ...rest };
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
    const btnChange = (e) => {
        const { btnUrl, ...rest } = product;
        const newBrand = e.target.value;
        const newProduct = { btnUrl: newBrand, ...rest };
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

            <div className='container p-5'>
                <h1 className='m-3 d-flex justify-content-center'>Update Your About Page</h1>
                <form onSubmit={handleQuantity}>
                    <div className='d-flex justify-content-center'>
                        <img src={product.img} className='m-5' alt="" srcset="" />

                    </div>
                </form>
                <form onSubmit={handleUpdateProduct}>



                    <div className="d-flex flex-column justify-content-center mx-auto">
                        <div className="row mb-2">
                            <input onChange={tittleChange} value={product?.tittle} type="text" name='tittle' className="form-control" placeholder="Tittle" required />
                        </div>
                        <div className="row mb-2">
                            <input onChange={boldTittleChange} value={product.boldTittle} type="text" name='boldTittle' className="form-control" placeholder="Bold Tittle" required />
                        </div>


                        <div className="row mb-2">

                            <textarea type="text" onChange={descriptionChange1} value={product.description1} name='description1' className="form-control" placeholder="Description1" ></textarea>
                        </div>
                        <div className="row mb-2">

                            <textarea type="text" onChange={descriptionChange2} value={product.description2} name='description2' className="form-control" placeholder="Description2" ></textarea>
                        </div>

                        <div className="row mb-2">
                            <input onChange={btnChange} value={product?.btnUrl} type="text" name='btnUrl' className="form-control" placeholder="Button Url" required />
                        </div>
                        <div className="row mb-2">
                            <input onChange={imgChange} value={product?.img} type="text" name='img' className="form-control" placeholder="Img Url" required />
                        </div>

                    </div>
                    {/* <button className="btn btn-primary m-3" type="submit">Add Product</button> */}


                    <button className="btn btn-primary m-3" type="submit">Update About Page</button>
                </form>
            </div>
        </div>
    );
};

export default EditAboutPage;