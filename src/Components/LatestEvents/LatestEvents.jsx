import React from 'react';

const LatestEvents = () => {
    return (
        <div>
            <div className="container">
                    <div className="flex flex-wrap mx-3">
                        <div className="w-full px-4">
                            <h1 className='font-bold text-4xl text-[#14b8a6] mb-2 text-center mt-7'>Latest Fetured Events</h1>
                            <p className='font-semibold text-2xl text-center sm:text-xl'>Recent Works</p>
                        </div>
                    </div>
            
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10'>
                    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl text-gray-700 shadow-lg">
         
                    <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border shadow-lg shadow-blue-gray-500/40">
                    <img src="https://plus.unsplash.com/premium_photo-1681830829163-5c683d5d008b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="image"/>
                    </div>
                    <div className="p-6">
                    <div className='px-4 rounded w-32'>
                    <h5 className="text-lg font-semibold">Photography</h5>
                    </div>
        
                    <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                    </h5>
                    </div>
                    </div>
                    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl text-gray-700 shadow-lg">
         
                    <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border shadow-lg shadow-blue-gray-500/40 ">
                    <img src="https://images.pexels.com/photos/6469227/pexels-photo-6469227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image"/>
                    </div>
                    <div className="p-6">
                    <div className='px-4 rounded w-32'>
                    <h5 className="text-lg font-semibold">Engagement Party</h5>
                    </div>
        
                    <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                    </h5>
                    </div>
                    </div>
                    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl text-gray-700 shadow-lg">
         
                    <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border shadow-lg shadow-blue-gray-500/40">
                    <img src="https://images.pexels.com/photos/7600062/pexels-photo-7600062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image"/>
                    </div>
                    <div className="p-6">
                    <div className='px-4 rounded'>
                    <h5 className="text-lg font-semibold">Arranged a Birthday Party</h5>
                    </div>
        
                    <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                    </h5>
                    </div>
                    </div>
                    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl text-gray-700 shadow-lg">
         
                    <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border shadow-lg shadow-blue-gray-500/40">
                    <img src="https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image"/>
                    </div>
                    <div className="p-6">
                    <div className='px-4 rounded'>
                    <h5 className="text-lg font-semibold">Catering Service</h5>
                    </div>
                    </div>
                    </div>
            </div>
          </div></div>
    );
};

export default LatestEvents;