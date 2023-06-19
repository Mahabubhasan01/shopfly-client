import React from "react";
import "./filteredProducts.css";
const products = [
  { id: 1, name: "Product 1", category: "Category A" },
  { id: 2, name: "Product 2", category: "Category B" },
  { id: 3, name: "Product 3", category: "Category A" },
  { id: 4, name: "Product 4", category: "Category C" },
];
const FilteredProducts = ({category}) => {
  // Filter the products array to get only products with the specified category
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <div>
      <section class="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div class=" flex justify-between items-center ">
            <h2 class="font-serif text-2xl font-bold sm:text-3xl">
              Fresh Fruits & Vegetables
            </h2>
            <div className="btn-group">
              <div className="join join-vertical lg:join-horizontal">
                <button className="btn join-item">{category}</button>
                <button className="btn join-item">All</button>
                <button className="btn join-item">Button</button>
                <button className="btn join-item">Button</button>
              </div>
            </div>
          </div>

          <div class="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
            <article class="relative flex flex-col overflow-hidden rounded-lg border">
              <div class="aspect-square overflow-hidden">
                <img
                  class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                  src="/images/neZnfwBHi0f-4TivjA6BS.png"
                  alt=""
                />
              </div>
              <div class="absolute top-0 m-2 rounded-full bg-white">
                <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                  Sale
                </p>
              </div>
              <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div class="mb-2 flex">
                  <p class="mr-3 text-sm font-semibold">$99.00</p>
                  <del class="text-xs text-gray-400"> $79.00 </del>
                </div>
                <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
              </div>
              <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                  Add
                </div>
                <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                  +
                </div>
              </button>
            </article>

            <article class="relative flex flex-col overflow-hidden rounded-lg border">
              <div class="aspect-square overflow-hidden">
                <img
                  class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                  src="/images/exH8iOZwkjQekSALkXCZb.png"
                  alt=""
                />
              </div>
              <div class="absolute top-0 m-2 rounded-full bg-white">
                <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                  Sale
                </p>
              </div>
              <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div class="mb-2 flex">
                  <p class="mr-3 text-sm font-semibold">$99.00</p>
                  <del class="text-xs text-gray-400"> $79.00 </del>
                </div>
                <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
              </div>
              <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                  Add
                </div>
                <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                  +
                </div>
              </button>
            </article>

            <article class="relative flex flex-col overflow-hidden rounded-lg border">
              <div class="aspect-square overflow-hidden">
                <img
                  class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                  src="/images/86WxAQqZpR5CqrhSPKwNv.png"
                  alt=""
                />
              </div>

              <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div class="mb-2 flex">
                  <p class="mr-3 text-sm font-semibold">$99.00</p>
                  <del class="text-xs text-gray-400"> $79.00 </del>
                </div>
                <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
              </div>
              <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                  Add
                </div>
                <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                  +
                </div>
              </button>
            </article>

            <article class="relative flex flex-col overflow-hidden rounded-lg border">
              <div class="aspect-square overflow-hidden">
                <img
                  class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                  src="/images/0RV9Zy3daoeMbDmTOOMKm.png"
                  alt=""
                />
              </div>

              <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div class="mb-2 flex">
                  <p class="mr-3 text-sm font-semibold">$99.00</p>
                  <del class="text-xs text-gray-400"> $79.00 </del>
                </div>
                <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
              </div>
              <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                  Add
                </div>
                <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                  +
                </div>
              </button>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FilteredProducts;
