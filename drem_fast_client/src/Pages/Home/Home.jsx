import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Client5LogoMarquee from './ClientLogoMarquee/Client5LogoMarquee';
import Banifits from '../Banifits/Banifits';
import BeMerchant from '../BeMerchant/BeMerchant';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Services></Services>
           <Client5LogoMarquee></Client5LogoMarquee>
           <Banifits></Banifits>
           <BeMerchant></BeMerchant>
        </div>
    );
};

export default Home;