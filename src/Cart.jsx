import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "./context/ShopContext";
// import products from "./assests/assets.js";
import Title from "./Title.jsx"
import { assets } from "./assests/assets.js";
import Totalamountcart from "./Totalamountcart.jsx"

function Cart() {
    const { products, currency, cartItems, updateQuantity } = useContext(ShopContext);
    const [itemincart, setItemincart] = useState([])
    const[show,setShow]=useState("")



    useEffect(() => {
        let tempdata = []
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                if (cartItems[items][item] > 0) {
                    tempdata.push({ _id: items, size: item, quantity: cartItems[items][item] })



                }

            }
        }
        setItemincart(tempdata)

    }, [cartItems])

    return  (
        <>


            <div className="border-gray-500 h-auto pt-10">
            <div className="  relative text-[15px]   sm:text-3xl mb-3 flex justify-start ml-10">
                <Title text1={"Your"} text2={"items"} />
                <p className="h-0.5 w-[220px] bg-gray-300 rounded-2xl absolute top-14 "></p>

            </div>



                { 
                   
                    itemincart.map((item, index) => {
                        const productData = products.find((product) => product._id === item._id);


                        return (
                            <div key={index} className="border-t grid grid-cols-1 sm:grid-cols-3  shadow-2xl gap-10 items-center  border-b border-r py-4 mt-10 rounded-r-2xl  ">
                                <div className="flex items-start  gap-6 ">
                                    <img src={productData.image[0]} alt="" className="w-30 h-20 px-5 " />

                                    <div className="flex flex-col  ">
                                        <p className="text-gray-500" >{productData.name}</p>
                                        <p className="text-gray-500" >{currency}{productData.price}</p>
                                        <p className="px-3 py-1 w-10 border text-black bg-gray-200">{item.size}</p>
                                    </div>
                                </div>
                                <div className="flex items-center  px-4 justify-center sm:justify-around ml-10 gap-2.5">
                                    <input onChange={(e) => e.target.value === 0 ? null : updateQuantity(item._id, item.size, Number(e.target.value))} className="border max-w-20 sm:max-w-20 rounded    px-1 sm:px-2  " type="number" min={1} defaultValue={item.quantity} />
                                </div>
                                <img onClick={() => updateQuantity(item._id, item.size, 0)} src={assets.bin_icon} className=" w-5 h-5 flex items-center  justify-center " alt="" />

                            </div>
                        );
                    })

                }

                <div className="text-sm flex flex-col justify-end mx-10 gap-3 " >
                   <Totalamountcart />

                </div>
            </div>
        </>
    );
}

export default Cart;
