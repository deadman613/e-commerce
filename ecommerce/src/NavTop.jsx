import { FaMagnifyingGlass } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import backimg from '../src/images/backimg.jpg';
import React, { useState } from "react"
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";



const NavTop= ()=> {

    const [Set,setVisible] = useState("false")
    return (
        <>
            <nav
                id="nav1"
                className="h-16 w-full rounded flex justify-between items-center py-0 my-0 bg-white "
            >
                <h3 className="mx-5 text-2xl text-white font-bold flex ">E-commerce Website <FaShoppingCart className="py-1  mx-1.5 mt-1.5" /></h3>
                <div className="search  flex font-bold">
                    <input type="text" className="text-white 
                    h-10 w-auto rounded-2xl pt-2 pb-2 px border-2 border-white ml-1.5" />
                    <NavLink to="/">
                        <FaMagnifyingGlass className=" text-white h-8 w-5 pt-1.5 mx-2.5" />
                    </NavLink>


                </div>


                <ul className="flex justify-end gap-5 mr-20 cursor-pointer font-bold text-white">

                    <li className='text-white' >
                        <NavLink to="/" > Home <hr className=" w-4/4 border-none h-[1.5px] bg-white hidden" /></NavLink>
                    </li>

                    <li className='text-white' >
                        <NavLink to="/Shop" > Shop  <hr className=" w-4/4 border-none h-[1.5px] hidden bg-white" /> </NavLink>
                    </li>

                    <li className='text-white' >
                        <NavLink to="/Contact" > Contact  <hr className=" w-4/4 border-none h-[1.5px] bg-white hidden" /></NavLink>
                    </li>
                    <li className='text-white' >
                        <NavLink to="/About" > About  <hr className=" w-4/4 border-none h-[1.5px] bg-white hidden" /></NavLink>
                    </li>

                    <li className=' relative cart text-white' >
                        <NavLink to="/Cart" ><IoBagOutline className=" pb-1.5 h-7 w-10 mx-1.5 font-bold " />  </NavLink>


                    </li>

                    <li className=" group relative    items-center">
                        <NavLink to="/MyAccount" className="flex  items-center gap-1">
                            <h2 className=" mb-1.5"></h2>   <CgProfile className="mr-10 pb-1.5 h-8  w-5  " />
                        </NavLink>
                        <div className=" group-hover:block hidden absolute dropdown-menu right-0  pt-2">
                            <div className=" flex flex-col  gap-2 w-30 py-3 px-2 bg-white text-white">
                                <p className="cursor-pointer hover:text-blue-900 font-bold " >Login</p>
                                <p className="cursor-pointer hover:text-blue-900 font-bold"  >Signup</p>
                                <p className="cursor-pointer hover:text-blue-900 font-bold" >MyAccount</p>
                            </div>
                        </div>

                    </li>
                    <li  className=" absolute mt-1.5 w-5 sm:hidden">
                    <GiHamburgerMenu onClick={()=>setVisible("true")}  />
                    </li>
                </ul>


            </nav>
            <div className="backimg  relative flex">
                <img
                    src={backimg}
                    alt="Background Image"
                    className=" flex justify-center w-full rounded  h-[90vh]"
                />
                <h2 className="text-black absolute right-30  text-5xl   top-20"> 
                <span className="text-red-500 ">Sale 20% off </span>
                 <br /> On Everthing <br /> <span className="text-[15px] leading-2"> "Flash Sale! Grab Your Favorites  Before They’re Gone!"</span></h2>
                <button  className="  absolute right-90 top-65 cursor-pointer bg-transparent outline-2 outline-offset-2 outline-red-500 rounded h-[30px] w-[100px]">Shop Now</button>

            </div>
        </>
    );
}

export default NavTop