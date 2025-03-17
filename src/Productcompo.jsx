import { useContext,  } from "react";
import { ShopContext } from "./context/ShopContext";
import { NavLink } from "react-router-dom";



const Productcompo= ({name,id,price,image})=>
{
    const {currency} = useContext(ShopContext);

    return (<>
    
        <NavLink to={`/Product/${id}`}  className="text-black  px-2" >
            <div className="sm:overflow-hidden  scale-90 hover:scale-95 border mr-10 sm:ml-0 rounded-2xl border-[#414141]">
                <img className="rounded-2xl h-[200px] w-[200px] sm:h-60 sm:w-70" src={image[0]} alt="" />
             </div>
            <p className="pt-3 pb-1 text-sm sm:ml-4  ">{name}</p>
            <p className="text-sm pr-1.5 sm:ml-4 ">{currency}{price}</p>
        </NavLink>
        
    

    
    </>);

}
 
export default Productcompo