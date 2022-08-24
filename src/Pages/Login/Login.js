import React, { useState } from 'react';
// import './Login.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [duser, setDuser] = useState();
    console.log(duser);
    const navigate = useNavigate();
    const btnLogin = (e) => {
        e.preventDefault();
        console.log(e.target.email.value);
        const username = e.target.email.value;
        const password = e.target.password.value;
        // const user = { username, password }
        fetch(`http://localhost:5000/user/${username}`)
            // , {
            //     method: 'GET',
            //     headers: {
            //         'content-type': 'application/json',
            //     },
            //     // body: JSON.stringify(user)
            // })
            .then(res => res.json())
            .then(data => {
                setDuser(data);

                if (data?.username === username && data?.password === password) {
                    console.log('vaild');
                    navigate(`/dashboard`);
                }
                else {
                    console.log('invalid user')
                }


            })
    }
    return (
        <div className='container'>
            <section class="ftco-section">
                <div class="container">

                    <div class="row justify-content-center">
                        <div class="col-md-6 col-lg-5">
                            <div class="login-wrap p-4 p-md-5">
                                <div class="icon d-flex align-items-center justify-content-center">
                                    <span class="fa fa-user-o"></span>
                                </div>
                                <h3 class="text-center mb-4">Have an account?</h3>
                                <form onSubmit={btnLogin} method='post' class="login-form">
                                    <div class="form-group">
                                        <input name='email' type="text" class="form-control rounded-left" placeholder="Username" required />
                                    </div>
                                    <div class="form-group d-flex">
                                        <input name='password' type="password" class="form-control rounded-left" placeholder="Password" required />
                                    </div>
                                    <div class="form-group d-md-flex">
                                        {/* <div class="w-50">
                                            <label class="checkbox-wrap checkbox-primary">Forgot Password
                                                <input type="checkbox" checked />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div> */}
                                        <div class="w-50 ">
                                            <a href="#">Forgot Password?</a>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-primary rounded submit  fs-5 px-5">Login</button>
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