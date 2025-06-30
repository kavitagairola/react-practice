import React from "react";
import Header from "../Header";

function Furnituree() {
  return (
    <>
    <div
      className="relative h-[30vh] w-screen bg-cover bg-center ml-[calc(-50vw+49.4%)] mr-[calc(-50vw+49.4%)] flex items-center justify-center text-center"
      style={{
        backgroundImage:
          "url('https://avon-demo.myshopify.com/cdn/shop/collections/collection-page-banner-2_1512x.jpg?v=1552641861')",
      }}
    >
     
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

   
      <div className="relative z-10 text-white">
        <h2 className="text-3xl md:text-5xl font-bold">Furniture</h2>
        <p className="mt-4 text-lg md:text-xl">
          Working to expand your business one pixel at a time
        </p>
      </div>
    </div>
    <div className="ps-8 bg-red-50 relative h-[6vh] w-screen bg-cover bg-center ml-[calc(-50vw+49.4%)] mr-[calc(-50vw+49.4%)] flex items-center text-center ">
        <ul  className="flex gap-3">
            <li>Home </li>
            <li>| </li>
            <li >Furniture</li>
        </ul>
    </div>
    </>
  );
}

export default Furnituree;
