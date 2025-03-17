
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ShopContext } from "./context/ShopContext";
// import { assets } from "./assests/assets";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useLocation } from "react-router-dom";



const Searchbar=()=>

{
    const {search,setSearch,showSearch,setshowsearch} = useContext(ShopContext);
    const [visible,setVisible] =useState(false);
    const location = useLocation();

    useEffect (()=>{

        if(location.pathname.includes('/Shop') )
        {
            setVisible(true)
        }
        else{
            setVisible(false)
        }
        // console.log(location.pathname);
        

    },[location])
    

    return  showSearch && visible  ? (
        <>
        <div className=" border-b shadow-2xl shadow-gray-300 border-t border-gray-50  bg-gray-50 text-center  flex items-center  sm:hidden  "> 
            <div className="inline-flex items-center justify-center border border-gray-500 rounded-2xl py-2 px-5 mx-8 my-5 w-3/4 ">
                <input  value={search}  onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search " className=" flex-1 outline-none   rounded placeholder-red-600" />
                <FaMagnifyingGlass className=" text-black h-8 w-5 pt-1.5 mx-2.5" />
                
            </div>
            <div onClick={()=>setshowsearch(false)} className="cursor-pointer"> ✕</div>
            
            


        </div>
        </>


    ) : null
}
 export default Searchbar