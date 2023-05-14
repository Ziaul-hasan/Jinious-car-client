/* eslint-disable no-unused-vars */
import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    const textWithOverlay = <>
        <div className="absolute flex items-center bottom-0 top-0 right-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='w-1/3 pl-10 space-y-8 '>
                <h1 className='text-white text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                <p className='text-white text-lg font-normal'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className='space-x-5'>
                    <button className="btn bg-orange-500 border-0">Discover More</button>
                    <button className="btn btn-outline text-white border-2 border-white">Latest Project</button>
                </div>
            </div>
        </div>
    </>
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full h-[650px]" />
                {textWithOverlay}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-4">
                    <a href="#slide6" className="btn bg-slate-400 bg-opacity-25 border-0 btn-circle">❮</a>
                    <a href="#slide2" className="btn bg-orange-500 border-0 btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full h-[650px]" />
                {textWithOverlay}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-4">
                    <a href="#slide1" className="btn bg-orange-500 border-0 btn-circle">❮</a>
                    <a href="#slide3" className="btn bg-orange-500 border-0 btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full h-[650px]" />
                {textWithOverlay}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-4">
                    <a href="#slide2" className="btn bg-orange-500 border-0 btn-circle">❮</a>
                    <a href="#slide4" className="btn bg-orange-500 border-0 btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full h-[650px]" />
                {textWithOverlay}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-4">
                    <a href="#slide3" className="btn bg-orange-500 border-0 btn-circle">❮</a>
                    <a href="#slide5" className="btn bg-orange-500 border-0 btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full h-[650px]" />
                {textWithOverlay}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-4">
                    <a href="#slide4" className="btn bg-orange-500 border-0 btn-circle">❮</a>
                    <a href="#slide6" className="btn bg-orange-500 border-0 btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full h-[650px]" />
                {textWithOverlay}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-4">
                    <a href="#slide5" className="btn bg-orange-500 border-0 btn-circle">❮</a>
                    <a href="#slide1" className="btn bg-slate-400 bg-opacity-25 border-0 btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;