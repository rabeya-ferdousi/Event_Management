import React from 'react';
import ServicesDetails from './ServicesDetails';
import { useLoaderData } from 'react-router-dom';
const Services = () => {
    const event = useLoaderData();

    return (
        <div>
            {/* <h1 className="text-3xl">This is service page (hidden Route)</h1> */}
          
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 py-10'>
                {
                    //"?" means if data is available then go through the loop and show all campaigns
                    event?.map(event=><ServicesDetails key={event.id} event={event}></ServicesDetails>)
                }
            </div>
        </div>
    );
};

export default Services;