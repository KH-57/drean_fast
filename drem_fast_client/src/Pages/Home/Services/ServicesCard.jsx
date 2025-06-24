import React from "react";

const ServiceCard = ({service}) => {
    const {icon:Icon,title,description}=service;
  return (
    <div className="card bg-base-100 w-96 shadow-sm hover:bg-amber-300 ">
      <div className="mb-4 flex justify-center text-4xl text-black">{Icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-black">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

export default ServiceCard;
