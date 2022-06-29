import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className='h-screen flex justify-center items-center'>
                <Link to='/useradd' className='px-7 py-3 text-3xl font-mono border-2 rounded-lg mx-4 bg-sky-200 text-yellow-600 hover:border-red-300 hover:bg-white hover:text-red-700 '> Add User </Link>
                <Link to='/deleteuser' className='px-7 py-3 text-3xl font-mono border-2 rounded-lg mx-4 bg-sky-200 text-yellow-600 hover:border-red-300 hover:bg-white hover:text-red-700 '> Delete User </Link>
            </div>
        </div>
    );
};

export default Home;