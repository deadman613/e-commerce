import React, { createContext,useState } from "react";
import products from "../assests/assets.js";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "£.";
    const delivery_fee= 10;
    const [search,setSearch]=useState("");
    const [showSearch,setshowsearch]=useState(true)
    


    const value ={
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setshowsearch


    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>

    );

}

export default ShopContextProvider