import React, { useContext } from "react";
import Title from "./Title";
import { ShopContext } from "./context/ShopContext";

const Totalamountcart = () => {
    const { addtotalamount, currency, cartItems } = useContext(ShopContext);

    return (
        
     
        <div className="  relative text-[10px] mt-20   sm:text-3xl mb-3 flex justify-end mr-50">
        
   
                <p className="text-lg font-semibold">
                    Total Amount: {currency}{addtotalamount()}
                </p>
       
        </div>
    );
};

export default Totalamountcart;
