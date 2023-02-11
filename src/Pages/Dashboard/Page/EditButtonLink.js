import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import DashboardLeftSidebar from '../DashboardLeftSidebar';
const EditButtonLink = () => {
    const params = useParams();
    let [product, setProduct] = useState([]);
    // let [quantity, setQuantity] = useState(1);
    useEffect(() => {
        fetch(`https://dog-potluck.onrender.com/ButtonLink/sumoncpi10@gmail.com`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data);
            })
    }, []);

    const handleUpdateButtonLink = (e) => {
        e.preventDefault();
        // const id = product?._id;
        const _id = e.target._id.value;
        const SliderButtonLink = e.target.SliderButtonLink.value;
        const SliderButtonLink2 = e.target.SliderButtonLink2.value;
        const DogFoodButtonLink = e.target.DogFoodButtonLink.value;
        const CatFoodButtonLink = e.target.CatFoodButtonLink.value;
        const BestDealOfferButtonLink = e.target.BestDealOfferButtonLink.value;


        // console.log(name, email, password);
        const product = { SliderButtonLink, SliderButtonLink2, DogFoodButtonLink, CatFoodButtonLink, BestDealOfferButtonLink };
        console.log(product);
        fetch(`https://dog-potluck.onrender.com/updateButtonLink/${_id}`, {
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
                toast("Button Link Update Successfully!");
            })
    }

    const SliderButtonLinkChange = (e) => {
        const { SliderButtonLink, ...rest } = product;
        const newName = e.target.value;
        const newProduct = { SliderButtonLink: newName, ...rest };
        setProduct(newProduct);
    }
    const SliderButtonLink2Change = (e) => {
        const { SliderButtonLink2, ...rest } = product;
        const newName = e.target.value;
        const newProduct = { SliderButtonLink2: newName, ...rest };
        setProduct(newProduct);
    }
    const DogFoodButtonLinkChange = (e) => {
        const { DogFoodButtonLink, ...rest } = product;
        const newName = e.target.value;
        const newProduct = { DogFoodButtonLink: newName, ...rest };
        setProduct(newProduct);
    }
    const CatFoodButtonLinkChange = (e) => {
        const { CatFoodButtonLink, ...rest } = product;
        const newName = e.target.value;
        const newProduct = { CatFoodButtonLink: newName, ...rest };
        setProduct(newProduct);
    }
    const BestDealOfferButtonLinkChange = (e) => {
        const { BestDealOfferButtonLink, ...rest } = product;
        const newName = e.target.value;
        const newProduct = { BestDealOfferButtonLink: newName, ...rest };
        setProduct(newProduct);
    }
    return (
        <div className='d-flex'>
            <DashboardLeftSidebar></DashboardLeftSidebar>

            <div className='container p-5'>
                <h1 className='m-3 d-flex justify-content-center'>Update Your Button Link</h1>

                <form onSubmit={handleUpdateButtonLink}>

                    <div className="d-flex flex-column justify-content-center mx-auto">
                        <div className="row mb-2">
                            <input value={product?._id} type="text" name='_id' className="form-control" placeholder="Id" required disabled />
                        </div>
                        <div className="row mb-2">
                            <input onChange={SliderButtonLinkChange} value={product?.SliderButtonLink} type="text" name='SliderButtonLink' className="form-control" placeholder="Slider Button Link" required />
                        </div>
                        <div className="row mb-2">
                            <input onChange={SliderButtonLink2Change} value={product?.SliderButtonLink2} type="text" name='SliderButtonLink2' className="form-control" placeholder="Slider Button Link 2" required />
                        </div>
                        <div className="row mb-2">
                            <input onChange={DogFoodButtonLinkChange} value={product.DogFoodButtonLink} type="text" name='DogFoodButtonLink' className="form-control" placeholder="50% Off Dog Food Button Link" required />
                        </div>
                        <div className="row mb-2">
                            <input onChange={CatFoodButtonLinkChange} value={product.CatFoodButtonLink} type="text" name='CatFoodButtonLink' className="form-control" placeholder="50% Off Cat Food Button Link" required />
                        </div>
                        <div className="row mb-2">
                            <input onChange={BestDealOfferButtonLinkChange} value={product.BestDealOfferButtonLink} type="text" name='BestDealOfferButtonLink' className="form-control" placeholder="Best Deal Offer Button Link" required />
                        </div>
                    </div>
                    {/* <button className="btn btn-primary m-3" type="submit">Add Product</button> */}


                    <button className="btn btn-primary m-3" type="submit">Update Button Link</button>
                </form>
            </div>
        </div>
    );
};

export default EditButtonLink;