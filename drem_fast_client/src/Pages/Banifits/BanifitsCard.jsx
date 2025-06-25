import React from 'react';

const BanifitsCard = ({ imgSrc, title, description }) => {
  return (
    <div className="flex gap-6 items-center bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <img src={imgSrc} alt={title} className="w-48 h-auto object-contain" />
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default BanifitsCard;