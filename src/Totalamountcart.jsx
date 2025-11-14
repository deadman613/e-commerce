import React, { useContext } from "react";
import Title from "./Title";
import { ShopContext } from "./context/ShopContext";

const Totalamountcart = () => {
    const { addtotalamount, currency, cartItems } = useContext(ShopContext);

    return (

        <>
            <div className=" relative  text-[10px] mt-20   sm:text-3xl mb-3 flex flex-col justify-end mr-50">


                <p className="text-lg font-semibold">
                    Total Amount to paid : {currency}{addtotalamount()}
                </p>

            </div>

            <button className="rounded bg-black w-30 text-white py-2 ">
                Place Order
            </button>
        </>
    );
};

export default Totalamountcart;
