/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-3/5 relative px-4'>
                        <img src={person} className="w-4/5 rounded-lg shadow-2xl" />
                        <img src={parts} className="absolute right-5 top-1/2 border-8 border-white w-3/5 rounded-lg shadow-2xl" />
                    </div>
                    <div className='lg:w-2/5 px-4 space-y-5'>
                        <h2 className='text-lg font-bold text-red-600'>About Us</h2>
                        <h1 className="text-5xl font-bold">We are quali fied & of experience in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br /><br />
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                        </p>
                        <button className="btn bg-orange-500 border-0">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;