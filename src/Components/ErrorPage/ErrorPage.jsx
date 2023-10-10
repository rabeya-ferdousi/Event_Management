import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className='flex justify-center py-32'>
            <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">Error !!!</h2>
                <p>Page Not Found</p>
                <div class="card-actions justify-end">
                <Link to={`/`}>
                <button class="btn bg-[#FF444A] text-[white]">GO to Home</button></Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ErrorPage;