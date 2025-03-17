import  React  from "react";
import { assets } from "./assests/assets";




const Policyofproduct =()=>
{

 

    return(
    <>
    <div className=" flex flex-col  sm:flex-row justify-around text-center ml-0 mr-0 gap-10 py-20">
        <div >
            <img className="text-black w-12 m-auto mb-5 " src={assets.exchange_icon} alt="" />
            <p className="font-bold">Easy  <span className="text-red-700">Exchange</span> Policy </p>
            <p className="text-gray-400 text-[15px]  sm:text[10px]"> We offer a hassle-free exchange policy .</p>

        </div> 
        <div >
            <img className="text-black w-12 m-auto mb-5 " src={assets.quality_icon} alt="" />
            <p className="font-bold">  <span className="text-red-700">7</span> Days Return  Policy </p>
            <p className="text-gray-400"> We Provide 7 Days Return Policy </p>

        </div> 

        <div >
            <img className="text-black w-12 m-auto mb-5 " src={assets.support_img} alt="" />
            <p className="font-bold">Easy  <span className="text-red-700">Best</span> Customer Supprt </p>
            <p className="text-gray-400">  Our Team will, Call you within 15 mins.</p>

        </div> 
    </div>
    
    </>);
}

export default Policyofproduct