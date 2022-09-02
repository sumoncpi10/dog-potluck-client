import React from 'react';

// import './Dashboard.css';

import 'react-toastify/dist/ReactToastify.css';
import DashboardLeftSidebar from './DashboardLeftSidebar';
const Dashboard = () => {

    return (
        <div className='d-flex'>
            <DashboardLeftSidebar></DashboardLeftSidebar>

        </div >
    );
};

export default Dashboard;