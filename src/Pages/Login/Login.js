import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Login = ({ setuserV }) => {
    const [duser, setDuser] = useState();
    console.log(duser);
    const navigate = useNavigate();
    const btnLogin = (e) => {
        e.preventDefault();
        // console.log(e.target.email.value);
        const username = e.target.email.value;
        const password = e.target.password.value;
        // const user = { username, password }
        fetch(`http://localhost:5000/user/${username}`)


            .then(res => res.json())
            .then(data => {
                setDuser(data);

                if (data?.username === username && data?.password === password) {
                    // console.log('vaild');
                    sessionStorage.setItem('userValid', 'val');
                    setuserV('val');
                    navigate(`/dashboard`);
                }
                else {
                    // console.log('invalid user')
                    toast('Invaid Username Or Password!!!!!!')
                }


            })
    }
    return (
        <div className='container'>
            <section className="ftco-section">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-5">
                            <div className="login-wrap p-4 p-md-5">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-user-o"></span>
                                </div>
                                <h3 className="text-center mb-4">Have an account?</h3>
                                <form onSubmit={btnLogin} method='post' className="login-form">
                                    <div className="form-group">
                                        <input name='email' type="text" className="form-control rounded-left" placeholder="Username" required />
                                    </div>
                                    <div className="form-group d-flex">
                                        <input name='password' type="password" className="form-control rounded-left" placeholder="Password" required />
                                    </div>
                                    <div className="form-group d-md-flex">
                                        {/* <div className="w-50">
                                            <label className="checkbox-wrap checkbox-primary">Forgot Password
                                                <input type="checkbox" checked />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div> */}
                                        <div className="w-50 ">
                                            <a href="#">Forgot Password?</a>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary rounded submit  fs-5 px-5">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Login;