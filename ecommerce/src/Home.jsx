import React from "react";
import Hero from "./Hero.jsx";
import NewArrival from "./NewArrivals.jsx";
import Bestseller from "./Bestseller.jsx";


function Home() {
    return (
        <>
            <div>
                <Hero/>
                <NewArrival/>
                <Bestseller/>
            </div>
           
        </>
    );
}

export default Home;
