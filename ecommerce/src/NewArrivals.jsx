import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "./context/ShopContext";
import Title from "./Title.jsx";
import Productcompo from "./Productcompo.jsx";



const NewArrival = () => {
    const { products } = useContext(ShopContext)
    const [latest, setLatest] = useState([]);
    console.log(products);

    useEffect(() => {

        setLatest(products.slice(0, 10));

    }, [])


    return (
        <>
            <div className=" my-20 ">
                <div className="">
                    <Title text1={"New"} text2={"Arrivals :)"} />
                </div>

            </div>

            {/* Rendering product items */}
            <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ml-10   gap-1  ">
                
                {
                    
                    latest.map((item, index) => (
                        <Productcompo  key={index} name={item.name} id={item._id} price={item.price}  image={item.image} />
                    ))

                }

            </div>


        </>);
}

export default NewArrival