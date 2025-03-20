import { FaMagnifyingGlass } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import React, { useContext, useState } from "react"
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { ShopContext } from "./context/ShopContext";





const NavTop = () => {

    const [visible, setVisible] = useState(false)
    const { setshowsearch, search, setSearch, getCartCount } = useContext(ShopContext)




    return (
        <>

            <nav
                id="nav1"
                className="h-20 w-full sm:w-full gap-5  shadow-md shadow-gray-600 rounded flex justify-between items-center px-5 sm:px-30  bg-white "
            >
                <div className=" items-center">
                    <NavLink to='/' className="mx-5 cursor-pointer sm:text-2xl  text-[13px]   text-white font-bold flex ">E-commerce Website <FaShoppingCart className="h-8 w-8 sm:h-auto sm:w-5 mx-1.5 sm:ml-5 " />
                    </NavLink>
                </div>
                <div className="search  flex font-bold items-center">
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className="text-white pl-3 w-1/2 invisible sm:visible  sm:w-full md:w[15vh]
                    h-10   rounded-2xl pt-2 pb-2 px border-2 border-white ml-1.5" />
                    <FaMagnifyingGlass onClick={() => setshowsearch(true)} className=" text-white h-8 w-5 pt-1.5 mx-2.5" />
                </div>


                <ul className=" hidden sm:flex justify-end gap-5 items-center cursor-pointer font-bold text-white">

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

                    <li className='' >
                        <NavLink to="/Cart" className=" relative cart text-white  flex items-center flex-col">
                        <IoBagOutline className="  items-center h-8 w-10 mx-1.5 font-bold " />
                        <p className="absolute rounded-full w-5 b right-[-1px] bottom-[-15px] text-center aspect-square items-center  bg-white text-black">{getCartCount()}</p>
                        </NavLink>


                    </li>

                    <li className=" group relative    items-center">
                        <NavLink to="/MyAccount" className="flex  items-center gap-1">
                            <h2 className=" mb-1.5"></h2>   <CgProfile className="mr-10 pb-1.5 h-8  w-5  " />
                        </NavLink>
                        <div className=" group-hover:block hidden absolute dropdown-menu right-0  pt-2">
                            <div className=" flex flex-col  gap-2 w-30 py-3 px-2 bg-white text-black">
                                <p className="cursor-pointer hover:text-red-700 font-bold " >Login</p>
                                <p className="cursor-pointer hover:text-red-700 font-bold"  >Signup</p>
                                <p className="cursor-pointer hover:text-red-700 font-bold" >MyAccount</p>
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