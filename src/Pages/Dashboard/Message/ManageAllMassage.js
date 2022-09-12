import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import DashboardLeftSidebar from '../DashboardLeftSidebar';

const ManageAllMassage = () => {
    const [message, setMessage] = useState([]);
    // const pathname = window?.location?.pathname;
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/message`)
            .then(res => res.json())
            .then(data => {
                // setProducts(data);
                console.log(data);
                setMessage(data);
            }
            )
    }, []);

    const btnEdit = id => {
        const proceed = window.confirm('Are You Sure You Want To Update The Product!');
        console.log(id)
        if (proceed) {
            navigate(`/updateProduct/${id}`)
        }
    }


    const handleRemoveProduct = product => {
        const proceed = window.confirm('Are You Sure You Want To Delete The Quest!');
        console.log(product)
        if (proceed) {
            fetch(`http://localhost:5000/quest/${product._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data))

            const rest = message.filter(pd => pd._id !== product._id);
            // console.log(rest);
            setMessage(rest);
            // removeFromDb(product.id);
        }
    }
    if (!message) {
        return <Loading></Loading>
    }
    return (
        <div className='d-flex'>
            <DashboardLeftSidebar></DashboardLeftSidebar>
            <div className='container '>
                <h2 className='text-2xl font-bold pb-3' style={{ "color": "purple" }}>Welcome to <span className='text-2xl' style={{ "color": "blue" }}>Admin's</span> Dashboard</h2>
                <table className="table table-hover table-bordered">
                    <thead className='bg-warning'>
                        <tr>
                            <th scope="col ">Sl No</th>
                            <th scope="col ">Name</th>
                            <th scope="col ">Email</th>
                            <th scope="col ">Subject</th>
                            <th scope="col ">Message</th>
                            <th scope="col ">Action</th>
                        </tr>
                    </thead>
                    <tbody className='table-light'>
                        {
                            message.map((a, index) => <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{a?.con_name}</td>
                                <td>{a?.con_email}</td>
                                <td>{a?.con_subject}</td>
                                <td>{a?.con_message}</td>

                                {/* <td><button className='border-0 rounded-circle delete-button' onClick={() => btnEdit(a._id)}><FontAwesomeIcon icon={faEdit} /></button></td> */}
                                <td><button className='border-0 rounded-circle delete-button ' onClick={() => handleRemoveProduct(a)} ><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button></td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageAllMassage;