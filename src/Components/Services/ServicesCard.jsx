import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({event}) => {
    const {id,image,title,category_name,category_name_bg,card_bg,text_button_bg,description,price} = event || {}
    

    return (
       
        <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl text-gray-700 shadow-lg">
        <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border shadow-lg shadow-blue-gray-500/40">
          <img src={image} alt="ui/ux review check"/>
        </div>
        <div className="p-6">
        <div className='px-4 rounded w-32'>
        <h5 className="text-lg font-semibold ">{category_name}</h5>
        </div>
        
        <h5 className="block text-center font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
        {title}</h5>
        </div>
      </div>
    );
};

export default ServicesCard;