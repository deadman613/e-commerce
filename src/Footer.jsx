

const Footer = () => {
    return (
        <>
            <div className="flex flex-col sm:grid  grid-cols-[3fr_1fr] gap-12 mt-20  my-30 mx-20 sm:mx- "  >
                <div>
                    <span className="text-3xl font-bold text-black "><i>E_commerce</i></span>
                    <p className="text-[12px] md:2/3 text-gray-600 pt-8"> Lorem ipsum dolor sit amet consectetur adipisicing elit.  <br /> Quam obcaecati ipsa nobis dolorum ratione nostrum soluta hic ipsum, <br />incidunt et officiis enim ea id corporis vel quos iusto? Magnam, ea?</p>
                </div>

                <div >
                    <h3 className="text-3xl font-bold text-black ">lets Connect</h3>
                    <p className=" text-gray-600 pt-8">+91651161616</p>
                    <p className=" text-gray-600">xyz@gmail.com</p>

                </div>

            </div>

            <div className="flex   justify-center items-center text-gray-600 mx-12 ">
                <p>© Copy-right 2025 E_commerce.com . All Right Reserved </p>

            </div>

        </>
        
    );
}

export default Footer