
import React from "react";
  
 const Subscribe=()=>
 {
    const  handlebutton=(e)=>
    {

        e.target.value==="" ? alert("Please Enter a valid value") : "";


    }

    const onSubmithandler=(event)=>
        {
            event.preventDefault();
    
        }
    
    return (
    <>
    <div className="text-center ">
        <div className="text-gray-800 ">
            <p className="mx-12 sm:mr-25"><span className="text-red-600 ">Subscribe</span>  for 20% Off on Shopping</p>
            <form onSubmit={onSubmithandler} action=" " className="mt-5 mb-20 flex flex-col justify-center sm:flex-row sm:mr-30  ">
                <input type="text"  placeholder="Gmail.com..." className="rounded-2xl sm:mt-2.5 placeholder-red-700 ml-20 py-1.5 sm:h-12 px-2 border flex justify-center border-black w-40 sm:w-60  " />
                <button onClick={handlebutton} className="bg-black text-sm text-white mt-2.5 rounded-2xl ml-28 sm:ml-2 sm:text-[20px] py-2.5  px-2.5 hover:bg-gray-500 scale-90 hover:scale-95 cursor-pointer w-[100px]"><i>Subscribe</i></button>
            </form>

        </div>

    </div>
    </>);
 }

 export default Subscribe