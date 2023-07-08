"use client";
import React, { useEffect, useState } from "react";
import "../components/FilterProducts/filteredProducts.css";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/items");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setData(jsonData);
      setFilteredData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredData(data);
    } else {
      const filteredItems = data.filter(
        (product) => product.category === category
      );
      setFilteredData(filteredItems);
    }
  };

  return (
    <div>
      <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              All products
            </h2>
            <div className="btn-group">
              <div className="join join-vertical lg:join-horizontal">
                <button
                  className={`btn join-item ${
                    selectedCategory === "All" ? "selected" : ""
                  }`}
                  onClick={() => handleCategoryFilter("All")}
                >
                  All
                </button>
                <button
                  className={`btn join-item ${
                    selectedCategory === "Button" ? "selected" : ""
                  }`}
                  onClick={() => handleCategoryFilter("Button")}
                >
                  Button
                </button>
                <button
                  className={`btn join-item ${
                    selectedCategory === "Other" ? "selected" : ""
                  }`}
                  onClick={() => handleCategoryFilter("Other")}
                >
                  Other
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
            {filteredData.map((product) => (
              <article
                key={product.id}
                className="relative flex flex-col overflow-hidden rounded-lg border"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                    src={product.image}
                    alt=""
                  />
                </div>
                <div className="absolute top-0 m-2 rounded-full bg-white flex justify-between">
                  <p className="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                    Sale
                  </p>
                  <p className="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                    Sale
                  </p>
                </div>
                <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                  <div className="mb-2 flex">
                    <p className="mr-3 text-sm font-semibold">$99.00</p>
                    <del className="text-xs text-gray-400"> $79.00 </del>
                  </div>
                  <h3 className="mb-2 text-sm text-gray-400">{product.name}</h3>
                </div>
                <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                  <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                    Add
                  </div>
                  <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                    +
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProducts;
