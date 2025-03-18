import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "./context/ShopContext";
import Footer from "./Footer.jsx";
import { assets } from "./assests/assets.js";
import Title from "./Title.jsx";
import Productcompo from './Productcompo.jsx'




function Shop() {
    const { products, search, showSearch } = useContext(ShopContext)
    const [filter, setFilter] = useState(false)
    const [filterproduct, setProduct] = useState([])
    const [category, setCategory] = useState([])
    const [subCategory, setSubcategory] = useState([])
    // const [notavailable,setNotavaible]=useState(false)

    const togglecatgory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(p => p.filter(item => item !== e.target.value))

        }
        else {
            setCategory(p => [...p, e.target.value])
        }


    }
    const togglesubcatgory = (e) => {

        if (subCategory.includes(e.target.value)) {
            setSubcategory(ps => ps.filter(item => item !== e.target.value))
        }
        else {
            setSubcategory(ps => [...ps, e.target.value])
        }

    }


    useEffect(() => {

        setProduct(products)
    }, [])

    useEffect(() => {
        console.log(subCategory);



    }, [subCategory])



    const applyfilter = () => {
        let productcopy = products.slice();
     

        if (showSearch && search) {
            productcopy = productcopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

        }
        // else {



        //     setNotavaible(true,"Product is Not Present  Right Now :(");
      

        // }


        if (category.length > 0) {
            productcopy = productcopy.filter(item => category.includes(item.category))
        }

        if (subCategory.length > 0) {
            productcopy = productcopy.filter(item => subCategory.includes(item.subCategory))
        }

        setProduct(productcopy);

    }

    useEffect(() => {

        applyfilter();


    }, [category, subCategory, search, showSearch])


    return (<>



        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t sm:mx-20">

            {/* Right */}

            <div className="min-w-60  ">
                <p onClick={() => setFilter(!filter)} className="text-gray-600 font-bold py-2 text-[15px] flex justify-center items-center "  >FILTERS
                    <img className={`h-3   sm:hidden ${filter ? "rotate-90" : ""} mx-1.5 `} src={assets.dropdown_icon} alt="" />
                </p>

                {/* categoryfilters */}

                <div className={`border border-gray-300   mt-5 pl-5 py-3 ${filter ? '' : 'hidden'} sm:block`}>
                    <p className="mb-3 text-gray-600 text-sm font-medium" >CATEGORY</p>
                    <div className="flex flex-col">
                        <p className="flex gap-2">
                            <input type="checkbox" value={"Men"} onClick={togglecatgory} />
                            Mens
                        </p>
                        <p className="flex gap-2">
                            <input type="checkbox" value={"Women"} onClick={togglecatgory} />
                            Women
                        </p>
                        <p className="flex gap-2">
                            <input type="checkbox" value={"Kids"} onClick={togglecatgory} />
                            Kids
                        </p>

                    </div>

                </div>

                {/* subcategory */}
                <div className={`border border-gray-300 mb-10  mt-10 pl-5 py-3 ${filter ? '' : 'hidden'} sm:block`}>
                    <p className="mb-3 text-gray-600 text-sm font-medium" > SUB-CATEGORY</p>
                    <div className="flex flex-col">
                        <p className="flex gap-2">
                            <input type="checkbox" value={"Topwear"} onClick={togglesubcatgory} />
                            Topwear
                        </p>
                        <p className="flex gap-2">
                            <input type="checkbox" value={"Bottomwear"} onClick={togglesubcatgory} />
                            Bottomwear
                        </p>
                        <p className="flex gap-2">
                            <input type="checkbox" value={"Winterwear"} onClick={togglesubcatgory} />
                            Winterwear
                        </p>

                    </div>
                </div>

            </div>

            {/* right side of the shop page */}

            <div className="flex-1">

                <div className=" flex justify-between  text-base sm:text-[15px] mb-4 sm:ml-20">
                    <p className="mx-5 text-3xl"> ALL <span className="text-red-600">COLLECTION</span></p>
                </div>

                {/* map product  */}

                <div className="grid grid-cols-2 gap-5 md:grid-cols-3 ">
                    {

                        filterproduct.map((item, index) => (
                            <Productcompo key={index} name={item.name} id={item._id} price={item.price} image={item.image} />

                        ))


                    }


                </div>

                {/* {notavailable ?  <p className=" flex text-2xl sm:text-5xl text-gray-500 items-center py-10 justify-center h-2/2">{notavailable}</p>: ""} */}

            </div>


        </div>





        <Footer />
    </>);
}

export default Shop