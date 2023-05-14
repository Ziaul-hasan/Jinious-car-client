/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="p-5">
                <img src={img} alt="Shoes" className="rounded-xl w-full h-[200px]" />
            </figure>
            <div className='my-5 px-8 space-y-5'>
                <h2 className="text-2xl font-semibold">{title}</h2>
                <div className='flex justify-between items-center'>
                    <p className='text-lg text-red-600 font-semibold'>${price}</p>
                    <div className="card-actions">
                        <button className="text-red-600"><FaArrowRight></FaArrowRight></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;