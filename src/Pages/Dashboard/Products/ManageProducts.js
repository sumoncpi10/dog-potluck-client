import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import DashboardLeftSidebar from '../DashboardLeftSidebar';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const pathname = window?.location?.pathname;
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://dog-potluck.onrender.com/products?category=${'shop'}`)
            .then(res => res.json())
            .then(data => {
                // setProducts(data);
                // console.log(data);
                setProducts(data);

            }
            )

    }, []);

    const btnEdit = id => {
        const proceed = window.confirm('Are You Sure You Want To Update The Product!');
        // console.log(id)
        if (proceed) {
            navigate(`/updateProduct/${id}`)
        }
    }


    const handleRemoveProduct = product => {
        const proceed = window.confirm('Are You Sure You Want To Delete The Product!');
        //console.log(product)
        if (proceed) {
            fetch(`https://dog-potluck.onrender.com/product/${product._id}`, {
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
                            <th scope="col ">Product Name</th>
                            <th scope="col ">Category</th>
                            <th scope="col ">Edit</th>
                            <th scope="col ">Delete</th>
                        </tr>
                    </thead>
                    <tbody className='table-light'>
                        {
                            products.map((a, index) => <tr>
                                <th scope="row">{index + 1}</th>
                                <td><img style={{ "height": "90px" }} src={a?.img} alt="" /></td>
                                <td>{a?.name}</td>
                                <td>{a?.category}</td>

                                <td><button className='border-0 rounded-circle delete-button' onClick={() => btnEdit(a._id)}><FontAwesomeIcon icon={faEdit} /></button></td>
                                <td><button className='border-0 rounded-circle delete-button ' onClick={() => handleRemoveProduct(a)} ><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button></td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageProducts;