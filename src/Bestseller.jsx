
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "./context/ShopContext";
import Productcompo from "./productcompo";
import Title from "./Title";

const Bestseller =()=>
{

    const { products } = useContext(ShopContext)
        const [bestseller, setBestseller] = useState([]);
        // console.log(products);
    
        useEffect(() => {
            const bestproduct = products.filter((item)=>(item.bestseller))
            setBestseller(bestproduct.slice(0,5)); 
        }, [])
    
    


    return(<>
    <div className=" my-15">
        <div className="text-center text-3xl py-6">
            <Title text1={'Best'} text2={'Seller'}/>
        </div>
        <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ml-10   gap-1  ">
            {
                bestseller.map((item,index)=>(
                    <Productcompo  key={index} name={item.name} id={item._id} price={item.price}  image={item.image}/>
                ))
            }

        </div>
        
    </div>
    </>);

}

export default Bestseller