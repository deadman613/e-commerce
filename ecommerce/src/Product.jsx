
import React,{useState,useContext, useEffect} from "react";
import { assets } from "./assests/assets";
import useParams from "react-router-dom";
import { ShopContext } from "./context/ShopContext";



const Product=()=> 
{
    const {productId} =  useParams()
    const {products}= useContext(ShopContext)
    const [productData,setProductData] = useState(false)
    const [image,setImage] = useState("")




    const fetchprodata =  async ()=>
    {

      products.map((item)=>{
        if(item._id===productId)
        {
          setProductData(item)
          setImage(item.image[0])
          return null;
        }

      })

    }


    useEffect(()=>{

      fetchprodata();

    },[productId])
    
    return productData ? (<>
     <div className="border p-4 rounded-lg shadow-md">



      {/* <h2 className="text-lg font-semibold">{products.name}</h2>
      <p className="text-gray-600">Price: ${products.price}</p> */}
    </div>

   
    </>) : null

}

export default Product