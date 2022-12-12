import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import DashboardLeftSidebar from '../DashboardLeftSidebar';

const ManageBlogs = () => {
    const [products, setProducts] = useState([]);
    const pathname = window?.location?.pathname;
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://dog-potluck.onrender.com/blogs`)
            .then(res => res.json())
            .then(data => {
                // setProducts(data);
                console.log(data);
                setProducts(data);

            }
            )

    }, []);

    const btnEdit = id => {
        const proceed = window.confirm('Are You Sure You Want To Update The Blog!');
        // console.log(id)
        if (proceed) {
            navigate(`/updateBlog/${id}`)
        }
    }

    const handleRemoveBlog = product => {
        const proceed = window.confirm('Are You Sure You Want To Delete The Blog!');
        //console.log(product)
        if (proceed) {
            fetch(`https://dog-potluck.onrender.com/blog/${product._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data))

            const rest = products.filter(pd => pd._id !== product._id);
            // console.log(rest);
            setProducts(rest);
            // removeFromDb(product.id);
        }
    }
    if (!products) {
        return <Loading></Loading>
    }
    return (
        <div className='d-flex'>
            <DashboardLeftSidebar></DashboardLeftSidebar>
            <div className='container '>
                <h2 className='text-2xl font-bold pb-3' style={{ "color": "purple" }}>Welcome to <span className='text-2xl' style={{ "color": "blue" }}>Admin's</span> Dashboard</h2>
                <table className="table table-hover table-bordered">
                    <thead className='bg-success'>
                        <tr>
                            <th scope="col ">Sl No</th>
                            <th scope="col ">Photo</th>
                            <th scope="col ">Tittle</th>
                            <th scope="col ">Tittle 2</th>
                            <th scope="col ">Category</th>
                            <th scope="col ">Edit</th>
                            <th scope="col ">Delete</th>
                        </tr>
                    </thead>
                    <tbody className='table-light'>
                        {
                            products.map((a, index) => <tr>
                                <th scope="row">{index + 1}</th>
                                <td><img style={{ "height": "90px" }} src={a?.img1} alt="" /></td>
                                <td>{a?.Tittle1}</td>
                                <td>{a?.Tittle2}</td>
                                <td>{a?.category}</td>

                                <td><button className='border-0 rounded-circle delete-button' onClick={() => btnEdit(a._id)}><FontAwesomeIcon icon={faEdit} /></button></td>
                                <td><button className='border-0 rounded-circle delete-button ' onClick={() => handleRemoveBlog(a)} ><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button></td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageBlogs;