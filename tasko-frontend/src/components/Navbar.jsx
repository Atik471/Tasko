import React from 'react';
import task from "../assets/icons/task.png"
import logo from "../assets/icons/logo.png"
import wheel from "../assets/icons/wheel.png"
import arrow from "../assets/icons/arrow.png"
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <nav className='grid grid-cols-2 text-white py-6'>
            <div className='flex justify-between items-center'>
                <div className='flex justify-center items-center gap-2'>
                    <img src={logo} alt="logo" className='w-6 h-6' />
                    <h1 className='text-xl font-bold'>Tasko</h1>
                </div>
                <div className='flex justify-end items-center gap-8'>
                    <NavLink className='flex justify-center items-center gap-2'>
                        <img src={task} alt="task" className='w-5 h-5' />
                        <h2 className='text-primary-green text-base'>Task List</h2>
                    </NavLink>
                    <NavLink className='flex justify-center items-center gap-2'>
                        <img src={wheel} alt="wheel" className='w-5 h-5' />
                        <h2>Spin</h2>
                    </NavLink>
                </div>
            </div>
            <div className='flex justify-end items-center gap-2'>
                <h2>Atik.</h2>
                <img src={arrow} alt="arrow" className='w-6 h-6' />
            </div>
        </nav>
    );
};

export default Navbar;