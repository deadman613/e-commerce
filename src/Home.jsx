import React from "react";
import Hero from "./Hero.jsx";
import NewArrival from "./NewArrivals.jsx";
import Bestseller from "./Bestseller.jsx";
import Policyofproduct from "./Policyofproduct.jsx";
import Subscribe from "./Subscribe.jsx";
import Footer from "./Footer.jsx";




function Home() {
    return (
        <>
            <div>
                <Hero/>
                <NewArrival/>
                <Bestseller/>
                <Policyofproduct/>
                <Subscribe/>
                <Footer/>
                

                
                
            </div>
           
        </>
    );
}

export default Home;
