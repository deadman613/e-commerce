

const Title =({text1,text2})=>
{
    return(
    <>
    <div className="text-5xl  py-10 my-20 h-30 flex justify-center ">
        <h2 className=" text-red-700">{text1} <span className="text-black">{text2}</span> </h2>
    </div>

    </>);
}
 export default Title


