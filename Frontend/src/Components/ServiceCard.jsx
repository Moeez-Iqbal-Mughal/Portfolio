import React from "react";

const ServiceCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:shadow-orange-600 shadow-lg transform transition-transform hover:scale-105">
    {icon}
    <h2 className="mt-4 text-xl font-semibold text-white">{title}</h2>
    <p className="mt-2 text-gray-400 text-center">{description}</p>
  </div>
);

export default ServiceCard;
