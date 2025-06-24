import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Client5LogoMarquee from './ClientLogoMarquee/Client5LogoMarquee';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Services></Services>
           <Client5LogoMarquee></Client5LogoMarquee>
        </div>
    );
};

export default Home;