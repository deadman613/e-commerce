import React, { createContext, useEffect, useState } from "react";
import products from "../assests/assets.js";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "£.";
    const delivery_fee = 10;
    const [search, setSearch] = useState("");
    const [showSearch, setshowsearch] = useState(true)
    const [cartItems, setcartItems] = useState([])
    const [count, setCount] = useState([])


    const getCartCount = () => {
        let totalCount = 0;

        for (const items of Object.values(cartItems)) {
            for (const count of Object.values(items)) {
                totalCount += count;
            }
        }

        return totalCount;
    };


    const addtocart = async (itemID, size) => {
        let cartData = structuredClone(cartItems)

        if (!size) {
            alert("Please select the Product Size");

        }

        if (cartData[itemID]) {
            if (cartData[itemID], [size]) {
                cartData[itemID][size] += 1
            }
            else {
                cartData[itemID][size] = 1
            }

        }
        else {
            cartData[itemID] = {}
            cartData[itemID][size] = 1

        }
        setcartItems(cartData);


    }
    useEffect(() => {
        console.log(cartItems);


    }, [cartItems])



    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setshowsearch,
        cartItems,
        addtocart,
        getCartCount


    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>

    );

}

export default ShopContextProvider