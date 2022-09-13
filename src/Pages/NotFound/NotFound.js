import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header';

const NotFound = () => {
    return (
        <div>
            <div class="wrapper">


                <div class="preloader-wrap">
                    <div class="preloader">
                        <div class="dog-head"></div>
                        <div class="dog-body"></div>
                    </div>
                </div>
                <Header></Header>

                <main class="main-content">
                    <div class="page-header-area" style={{ "backgroundImage": "url(/assets/img/photos/bg1.webp)" }} >
                        <div class="container pt--0 pb--0">
                            <div class="row">
                                <div class="col-12">
                                    <div class="page-header-content">
                                        <h2 class="title">404 Page Not Found</h2>
                                        <nav class="breadcrumb-area">
                                            <ul class="breadcrumb">
                                                <li><Link to="/">Home</Link></li>
                                                <li class="breadcrumb-sep">//</li>
                                                <li></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h1 className='text-4xl text-red-400 text-center'>404</h1>
                    <h1 className='text-4xl text-blue-500 text-center'>Page Not Found</h1>
                </main >
            </div>
        </div>
    );
};

export default NotFound;