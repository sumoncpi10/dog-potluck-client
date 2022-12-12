import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import DashboardLeftSidebar from '../DashboardLeftSidebar';
const AddBlog = () => {
    const [blog, setBlog] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/blog/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBlog(data);
            })
    }, []);
    var months = ["Jan", "Febr", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // var d = new Date();
    // var monthName = months[d.getMonth()];
    var date = months[new Date().getMonth()] + ' ' + new Date().getDate() + ' ' + new Date().getFullYear();
    // console.log(date)
    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const category = e.target.category.value;

        const mh1 = e.target.mh1.value;
        const mh2 = e.target.mh2.value;

        const img1 = e.target.img1.value;
        const rating1 = e.target.rating1.value;
        const Tittle1 = e.target.Tittle1.value;
        const description11 = e.target.description11.value;
        const description21 = e.target.description21.value;
        const description31 = e.target.description31.value;
        const priceUrl1 = e.target.priceUrl1.value;

        const img2 = e.target.img2.value;
        const rating2 = e.target.rating2.value;
        const Tittle2 = e.target.Tittle2.value;
        const description12 = e.target.description12.value;
        const description22 = e.target.description22.value;
        const description32 = e.target.description32.value;
        const priceUrl2 = e.target.priceUrl2.value;

        const img3 = e.target.img3.value;
        const rating3 = e.target.rating3.value;
        const Tittle3 = e.target.Tittle3.value;
        const description13 = e.target.description13.value;
        const description23 = e.target.description23.value;
        const description33 = e.target.description33.value;
        const priceUrl3 = e.target.priceUrl3.value;

        const img4 = e.target.img4.value;
        const rating4 = e.target.rating4.value;
        const Tittle4 = e.target.Tittle4.value;
        const description14 = e.target.description14.value;
        const description24 = e.target.description24.value;
        const description34 = e.target.description34.value;
        const priceUrl4 = e.target.priceUrl4.value;

        const img5 = e.target.img5.value;
        const rating5 = e.target.rating5.value;
        const Tittle5 = e.target.Tittle5.value;
        const description15 = e.target.description15.value;
        const description25 = e.target.description25.value;
        const description35 = e.target.description35.value;
        const priceUrl5 = e.target.priceUrl5.value;

        const img6 = e.target.img6.value;
        const rating6 = e.target.rating6.value;
        const Tittle6 = e.target.Tittle6.value;
        const description16 = e.target.description16.value;
        const description26 = e.target.description26.value;
        const description36 = e.target.description36.value;
        const priceUrl6 = e.target.priceUrl6.value;

        const img7 = e.target.img7.value;
        const rating7 = e.target.rating7.value;
        const Tittle7 = e.target.Tittle7.value;
        const description17 = e.target.description17.value;
        const description27 = e.target.description27.value;
        const description37 = e.target.description37.value;
        const priceUrl7 = e.target.priceUrl7.value;

        const img8 = e.target.img8.value;
        const rating8 = e.target.rating8.value;
        const Tittle8 = e.target.Tittle8.value;
        const description18 = e.target.description18.value;
        const description28 = e.target.description28.value;
        const description38 = e.target.description38.value;
        const priceUrl8 = e.target.priceUrl8.value;

        const img9 = e.target.img9.value;
        const rating9 = e.target.rating9.value;
        const Tittle9 = e.target.Tittle9.value;
        const description19 = e.target.description19.value;
        const description29 = e.target.description29.value;
        const description39 = e.target.description39.value;
        const priceUrl9 = e.target.priceUrl9.value;

        const img10 = e.target.img10.value;
        const rating10 = e.target.rating10.value;
        const Tittle10 = e.target.Tittle10.value;
        const description110 = e.target.description110.value;
        const description210 = e.target.description210.value;
        const description310 = e.target.description310.value;
        const priceUrl10 = e.target.priceUrl10.value;

        const product = { category, mh1, mh2, img1, rating1, Tittle1, description11, description21, description31, priceUrl1, img2, rating2, Tittle2, description12, description22, description32, priceUrl2, img3, rating3, Tittle3, description13, description23, description33, priceUrl3, img4, rating4, Tittle4, description14, description24, description34, priceUrl4, img5, rating5, Tittle5, description15, description25, description35, priceUrl5, img6, rating6, Tittle6, description16, description26, description36, priceUrl6, img7, rating7, Tittle7, description17, description27, description37, priceUrl7, img8, rating8, Tittle8, description18, description28, description38, priceUrl8, img9, rating9, Tittle9, description19, description29, description39, priceUrl9, img10, rating10, Tittle10, description110, description210, description310, priceUrl10 };
        console.log(product);
        // send data to the server 
        fetch(`http://localhost:5000/blog/${id}`, {
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
                toast("Blog Update Successfully!");
            })
        // fetch('http://localhost:5000/blogAdd', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(product)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         // console.log('success', data);
        //         e.target.reset();
        //         toast("Blog Add Successfully!");
        //     })
    }

    const mh1Change = (e) => {
        const { mh1, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { mh1: newName, ...rest };
        setBlog(newProduct);
    }
    const mh2Change = (e) => {
        const { mh2, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { mh2: newName, ...rest };
        setBlog(newProduct);
    }
    const img1Change = (e) => {
        const { img1, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { img1: newName, ...rest };
        setBlog(newProduct);
    }
    const rating1Change = (e) => {
        const { rating1, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { rating1: newName, ...rest };
        setBlog(newProduct);
    }
    const Tittle1Change = (e) => {
        const { Tittle1, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { Tittle1: newName, ...rest };
        setBlog(newProduct);
    }
    const description11Change = (e) => {
        const { description11, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { description11: newName, ...rest };
        setBlog(newProduct);
    }
    const description21Change = (e) => {
        const { description21, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { description21: newName, ...rest };
        setBlog(newProduct);
    }
    const description31Change = (e) => {
        const { description31, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { description31: newName, ...rest };
        setBlog(newProduct);
    }
    const priceUrl1Change = (e) => {
        const { priceUrl1, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { priceUrl1: newName, ...rest };
        setBlog(newProduct);
    }
    const img2Change = (e) => {
        const { img2, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { img2: newName, ...rest };
        setBlog(newProduct);
    }
    const rating2Change = (e) => {
        const { rating2, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { rating2: newName, ...rest };
        setBlog(newProduct);
    }
    const Tittle2Change = (e) => {
        const { Tittle2, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { Tittle2: newName, ...rest };
        setBlog(newProduct);
    }
    const description12Change = (e) => {
        const { description12, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { description12: newName, ...rest };
        setBlog(newProduct);
    }
    const description22Change = (e) => {
        const { description22, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { description22: newName, ...rest };
        setBlog(newProduct);
    }
    const description32Change = (e) => {
        const { description32, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { description32: newName, ...rest };
        setBlog(newProduct);
    }
    const priceUrl2Change = (e) => {
        const { priceUrl2, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { priceUrl2: newName, ...rest };
        setBlog(newProduct);
    }
    const img3Change = (e) => {
        const { img3, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { img3: newName, ...rest };
        setBlog(newProduct);
    }
    const rating3Change = (e) => {
        const { rating3, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { rating3: newName, ...rest };
        setBlog(newProduct);
    }
    const Tittle3Change = (e) => {
        const { Tittle3, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { Tittle3: newName, ...rest };
        setBlog(newProduct);
    }
    const description13Change = (e) => {
        const { description13, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { description13: newName, ...rest };
        setBlog(newProduct);
    }
    const description23Change = (e) => {
        const { description23, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { description23: newName, ...rest };
        setBlog(newProduct);
    }
    const description33Change = (e) => {
        const { description33, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { description33: newName, ...rest };
        setBlog(newProduct);
    }
    const priceUrl3Change = (e) => {
        const { priceUrl3, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { priceUrl3: newName, ...rest };
        setBlog(newProduct);
    }
    const img4Change = (e) => {
        const { img4, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { img4: newName, ...rest };
        setBlog(newProduct);
    }
    const rating4Change = (e) => {
        const { rating4, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { rating4: newName, ...rest };
        setBlog(newProduct);
    }
    const Tittle4Change = (e) => {
        const { Tittle4, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { Tittle4: newName, ...rest };
        setBlog(newProduct);
    }
    const description14Change = (e) => {
        const { description14, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { description14: newName, ...rest };
        setBlog(newProduct);
    }
    const description24Change = (e) => {
        const { description24, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { description24: newName, ...rest };
        setBlog(newProduct);
    }
    const description34Change = (e) => {
        const { description34, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { description34: newName, ...rest };
        setBlog(newProduct);
    }
    const priceUrl4Change = (e) => {
        const { priceUrl4, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { priceUrl4: newName, ...rest };
        setBlog(newProduct);
    }
    const img5Change = (e) => {
        const { img5, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { img5: newName, ...rest };
        setBlog(newProduct);
    }
    const rating5Change = (e) => {
        const { rating5, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { rating5: newName, ...rest };
        setBlog(newProduct);
    }
    const Tittle5Change = (e) => {
        const { Tittle5, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { Tittle5: newName, ...rest };
        setBlog(newProduct);
    }
    const description15Change = (e) => {
        const { description15, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { description15: newName, ...rest };
        setBlog(newProduct);
    }
    const description25Change = (e) => {
        const { description25, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { description25: newName, ...rest };
        setBlog(newProduct);
    }
    const description35Change = (e) => {
        const { description35, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { description35: newName, ...rest };
        setBlog(newProduct);
    }
    const priceUrl5Change = (e) => {
        const { priceUrl5, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { priceUrl5: newName, ...rest };
        setBlog(newProduct);
    }
    const img6Change = (e) => {
        const { img6, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { img6: newName, ...rest };
        setBlog(newProduct);
    }
    const rating6Change = (e) => {
        const { rating6, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { rating6: newName, ...rest };
        setBlog(newProduct);
    }
    const Tittle6Change = (e) => {
        const { Tittle6, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { Tittle6: newName, ...rest };
        setBlog(newProduct);
    }
    const description16Change = (e) => {
        const { description16, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { description16: newName, ...rest };
        setBlog(newProduct);
    }
    const description26Change = (e) => {
        const { description26, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { description26: newName, ...rest };
        setBlog(newProduct);
    }
    const description36Change = (e) => {
        const { description36, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { description36: newName, ...rest };
        setBlog(newProduct);
    }
    const priceUrl6Change = (e) => {
        const { priceUrl6, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { priceUrl6: newName, ...rest };
        setBlog(newProduct);
    }
    const img7Change = (e) => {
        const { img7, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { img7: newName, ...rest };
        setBlog(newProduct);
    }
    const rating7Change = (e) => {
        const { rating7, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { rating7: newName, ...rest };
        setBlog(newProduct);
    }
    const Tittle7Change = (e) => {
        const { Tittle7, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { Tittle7: newName, ...rest };
        setBlog(newProduct);
    }
    const description17Change = (e) => {
        const { description17, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { description17: newName, ...rest };
        setBlog(newProduct);
    }
    const description27Change = (e) => {
        const { description27, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { description27: newName, ...rest };
        setBlog(newProduct);
    }
    const description37Change = (e) => {
        const { description37, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { description37: newName, ...rest };
        setBlog(newProduct);
    }
    const priceUrl7Change = (e) => {
        const { priceUrl7, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { priceUrl7: newName, ...rest };
        setBlog(newProduct);
    }
    const img8Change = (e) => {
        const { img8, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { img8: newName, ...rest };
        setBlog(newProduct);
    }
    const rating8Change = (e) => {
        const { rating8, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { rating8: newName, ...rest };
        setBlog(newProduct);
    }
    const Tittle8Change = (e) => {
        const { Tittle8, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { Tittle8: newName, ...rest };
        setBlog(newProduct);
    }
    const description18Change = (e) => {
        const { description18, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { description18: newName, ...rest };
        setBlog(newProduct);
    }
    const description28Change = (e) => {
        const { description28, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { description28: newName, ...rest };
        setBlog(newProduct);
    }
    const description38Change = (e) => {
        const { description38, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { description38: newName, ...rest };
        setBlog(newProduct);
    }
    const priceUrl8Change = (e) => {
        const { priceUrl8, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { priceUrl8: newName, ...rest };
        setBlog(newProduct);
    }
    const img9Change = (e) => {
        const { img9, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { img9: newName, ...rest };
        setBlog(newProduct);
    }
    const rating9Change = (e) => {
        const { rating9, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { rating9: newName, ...rest };
        setBlog(newProduct);
    }
    const Tittle9Change = (e) => {
        const { Tittle9, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { Tittle9: newName, ...rest };
        setBlog(newProduct);
    }
    const description19Change = (e) => {
        const { description19, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { description19: newName, ...rest };
        setBlog(newProduct);
    }
    const description29Change = (e) => {
        const { description29, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { description29: newName, ...rest };
        setBlog(newProduct);
    }
    const description39Change = (e) => {
        const { description39, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { description39: newName, ...rest };
        setBlog(newProduct);
    }
    const priceUrl9Change = (e) => {
        const { priceUrl9, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { priceUrl9: newName, ...rest };
        setBlog(newProduct);
    }
    const img10Change = (e) => {
        const { img10, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { img10: newName, ...rest };
        setBlog(newProduct);
    }
    const rating10Change = (e) => {
        const { rating10, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { rating10: newName, ...rest };
        setBlog(newProduct);
    }
    const Tittle10Change = (e) => {
        const { Tittle10, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { Tittle10: newName, ...rest };
        setBlog(newProduct);
    }
    const description110Change = (e) => {
        const { description110, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { description110: newName, ...rest };
        setBlog(newProduct);
    }
    const description210Change = (e) => {
        const { description210, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { description210: newName, ...rest };
        setBlog(newProduct);
    }
    const description310Change = (e) => {
        const { description310, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { description310: newName, ...rest };
        setBlog(newProduct);
    }
    const priceUrl10Change = (e) => {
        const { priceUrl10, ...rest } = blog;
        const newName = e.target.value;
        const newProduct = { priceUrl10: newName, ...rest };
        setBlog(newProduct);
    }
    return (
        <div className='d-flex'>
            <DashboardLeftSidebar></DashboardLeftSidebar>

            <div className='container p-5'>
                <h1 className='mb-4'>Add Your Blog</h1>
                <form onSubmit={handleUpdateProduct}>
                    <div className="d-flex flex-column justify-content-center mx-auto">
                        <div className="row mb-2">
                            <input type="text" onChange={mh1Change} value={blog?.mh1} name='mh1' className="form-control" placeholder="Main Heading 1" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={mh2Change} value={blog?.mh2} name='mh2' className="form-control" placeholder="Main Heading 2" />
                        </div>
                        <div className="row mb-2">
                            <select name='category' className="form-select form-control" aria-label="Default select example">
                                {blog?.category == 'cat' && <option value="cat">Cat Food</option>}
                                {blog?.category == 'fish' && <option value="fish">Fish Food</option>}
                                {blog?.category == 'bird' && <option value="bird">Bird Food</option>}
                                {blog?.category == 'dog' && <option value="dog">Dog Food</option>}
                                {blog?.category == 'rabbit' && <option value="rabbit">Rabbit Food</option>}
                            </select>
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={img1Change} value={blog?.img1} name='img1' className="form-control" placeholder="Img Url " />
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={rating1Change} value={blog?.rating1} name='rating1' className="form-control" placeholder="Rating" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={Tittle1Change} value={blog?.Tittle1} name='Tittle1' className="form-control" placeholder="Tittle one" />
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" onChange={description11Change} value={blog?.description11} name='description11' className="form-control" placeholder="Description1" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" onChange={description21Change} value={blog?.description21} name='description21' className="form-control" placeholder="Description2" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" onChange={description31Change} value={blog?.description31} name='description31' className="form-control" placeholder="Description3" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={priceUrl1Change} value={blog?.priceUrl1} name='priceUrl1' className="form-control" placeholder="Price Url" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={img2Change} value={blog?.img2} name='img2' className="form-control" placeholder="Img Url " />
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={rating2Change} value={blog?.rating2} name='rating2' className="form-control" placeholder="Rating" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={Tittle2Change} value={blog?.Tittle2} name='Tittle2' className="form-control" placeholder="Tittle one" />
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" onChange={description12Change} value={blog?.description12} name='description12' className="form-control" placeholder="Description1" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" onChange={description22Change} value={blog?.description22} name='description22' className="form-control" placeholder="Description2" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" onChange={description32Change} value={blog?.description32} name='description32' className="form-control" placeholder="Description3" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={priceUrl2Change} value={blog?.priceUrl2} name='priceUrl2' className="form-control" placeholder="Price Url" />
                        </div>

                        <div className="row mb-2">
                            <input type="text" onChange={img3Change} value={blog?.img3} name='img3' className="form-control" placeholder="Img Url " />
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={rating3Change} value={blog?.rating3} name='rating3' className="form-control" placeholder="Rating" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={Tittle3Change} value={blog?.Tittle3} name='Tittle3' className="form-control" placeholder="Tittle one" />
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" onChange={description13Change} value={blog?.description13} name='description13' className="form-control" placeholder="Description1" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" onChange={description23Change} value={blog?.description23} name='description23' className="form-control" placeholder="Description2" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" onChange={description33Change} value={blog?.description33} name='description33' className="form-control" placeholder="Description3" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={priceUrl3Change} value={blog?.priceUrl3} name='priceUrl3' className="form-control" placeholder="Price Url" />
                        </div>

                        <div className="row mb-2">
                            <input type="text" onChange={img4Change} value={blog?.img4} name='img4' className="form-control" placeholder="Img Url " />
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={rating4Change} value={blog?.rating4} name='rating4' className="form-control" placeholder="Rating" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={Tittle4Change} value={blog?.Tittle4} name='Tittle4' className="form-control" placeholder="Tittle one" />
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" onChange={description14Change} value={blog?.description14} name='description14' className="form-control" placeholder="Description1" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" onChange={description24Change} value={blog?.description24} name='description24' className="form-control" placeholder="Description2" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" onChange={description34Change} value={blog?.description34} name='description34' className="form-control" placeholder="Description3" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={priceUrl4Change} value={blog?.priceUrl4} name='priceUrl4' className="form-control" placeholder="Price Url" />
                        </div>

                        <div className="row mb-2">
                            <input type="text" onChange={img5Change} value={blog?.img5} name='img5' className="form-control" placeholder="Img Url " />
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={rating5Change} value={blog?.rating5} name='rating5' className="form-control" placeholder="Rating" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={Tittle5Change} value={blog?.Tittle5} name='Tittle5' className="form-control" placeholder="Tittle one" />
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" onChange={description15Change} value={blog?.description15} name='description15' className="form-control" placeholder="Description1" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" onChange={description25Change} value={blog?.description25} name='description25' className="form-control" placeholder="Description2" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" onChange={description35Change} value={blog?.description35} name='description35' className="form-control" placeholder="Description3" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={priceUrl5Change} value={blog?.priceUrl5} name='priceUrl5' className="form-control" placeholder="Price Url" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={img6Change} value={blog?.img6} name='img6' className="form-control" placeholder="Img Url " />
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={rating6Change} value={blog?.rating6} name='rating6' className="form-control" placeholder="Rating" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={Tittle6Change} value={blog?.Tittle6} name='Tittle6' className="form-control" placeholder="Tittle one" />
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" onChange={description16Change} value={blog?.description16} name='description16' className="form-control" placeholder="Description1" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" onChange={description26Change} value={blog?.description26} name='description26' className="form-control" placeholder="Description2" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" onChange={description36Change} value={blog?.description36} name='description36' className="form-control" placeholder="Description3" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={priceUrl6Change} value={blog?.priceUrl6} name='priceUrl6' className="form-control" placeholder="Price Url" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={img7Change} value={blog?.img7} name='img7' className="form-control" placeholder="Img Url " />
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={rating7Change} value={blog?.rating7} name='rating7' className="form-control" placeholder="Rating" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={Tittle7Change} value={blog?.Tittle7} name='Tittle7' className="form-control" placeholder="Tittle one" />
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" onChange={description17Change} value={blog?.description17} name='description17' className="form-control" placeholder="Description1" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" onChange={description27Change} value={blog?.description27} name='description27' className="form-control" placeholder="Description2" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" onChange={description37Change} value={blog?.description37} name='description37' className="form-control" placeholder="Description3" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={priceUrl7Change} value={blog?.priceUrl7} name='priceUrl7' className="form-control" placeholder="Price Url" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={img8Change} value={blog?.img8} name='img8' className="form-control" placeholder="Img Url " />
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={rating8Change} value={blog?.rating8} name='rating8' className="form-control" placeholder="Rating" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={Tittle8Change} value={blog?.Tittle8} name='Tittle8' className="form-control" placeholder="Tittle one" />
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" onChange={description18Change} value={blog?.description18} name='description18' className="form-control" placeholder="Description1" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" onChange={description28Change} value={blog?.description28} name='description28' className="form-control" placeholder="Description2" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" onChange={description38Change} value={blog?.description38} name='description38' className="form-control" placeholder="Description3" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={priceUrl8Change} value={blog?.priceUrl8} name='priceUrl8' className="form-control" placeholder="Price Url" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={img9Change} value={blog?.img9} name='img9' className="form-control" placeholder="Img Url " />
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={rating9Change} value={blog?.rating9} name='rating9' className="form-control" placeholder="Rating" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={Tittle9Change} value={blog?.Tittle9} name='Tittle9' className="form-control" placeholder="Tittle one" />
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" onChange={description19Change} value={blog?.description19} name='description19' className="form-control" placeholder="Description1" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" onChange={description29Change} value={blog?.description29} name='description29' className="form-control" placeholder="Description2" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" onChange={description39Change} value={blog?.description39} name='description39' className="form-control" placeholder="Description3" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={priceUrl9Change} value={blog?.priceUrl9} name='priceUrl9' className="form-control" placeholder="Price Url" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={img10Change} value={blog?.img10} name='img10' className="form-control" placeholder="Img Url " />
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={rating10Change} value={blog?.rating10} name='rating10' className="form-control" placeholder="Rating" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={Tittle10Change} value={blog?.Tittle10} name='Tittle10' className="form-control" placeholder="Tittle one" />
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" onChange={description110Change} value={blog?.description110} name='description110' className="form-control" placeholder="Description1" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" onChange={description210Change} value={blog?.description210} name='description210' className="form-control" placeholder="Description2" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" onChange={description310Change} value={blog?.description310} name='description310' className="form-control" placeholder="Description3" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <input type="text" onChange={priceUrl10Change} value={blog?.priceUrl10} name='priceUrl10' className="form-control" placeholder="Price Url" />
                        </div>


                    </div>
                    <button className="btn btn-primary m-3" type="submit">Update Blog</button>
                </form>
            </div>

        </div >

    );
};

export default AddBlog;