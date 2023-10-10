import React from 'react';
import { Link } from 'react-router-dom';

const ServicesDetails = ({event}) => {
    const {id,image,title,description,price} = event ||{}
    return (
        <div>
            <div classNameName='flex justify-center items-center mx-[50px]'>
            <div className="card card-compact w-[500px] bg-base-100 py-8 mx-[50px] shadow">
            <figure><img classNameName="w-[500px]" src={image} alt="" /></figure>
            <div>
            <button className="btn btn-md text-[white] sm:btn-sm md:btn-md lg:btn-md bg-[#14b8a6]">Price : {price}</button>
            </div>
            <div classNameName='shadow-xl w-11'></div>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <p>{description}</p>
            </div>
            </div>
            </div>

        </div>
    );
};

export default ServicesDetails;