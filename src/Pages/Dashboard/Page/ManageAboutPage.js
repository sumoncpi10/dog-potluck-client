import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import DashboardLeftSidebar from '../DashboardLeftSidebar';

const ManageAboutPage = () => {
    const [products, setProducts] = useState([]);
    const pathname = window?.location?.pathname;
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://dog-potluck.onrender.com/abouts`)
            .then(res => res.json())
            .then(data => {
                // setProducts(data);
                console.log(data);
                setProducts(data);

            }
            )

    }, []);

    const btnEdit = id => {
        const proceed = window.confirm('Are You Sure You Want To Update About Page!');
        // console.log(id)
        if (proceed) {
            navigate(`/updateAbout/${id}`)
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
                            <th scope="col ">Img</th>
                            <th scope="col ">Tittle</th>
                            <th scope="col ">Bold Tittle</th>
                            <th scope="col ">Description1</th>
                            <th scope="col ">Description2</th>
                            <th scope="col ">Edit</th>
                            {/* <th scope="col ">Delete</th> */}
                        </tr>
                    </thead>
                    <tbody className='table-light'>
                        {
                            products.map((a, index) => <tr>
                                <td><img style={{ "height": "90px" }} src={a?.img} alt="" /></td>
                                <td>{a?.tittle}</td>
                                <td>{a?.boldTittle}</td>
                                <td>{a?.description1}</td>
                                <td>{a?.description2}</td>

                                <td><button className='border-0 rounded-circle delete-button' onClick={() => btnEdit(a._id)}><FontAwesomeIcon icon={faEdit} /></button></td>
                                {/* <td><button className='border-0 rounded-circle delete-button ' onClick={() => handleRemoveProduct(a)} ><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button></td> */}
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageAboutPage;