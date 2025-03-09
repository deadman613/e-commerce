import { useContext,  } from "react";
import { ShopContext } from "./context/ShopContext";
import { NavLink } from "react-router-dom";



const Productcompo= ({name,id,price,image})=>
{
    const {currency} = useContext(ShopContext);

    return (<>
    
        <NavLink to={`/Product/${id}`}  className="text-black  px-2" >
            <div className="overflow-hidden  scale-90 hover:scale-95 border mr-10 ml:10 rounded-2xl border-[#414141]">
                <img className="rounded-2xl" src={image[0]} alt="" />
            </div>
            <p className="pt-3 pb-1 text-sm">{name}</p>
            <p className="text-sm pr-1.5">{currency}{price}</p>
        
        </NavLink>
        
    

    
    </>);

}
 
export default Productcompo