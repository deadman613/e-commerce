import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "./context/ShopContext";
import Footer from "./Footer.jsx";
import { assets } from "./assests/assets.js";
// import Title from "./Title.jsx";
import Productcompo from "./Productcompo.jsx";

function Shop() {
    const { products, search, showSearch } = useContext(ShopContext);
    const [filter, setFilter] = useState(false);
    const [filterproduct, setProduct] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubcategory] = useState([]);

    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory((p) => p.filter((item) => item !== e.target.value));
        } else {
            setCategory((p) => [...p, e.target.value]);
        }
    };

    const toggleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setSubcategory((ps) => ps.filter((item) => item !== e.target.value));
        } else {
            setSubcategory((ps) => [...ps, e.target.value]);
        }
    };

    useEffect(() => {
        setProduct(products);
    }, [products]);

    const applyFilter = () => {
        let productCopy = products.slice();

        if (showSearch && search) {
            productCopy = productCopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
        }

        if (category.length > 0) {
            productCopy = productCopy.filter((item) => category.includes(item.category));
        }

        if (subCategory.length > 0) {
            productCopy = productCopy.filter((item) => subCategory.includes(item.subCategory));
        }

        setProduct(productCopy);
    };

    useEffect(() => {
        applyFilter();
    }, [category, subCategory, search, showSearch]);

    return (
        <>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t mr-0 ml-8 sm:mx-20">
                {/* Left: Filters */}
                <div className="min-w-60">
                    <p onClick={() => setFilter(!filter)} className="text-gray-600 font-bold py-2 text-[15px] flex justify-center items-center">
                        FILTERS
                        <img className={`h-3 sm:hidden ${filter ? "rotate-90" : ""} mx-1.5`} src={assets.dropdown_icon} alt="" />
                    </p>

                    {/* Category Filters */}
                    <div className={`border border-gray-300 mt-5 pl-5 py-3 ${filter ? '' : 'hidden'} sm:block`}>
                        <p className="mb-3 text-gray-600 text-sm font-medium">CATEGORY</p>
                        <div className="flex flex-col">
                            <label className="flex gap-2">
                                <input type="checkbox" value="Men" onClick={toggleCategory} /> Mens
                            </label>
                            <label className="flex gap-2">
                                <input type="checkbox" value="Women" onClick={toggleCategory} /> Women
                            </label>
                            <label className="flex gap-2">
                                <input type="checkbox" value="Kids" onClick={toggleCategory} /> Kids
                            </label>
                        </div>
                    </div>

                    {/* Subcategory Filters */}
                    <div className={`border border-gray-300 mb-10 mt-10 pl-5 py-3 ${filter ? '' : 'hidden'} sm:block`}>
                        <p className="mb-3 text-gray-600 text-sm font-medium">SUB-CATEGORY</p>
                        <div className="flex flex-col">
                            <label className="flex gap-2">
                                <input type="checkbox" value="Topwear" onClick={toggleSubCategory} /> Topwear
                            </label>
                            <label className="flex gap-2">
                                <input type="checkbox" value="Bottomwear" onClick={toggleSubCategory} /> Bottomwear
                            </label>
                            <label className="flex gap-2">
                                <input type="checkbox" value="Winterwear" onClick={toggleSubCategory} /> Winterwear
                            </label>
                        </div>
                    </div>
                </div>

                {/* Right: Products Display */}
                <div className="flex-1">
                    <div className="flex justify-between text-base sm:text-[15px] mb-4 sm:ml-20">
                        <p className="flex text-[25px] sm:text-4xl">
                            ALL <span className="text-red-600 mx-2.5">COLLECTION</span>
                        </p>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 sm:w-3xl">
                        {filterproduct.map((item, index) => (
                            <Productcompo key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Shop;
