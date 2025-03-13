import React from 'react';
import backimg from '../src/images/backimg.jpg';
const Hero =()=>
{
    return( 
    <div className="flex  justify-center my-7  sm:max-sm:flex-col  ">
    {/* Outer container with box styling */}
    <div className="flex flex-col sm:flex-row border border-black rounded-lg shadow-lg w-[80%] max-w-[1000px] p-5">
        {/* Right section (Image) */}
        <div className="w-2/2    sm:w-1/2 ">
            <img
                src={backimg}
                alt="Shopping"
                className="    mb-10   sm:ml-0  sm:mb-0  sm:w-full  h-auto object-cover rounded-lg   cursor-pointer scale-100 hover:scale-105"
            />
        </div>
        
        {/* Left section */}
        <div className="sm:w-1/2 w-full flex flex-col sm:h-auto justify-center px-10 ">
            <h2 className="text-black text-3xl">
                <span className="text-red-500">Sale 20% off</span>
                <br /> On Everything
                <br />
                <span className="text-[15px] leading-2">
                    "Flash Sale! Grab Your Favorites Before They’re Gone!"
                </span>
            </h2>
            <button className="mt-5 px-4 py-2 border-1 border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition">
                Shop Now
            </button>
        </div>


    </div>
</div>);
   

}
export default Hero