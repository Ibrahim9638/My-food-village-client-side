import React from 'react';
import { useRouteError } from 'react-router-dom';
import logo from '../images/error.png'


const ErrorPage = () => {
    const {error, status} = useRouteError()
    return (
        <div className='text-center'>
            <h2 className='text-success mt-3'>Error is the part of program</h2>
            <img className="w-25" src={logo} alt="" />
            <h2 className='text-danger'>{error.message}</h2>
        </div>
    );
};

export default ErrorPage;