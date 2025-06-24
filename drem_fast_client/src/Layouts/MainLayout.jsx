import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Pages/Shaerd/Navbar/Navber';

const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;