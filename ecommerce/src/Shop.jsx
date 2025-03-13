import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "./context/ShopContext";
import Footer from "./Footer.jsx";
import products, { assets } from "./assests/assets.js";
import Title from "./Title.jsx";
import Productcompo from './Productcompo.jsx'




function Shop() {
    const { product } = useContext(ShopContext)
    const [filter, setFilter] = useState(false)
    const [filterproduct, setProduct] = useState([])

    useEffect(() => {
        setProduct(products)
    })

    return (<>



        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t mx-20">

            {/* Right */}

            <div className="min-w-60 ">
                <p onClick={() => setFilter(!filter)} className="text-gray-600 font-bold py-2 text-[15px] flex justify-center items-center "  >FILTERS
                    <img className={`h-3   sm:hidden${filter ? "rotate-90" : ""} mx-1.5 `} src={assets.dropdown_icon} alt="" />
                </p>
                {/* categoryfilters */}
                <div className={`border border-gray-300   mt-5 pl-5 py-3 ${filter ? '' : 'hidden'} sm:block`}>
                    <p className="mb-3 text-gray-600 text-sm font-medium" >CATEGORY</p>
                    <div className="flex flex-col">
                        <p className="flex gap-2">
                            <input type="checkbox" value={"Men"} />
                            Mens
                        </p>
                        <p className="flex gap-2">
                            <input type="checkbox" value={"Women"} />
                            Women
                        </p>
                        <p className="flex gap-2">
                            <input type="checkbox" value={"Kids"} />
                            Kids
                        </p>

                    </div>

                </div>

                {/* subcategory */}
                <div className={`border border-gray-300   mt-10 pl-5 py-3 ${filter ? '' : 'hidden'} sm:block`}>
                    <p className="mb-3 text-gray-600 text-sm font-medium" > SUB-CATEGORY</p>
                    <div className="flex flex-col">
                        <p className="flex gap-2">
                            <input type="checkbox" value={"Topwear"} />
                            Topwear
                        </p>
                        <p className="flex gap-2">
                            <input type="checkbox" value={"Bottomwear"} />
                            Bottomwear
                        </p>
                        <p className="flex gap-2">
                            <input type="checkbox" value={"Winterwear"} />
                            Winterwear
                        </p>

                    </div>
                </div>

            </div>

            {/* right side of the shop page */}

            <div className="flex-1">

                <div className=" flex justify-between  text-base sm:text-[15px] mb-4">
                    <Title text1={"ALL "} text2={"COLLECTION"} />
                </div>

                {/* map product  */}

                <div className="grid grid-cols-2 md:grid-cols-3 ">
                    {

                        filterproduct.map((item, index) => (
                            <Productcompo key={index} name={item.name} id={item._id} price={item.price} image={item.image} />

                        ))


                    }


                </div>

            </div>


        </div>





        <Footer />
    </>);
}

export default Shop