import React from "react";
import Link from "next/link";
const Slidercard = ({name,img,link}) => {
  return (
    <div className="m-12">
    <div class="h-80 bg-gray-100 flex justify-center items-center">
      <div class="w- p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
        <img
          class="w-40 object-cover rounded-full"
          src={img}
          alt=""
        />
        <div class="mt-4">
          <h1 class="text-2xl font-bold text-gray-700">{name}</h1>
          
          <Link href={link}><button class="text-lg block font-semibold py-2 px-6 text-green-100 hover:text-white bg-green-400 rounded-lg shadow hover:shadow-md transition duration-300">
              Browse
            </button></Link>
          {/* <div class="mt-4 mb-2 flex justify-between  pr-2">
            <button class="block text-xl font-semibold text-gray-700 cursor-auto">
              $12.99
            </button>
            <button class="text-lg block font-semibold py-2 px-6 text-green-100 hover:text-white bg-green-400 rounded-lg shadow hover:shadow-md transition duration-300">
              Buy
            </button>
          </div> */}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Slidercard;
