import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "./context/ShopContext";
import { assets } from "./assests/assets";
<<<<<<< HEAD
import Footer from "./Footer.jsx"


const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState(false)
  const [review, setReview] = useState(false)

  useEffect(() => {
    const fetchProductData = () => {
      const product = products.find((item) => item._id === productId);
      if (product) {
        setProductData(product);
        console.log('product', product);

        setImage(product.image[0]);
      }
    };
    fetchProductData();
  }, [productId, products]);

  if (!productData) return null;

  return (
    <><div className="border-b-2 pt-10 transition-opacity ease-in duration-500 opacity-100 rounded-lg shadow-md px-4 sm:px-8 md:px-12 lg:px-16">
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
          <div className="mt-4 w-full flex justify-center">
            <img src={image} className="w-full sm:w-3/4 max-h-[400px] object-contain" alt="" />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col justify-center text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-semibold">{productData.name}</h2>
          <div className=" flex mt-4 justify-center sm:justify-start  ">
            <img className="h-4 w-4" src={assets.star_icon} alt="" />
            <img className="h-4 w-4" src={assets.star_icon} alt="" />
            <img className="h-4 w-4" src={assets.star_icon} alt="" />
            <img className="h-4 w-4" src={assets.star_icon} alt="" />
            <img className="h-4 w-4" src={assets.star_dull_icon} alt="" />

          </div>
          <p className="text-lg text-gray-600 mt-2">{productData.description}</p>
          <p className="text-lg text-black font-bold mt-2"><span className="text-gray-700">Price:</span>{currency}{productData.price}</p>
          <div className=" mt-4 flex items-center sm:justify-start   justify-center ">
            <p className="text-[20px] font-bold text-gray-800">Size:</p>
            <button className="border-b-2 bg-black text-white rounded hover:bg-red-600 h-10 w-10  px-1.5 py-1.5 mx-1.5" >S</button>
            <button className="border-b-2 bg-black text-white rounded hover:bg-red-600 h-10 w-10 px-1.5 py-1.5 mx-1.5">M</button>
            <button className="border-b-2 bg-black text-white rounded hover:bg-red-600 h-10 w-10 px-1.5 py-1.5 mx-1.5" >x</button>
            <button className="border-b-2 bg-black text-white rounded hover:bg-red-600 h-10 w-10 px-1.5 py-1.5 mx-1.5">xl</button>

          </div>
          <div className="flex flex-col sm:flex-row sm:justify-start items-center justify-center cursor-pointer ">
            <button className=" px-2 py-1 mt-5 h-10 w-40 border-0 bg-gray-200 scale-90 cursor-pointer hover:scale-95 text-black">
              Add to cart
            </button>
            <button className=" px-2 py-1 mt-5 h-10 w-40 border-0 bg-gray-200 scale-90 cursor-pointer hover:scale-95 text-black">
              Buy Now
            </button>
          </div>
          <hr className=" text-gray-200 mt-8 sm:4/5" />
          <div className="mt-3 text-gray-600 flex flex-col gap-1">
            <p>Cash on Delivery is Available</p>
            <p>100% Original Product </p>
            <p>Easy Return and Exchange  Policy Within 7 Days </p>
          </div>

        </div>
      </div>
    </div>
      <div className="flex flex-col
       justify-start">
        {/* description of product */}
        <div className="flex flex-row">
          <button onClick={() => {setDescription(!description),setReview(false)}} className="border border-gray-400 py-2 rounded  bg-gray-200   px-2 ml-10 mt-5 flex justify-start" >
            Description
          </button>
          <button onClick={() => {setReview(!review),setDescription(false)}}  className="border border-gray-400 py-2   bg-gray-200 rounded px-2 ml-10 mt-5 flex justify-start" >
            Review
          </button>

        </div>
        {description && (<div className={`bg-gray-200 ml-10 mt-3 px-3 py-3 mx-4  `}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto provident illum nihil expedita eveniet! Maiores ipsa enim pariatur est, eos non numquam alias ipsam, ducimus unde, voluptates repellendus distinctio eum?</p>
        </div>)}

        {review && (<div className={`bg-gray-200 ml-10 mt-3 px-3 py-3 w-auto mx-4 `}>
          <img className="border-black  pl-3 mb-1.5" src={assets.profile_icon} alt="" />
      
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto provident illum nihil expedita eveniet! Maiores ipsa enim pariatur est, eos non numquam alias ipsam, ducimus unde, voluptates repellendus distinctio eum?</p>
        </div>)}

      </div>
      <Footer />
    </>

  );
=======
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
>>>>>>> 8c34715 (netlify deploy)
};

export default Product;
