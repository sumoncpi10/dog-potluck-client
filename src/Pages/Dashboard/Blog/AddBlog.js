import React from 'react';
import { toast } from 'react-toastify';
import DashboardLeftSidebar from '../DashboardLeftSidebar';
const AddBlog = () => {
    var months = ["Jan", "Febr", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // var d = new Date();
    // var monthName = months[d.getMonth()];
    var date = months[new Date().getMonth()] + ' ' + new Date().getDate() + ' ' + new Date().getFullYear();
    // console.log(date)
    const handleAddBlog = (e) => {
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

        fetch('http://localhost:5000/blogAdd', {
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
                toast("Blog Add Successfully!");
            })
    }
    return (



        <div className='d-flex'>
            <DashboardLeftSidebar></DashboardLeftSidebar>

            <div className='container p-5'>
                <h1 className='mb-4'>Add Your Blog</h1>
                <form onSubmit={handleAddBlog}>
                    <div className="d-flex flex-column justify-content-center mx-auto">
                        <div className="row mb-2">
                            <input type="text" name='mh1' className="form-control" placeholder="Main Heading 1" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='mh2' className="form-control" placeholder="Main Heading 2" />
                        </div>
                        <div className="row mb-2">
                            <select name='category' className="form-select form-control" aria-label="Default select example">
                                <option defaultValue>Category</option>
                                <option value="cat">Cat Food</option>
                                <option value="fish">Fish Food</option>
                                <option value="bird">Bird Food</option>
                                <option value="dog">Dog Food</option>
                                <option value="rabbit">Rabbit Food</option>
                            </select>
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='img1' className="form-control" placeholder="Img Url " />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='rating1' className="form-control" placeholder="Rating" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='Tittle1' className="form-control" placeholder="Tittle one" />
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" name='description11' className="form-control" placeholder="Description1" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" name='description21' className="form-control" placeholder="Description2" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" name='description31' className="form-control" placeholder="Description3" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='priceUrl1' className="form-control" placeholder="Price Url" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='img2' className="form-control" placeholder="Img Url " />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='rating2' className="form-control" placeholder="Rating" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='Tittle2' className="form-control" placeholder="Tittle one" />
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" name='description12' className="form-control" placeholder="Description1" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" name='description22' className="form-control" placeholder="Description2" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" name='description32' className="form-control" placeholder="Description3" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='priceUrl2' className="form-control" placeholder="Price Url" />
                        </div>

                        <div className="row mb-2">
                            <input type="text" name='img3' className="form-control" placeholder="Img Url " />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='rating3' className="form-control" placeholder="Rating" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='Tittle3' className="form-control" placeholder="Tittle one" />
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" name='description13' className="form-control" placeholder="Description1" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" name='description23' className="form-control" placeholder="Description2" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" name='description33' className="form-control" placeholder="Description3" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='priceUrl3' className="form-control" placeholder="Price Url" />
                        </div>

                        <div className="row mb-2">
                            <input type="text" name='img4' className="form-control" placeholder="Img Url " />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='rating4' className="form-control" placeholder="Rating" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='Tittle4' className="form-control" placeholder="Tittle one" />
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" name='description14' className="form-control" placeholder="Description1" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" name='description24' className="form-control" placeholder="Description2" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" name='description34' className="form-control" placeholder="Description3" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='priceUrl4' className="form-control" placeholder="Price Url" />
                        </div>

                        <div className="row mb-2">
                            <input type="text" name='img5' className="form-control" placeholder="Img Url " />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='rating5' className="form-control" placeholder="Rating" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='Tittle5' className="form-control" placeholder="Tittle one" />
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" name='description15' className="form-control" placeholder="Description1" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" name='description25' className="form-control" placeholder="Description2" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" name='description35' className="form-control" placeholder="Description3" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='priceUrl5' className="form-control" placeholder="Price Url" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='img6' className="form-control" placeholder="Img Url " />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='rating6' className="form-control" placeholder="Rating" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='Tittle6' className="form-control" placeholder="Tittle one" />
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" name='description16' className="form-control" placeholder="Description1" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" name='description26' className="form-control" placeholder="Description2" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" name='description36' className="form-control" placeholder="Description3" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='priceUrl6' className="form-control" placeholder="Price Url" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='img7' className="form-control" placeholder="Img Url " />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='rating7' className="form-control" placeholder="Rating" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='Tittle7' className="form-control" placeholder="Tittle one" />
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" name='description17' className="form-control" placeholder="Description1" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" name='description27' className="form-control" placeholder="Description2" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" name='description37' className="form-control" placeholder="Description3" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='priceUrl7' className="form-control" placeholder="Price Url" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='img8' className="form-control" placeholder="Img Url " />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='rating8' className="form-control" placeholder="Rating" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='Tittle8' className="form-control" placeholder="Tittle one" />
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" name='description18' className="form-control" placeholder="Description1" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" name='description28' className="form-control" placeholder="Description2" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" name='description38' className="form-control" placeholder="Description3" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='priceUrl8' className="form-control" placeholder="Price Url" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='img9' className="form-control" placeholder="Img Url " />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='rating9' className="form-control" placeholder="Rating" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='Tittle9' className="form-control" placeholder="Tittle one" />
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" name='description19' className="form-control" placeholder="Description1" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" name='description29' className="form-control" placeholder="Description2" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" name='description39' className="form-control" placeholder="Description3" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='priceUrl9' className="form-control" placeholder="Price Url" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='img10' className="form-control" placeholder="Img Url " />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='rating10' className="form-control" placeholder="Rating" />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='Tittle10' className="form-control" placeholder="Tittle one" />
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" name='description110' className="form-control" placeholder="Description1" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" name='description210' className="form-control" placeholder="Description2" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <textarea type="text" name='description310' className="form-control" placeholder="Description3" ></textarea>
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='priceUrl10' className="form-control" placeholder="Price Url" />
                        </div>


                    </div>
                    <button className="btn btn-primary m-3" type="submit">Add Blog</button>
                </form>
            </div>

        </div >

    );
};

export default AddBlog;