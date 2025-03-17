import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "./context/ShopContext";
import { assets } from "./assests/assets";
import Footer from "./Footer";

const Product = () => {
    const { productId } = useParams();
    const { products,currency } = useContext(ShopContext);
    const [productData, setProductData] = useState(null);
    const [image, setImage] = useState("");

    useEffect(() => {
        const fetchProductData = () => {
            const product = products.find((item) => item._id === productId);
            if (product) {
                setProductData(product);
                setImage(product.image[0]);
            }
        };
        fetchProductData();
    }, [productId, products]);

    if (!productData) return null;

    return (
        <div className="border-b-2 pt-10 transition-opacity ease-in duration-500 opacity-100 rounded-lg shadow-md px-4 sm:px-8 md:px-12 lg:px-16">
            <div className="flex flex-col sm:flex-row gap-6">
                {/* Product images */}
                <div className="flex-1 flex flex-col items-center">
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                        {productData.image.map((item, index) => (
                            <img
                                key={index}
                                onClick={() => setImage(item)}
                                src={item}
                                alt=""
                                className="h-16 w-16 sm:h-24 sm:w-24 cursor-pointer border rounded-md object-cover"
                            />
                        ))}
                    </div>
                    <div className="mt-8 w-full flex justify-center">
                        <img src={image} className="w-full sm:w-3/4 max-h-[400px] object-contain" alt="" />
                    </div>
                </div>
                
                {/* Product Details */}
                <div className="flex-1 flex flex-col justify-center text-center sm:text-left sm:mx-50">
                    <h2 className="text-xl sm:text-2xl font-semibold">{productData.name}</h2>
                    <div className="pt-2 flex gap-1">
                        <img className="h-3 w-4" src={assets.star_icon} alt="" />
                        <img className="h-3 w-4"  src={assets.star_icon} alt="" />
                        <img className="h-3 w-4" src={assets.star_icon} alt="" />
                        <img className="h-3 w-4" src={assets.star_icon} alt="" />
                        <img className="h-3 w-4" src={assets.star_dull_icon} alt="" />


                    </div>
                    <p className="text-lg text-gray-600 mt-2">{productData.description}</p>
                    <p className="text-lg text-gray-600 mt-2"><span>{currency}</span>{productData.price}</p>

                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Product;
