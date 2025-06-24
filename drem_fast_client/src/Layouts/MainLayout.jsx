
import { Outlet } from 'react-router';
import Navber from '../Pages/Shaerd/Navbar/Navber';
import Footer from '../Pages/Shaerd/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;