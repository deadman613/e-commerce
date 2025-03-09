import { FaMagnifyingGlass } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import React, { useState } from "react"
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";



const NavTop = () => {

    const [visible, setVisible] = useState(false)
    return (
        <>
            <nav
                id="nav1"
                className="h-16 w-full sm:max-sm::w-[400px] gap-5  rounded flex justify-between items-center  bg-white "
            >
                <h3 className="mx-5 text-2xl  max-sm:text-[12px] text-white font-bold flex ">E-commerce Website <FaShoppingCart className="py-1  mx-1.5 mt-1.5" /></h3>
                <div className="search  flex font-bold">
                    <input type="text" className="text-white xl:w-auto sm:max-sm:w-4 md:w[15vh]
                    h-10 w-auto  rounded-2xl pt-2 pb-2 px border-2 border-white ml-1.5" />
                    <NavLink to="/">
                        <FaMagnifyingGlass className=" text-white h-8 w-5 pt-1.5 mx-2.5" />
                    </NavLink>


                </div>


                <ul className=" hidden sm:flex justify-end gap-5 mr-20 cursor-pointer font-bold text-white">

                    <li className='text-white flex flex-col' >
                        <NavLink to="/" > Home <hr className=" w-4/4 border-none h-[1.5px] bg-white hidden" /></NavLink>
                    </li>

                    <li className='text-white flex flex-col' >
                        <NavLink to="/Shop" > Shop  <hr className=" w-4/4 border-none h-[1.5px] hidden bg-white" /> </NavLink>
                    </li>

                    <li className='text-white flex flex-col' >
                        <NavLink to="/Contact" > Contact  <hr className=" w-4/4 border-none h-[1.5px] bg-white hidden" /></NavLink>
                    </li>
                    <li className='text-white flex flex-col' >
                        <NavLink to="/About" > About  <hr className=" w-4/4 border-none h-[1.5px] bg-white hidden" /></NavLink>
                    </li>

                    <li className=' relative cart text-white flex flex-col' >
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

                </ul>


                <div className="  text-white relative sm:hidden ">
                    <GiHamburgerMenu onClick={() => setVisible(!visible)} className="text-white   mt-1.5 w-5  h-6 " />

                </div>
            </nav>

            <div className={`fixed top-0 right-0 h-full w-[250px] bg-white shadow-lg transform transition-transform duration-300 z-50 
                ${visible ? "translate-x-0" : "translate-x-full"}`}>
                <button 
                    onClick={() => setVisible(false)} 
                    className="absolute top-4 right-4 text-black text-xl font-bold"
                >
                    ✕
                </button>
                <ul className="flex flex-col mt-12 space-y-6 text-lg font-bold p-6">
                    <li><NavLink to="/" className="outline-1 outline-black " onClick={() => setVisible(false)}>Home</NavLink></li>
                    <li><NavLink to="/Shop" onClick={() => setVisible(false)}>Shop</NavLink></li>
                    <li><NavLink to="/Contact" onClick={() => setVisible(false)}>Contact</NavLink></li>
                    <li><NavLink to="/About" onClick={() => setVisible(false)}>About</NavLink></li>
                    <li><NavLink to="/Cart" onClick={() => setVisible(false)}>Cart</NavLink></li>
                    <li><NavLink to="/MyAccount" onClick={() => setVisible(false)}>My Account</NavLink></li>
                </ul>
            </div>





           
        </>
    );
}

export default NavTop