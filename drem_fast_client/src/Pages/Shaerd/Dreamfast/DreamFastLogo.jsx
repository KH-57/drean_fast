import React from 'react';
import logo from '../../../assets/logo.png';
const DreamFastLogo = () => {
    return (
        <div className='flex items-end'>
            <img className='mb-1' src={logo} alt="" />
            <h2 className='text-3xl -ml-3 font-extrabold'>DreamFast</h2>
        </div>
    );
};

export default DreamFastLogo;