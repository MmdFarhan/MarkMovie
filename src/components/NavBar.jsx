import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../movielogo.jpg';

function NavBar(){
    return (
        <div className='flex border space-x-8 items-center pl-3 py-4'>
        <img className="w-[50px]" src={Logo} alt="" />
        <Link  to='/' className='text-black-900 text-2xl font-bold'>Home</Link>
        <Link  to='/watchlist' className='text-black-500 text-2xl font-bold'>Watchlist</Link>
        </div>
    )
}

export default NavBar;