import React from 'react';
import errorImg from '../assets/img/error.png';
import homeBg from '../assets/img/home-bg.png';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="font-sans w-full bg-secondary-white">
            <div className="bg-black w-full h-[20vh] m-0 p-0 flex justify-center items-start">
            <img
                src={homeBg}
                alt="home_bg"
                className="w-full h-full object-cover"
            />
            </div>
            <div className='bg-white rounded-2xl -translate-y-[8vh] sm:w-[90%] w-[95%] mx-auto shadow-primary flex flex-col justify-center items-center p-16 gap-16'>
                <div className='md:w-[40%] sm:w-[80%] w-[95%] mx-auto'>
                    <img src={errorImg} alt="404 ERROR" />
                </div>
                <button onClick={() => navigate('/')} className='font-semibold bg-primary-green md:w-[40%]  md:p-4 p-2 text-sm rounded-lg cursor-pointer transition-all duration-300 hover:bg-primary-green-dark'>Back To Home</button>
            </div>
        </div>
    );
};

export default ErrorPage;