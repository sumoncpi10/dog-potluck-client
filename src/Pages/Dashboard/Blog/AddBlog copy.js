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

        const Tittle1 = e.target.Tittle.value;
        const Tittle2 = e.target.Tittle2.value;
        const category = e.target.category.value;

        const description1 = e.target.description1.value;
        const description2 = e.target.description2.value;
        const description3 = e.target.description3.value;
        const boldDescription = e.target.boldDescription.value;

        const img = e.target.img.value;

        const product = { Tittle1, category, Tittle2, boldDescription, description1, description2, description3, img, date };
        // //console.log(product);
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
                            <input type="text" name='Tittle' className="form-control" placeholder="Tittle one" required />
                        </div>
                        <div className="row mb-2">
                            <input type="text" name='Tittle2' className="form-control" placeholder="Tittle two" />
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
                            {/* <input type="textarea" name='description' className="form-control" placeholder="Description" /> */}
                            <textarea type="text" name='description1' className="form-control" placeholder="Description1" required></textarea>
                        </div>
                        <div className="row mb-2">
                            {/* <input type="textarea" name='description' className="form-control" placeholder="Description" /> */}
                            <textarea type="text" name='description2' className="form-control" placeholder="Description2" ></textarea>
                        </div>
                        <div className="row mb-2">
                            {/* <input type="textarea" name='description' className="form-control" placeholder="Description" /> */}
                            <textarea type="text" name='description3' className="form-control" placeholder="Description3" ></textarea>
                        </div>
                        <div className="row mb-2">
                            {/* <input type="textarea" name='description' className="form-control" placeholder="Description" /> */}
                            <textarea type="text" name='boldDescription' className="form-control" placeholder="Bold Description" required></textarea>
                        </div>


                        <div className="row mb-2">
                            <input type="text" name='img' className="form-control" placeholder="Img Url " required />
                        </div>

                    </div>
                    <button className="btn btn-primary m-3" type="submit">Add Blog</button>
                </form>
            </div>

        </div >

    );
};

export default AddBlog;