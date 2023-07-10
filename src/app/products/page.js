"use client";
import React, { useState } from "react";
import "../styles/allproducts.css";
import { MdGridView, MdViewCompact } from "react-icons/md";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

const Productss = async () => {
  const [productGrid, setPrductGrid] = useState(
    "grid grid-cols-2 gap-6 sm:grid-cols-4"
  );
  const [currentPage, setCurrentPage] = useState(1);
  /* fetch data */
  async function getData() {
    const res = await fetch("http://localhost:5000/api/items");
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }
  /* fetch data */
  const setGrid = async (grid) => {
    setPrductGrid(grid);
  };
  /* Paginations */
  const itemsPerPage = 40;
  const products = await getData();
  const length = products.length;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products?.length / itemsPerPage);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log(pageNumber, "cliecked");
  };

  /* Paginations */
  return (
    <div>
      <div class="container">
        <div class="shop">
          <div class="shop__filters-top">
            <div class="filter">
              <div class="filter__category">Сategory:</div>
              <div class="filter__rule">
                <input
                  id="filter__input-1"
                  type="radio"
                  name="filters-top"
                  class="filter__rule-input"
                  data-filter="price"
                  data-interaction="increase"
                  /* checked */
                />
                <label for="filter__input-1" class="filter__rule-label">
                  Fruits
                </label>
              </div>
              <div class="filter__rule">
                <input
                  id="filter__input-2"
                  type="radio"
                  name="filters-top"
                  class="filter__rule-input"
                  data-filter="price"
                  data-interaction="decrease"
                />
                <label for="filter__input-2" class="filter__rule-label">
                  Vegetables
                </label>
              </div>
              <div class="filter__rule">
                <input
                  id="filter__input-3"
                  type="radio"
                  name="filters-top"
                  class="filter__rule-input"
                  data-filter="popular"
                  data-interaction="increase"
                />
                <label for="filter__input-3" class="filter__rule-label">
                  Raw
                </label>
              </div>
            </div>
          </div>
          <div class="shop__filters-left">
            <div class="filter">
              <div class="filter__category">Categories</div>
              <div class="filter__range">
                <input
                  type="number"
                  class="filter__range-input filter__range-from"
                  placeholder="від"
                />
                <input
                  type="number"
                  class="filter__range-input filter__range-to"
                  placeholder="до"
                />
                (грн.)
              </div>
            </div>
            <div class="filter">
              <div class="filter__category">Categories</div>
              <div class="filter__rule">
                <input
                  id="filter__input-4"
                  type="checkbox"
                  class="filter__rule-input"
                  data-filter="Міжкімнатні"
                />
                <label for="filter__input-4" class="filter__rule-label">
                  Fruites
                </label>
              </div>
              <div class="filter__rule">
                <input
                  id="filter__input-5"
                  type="checkbox"
                  class="filter__rule-input"
                  data-filter="Розпашні"
                />
                <label for="filter__input-5" class="filter__rule-label">
                  Vegetables
                </label>
              </div>
              <div class="filter__rule">
                <input
                  id="filter__input-6"
                  type="checkbox"
                  class="filter__rule-input"
                  data-filter="Розсувні"
                />
                <label for="filter__input-6" class="filter__rule-label">
                  Raw
                </label>
              </div>
              <div class="filter__rule">
                <input
                  id="filter__input-7"
                  type="checkbox"
                  class="filter__rule-input"
                  data-filter="Розкладні"
                />
                <label for="filter__input-7" class="filter__rule-label">
                  Man
                </label>
              </div>
              <div class="filter__rule">
                <input
                  id="filter__input-8"
                  type="checkbox"
                  class="filter__rule-input"
                  data-filter="Одностворчасті"
                />
                <label for="filter__input-8" class="filter__rule-label">
                  Woman
                </label>
              </div>
            </div>
            <div class="filter">
              <div class="filter__category">Prices</div>
              <div class="filter__rule">
                <input
                  id="filter__input-9"
                  type="checkbox"
                  class="filter__rule-input"
                  data-filter="Хіт"
                />
                <label for="filter__input-9" class="filter__rule-label">
                  High
                </label>
              </div>
              <div class="filter__rule">
                <input
                  id="filter__input-10"
                  type="checkbox"
                  class="filter__rule-input"
                  data-filter="Знижка"
                />
                <label for="filter__input-10" class="filter__rule-label">
                  Low
                </label>
              </div>
            </div>
            <div class="filter">
              <div class="filter__category">New Arrival</div>
              <div class="filter__rule">
                <input
                  id="filter__input-11"
                  type="checkbox"
                  class="filter__rule-input"
                  data-filter="Дерево"
                />
                <label for="filter__input-11" class="filter__rule-label">
                  Life styles
                </label>
              </div>
              <div class="filter__rule">
                <input
                  id="filter__input-12"
                  type="checkbox"
                  class="filter__rule-input"
                  data-filter="Метал"
                />
                <label for="filter__input-12" class="filter__rule-label">
                  Goods
                </label>
              </div>
              <div class="filter__rule">
                <input
                  id="filter__input-13"
                  type="checkbox"
                  class="filter__rule-input"
                  data-filter="Скло"
                />
                <label for="filter__input-13" class="filter__rule-label">
                  Fashion
                </label>
              </div>
            </div>
            <div class="filter">
              <div class="filter__category">Best Sales</div>
              <div class="filter__rule">
                <input
                  id="filter__input-14"
                  type="checkbox"
                  class="filter__rule-input"
                  data-filter="Одностороннє"
                />
                <label for="filter__input-14" class="filter__rule-label">
                  Goods
                </label>
              </div>
              <div class="filter__rule">
                <input
                  id="filter__input-15"
                  type="checkbox"
                  class="filter__rule-input"
                  data-filter="Двостороннє"
                />
                <label for="filter__input-15" class="filter__rule-label">
                  Lifes
                </label>
              </div>
            </div>
            <div class="filter">
              <div class="filter__category">Тип захисту</div>
              <div class="filter__rule">
                <input
                  id="filter__input-16"
                  type="checkbox"
                  class="filter__rule-input"
                  data-filter="Клас 1"
                />
                <label for="filter__input-16" class="filter__rule-label">
                  Клас 1
                </label>
              </div>
              <div class="filter__rule">
                <input
                  id="filter__input-17"
                  type="checkbox"
                  class="filter__rule-input"
                  data-filter="Клас 2"
                />
                <label for="filter__input-17" class="filter__rule-label">
                  Клас 2
                </label>
              </div>
              <div class="filter__rule">
                <input
                  id="filter__input-18"
                  type="checkbox"
                  class="filter__rule-input"
                  data-filter="Клас 3"
                />
                <label for="filter__input-18" class="filter__rule-label">
                  Клас 3
                </label>
              </div>
              <div class="filter__rule">
                <input
                  id="filter__input-19"
                  type="checkbox"
                  class="filter__rule-input"
                  data-filter="Клас 4"
                />
                <label for="filter__input-19" class="filter__rule-label">
                  Клас 4
                </label>
              </div>
            </div>

            <div class="filter">
              <div class="filter__category">Products Sizes</div>
              <div class="filter__rule">
                <input
                  id="filter__input-20"
                  type="checkbox"
                  class="filter__rule-input"
                  data-filter="100 см"
                />
                <label for="filter__input-20" class="filter__rule-label">
                  100 см
                </label>
              </div>
              <div class="filter__rule">
                <input
                  id="filter__input-21"
                  type="checkbox"
                  class="filter__rule-input"
                  data-filter="150 см"
                />
                <label for="filter__input-21" class="filter__rule-label">
                  150 см
                </label>
              </div>
              <div class="filter__rule">
                <input
                  id="filter__input-22"
                  type="checkbox"
                  class="filter__rule-input"
                  data-filter="200 см"
                />
                <label for="filter__input-22" class="filter__rule-label">
                  200 см
                </label>
              </div>
              <div class="filter__rule">
                <input
                  id="filter__input-23"
                  type="checkbox"
                  class="filter__rule-input"
                  data-filter="250 см"
                />
                <label for="filter__input-23" class="filter__rule-label">
                  250 см
                </label>
              </div>
            </div>
          </div>
          <div class="shop__cards">
            <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
              <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-serif text-2xl font-bold sm:text-3xl"></h2>
                  <div className="btn-group">
                    <div className="join join-vertical lg:join-horizontal ">
                      <button className="m-2 ">View:</button>
                      <button
                        className="m-2 text-4xl "
                        onClick={() =>
                          setGrid("grid grid-cols-2 gap-6 sm:grid-cols-2")
                        }
                      >
                        <MdGridView />
                      </button>
                      <button className="text-5xl ">
                        <MdViewCompact
                          onClick={() =>
                            setGrid("grid grid-cols-2 gap-6 sm:grid-cols-4")
                          }
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className={`mt-10  ${productGrid} sm:gap-4 lg:mt-16`}>
                  {currentItems?.map((d) => (
                    <article
                      key={d.id} // Add a unique key for each item
                      className="relative flex flex-col overflow-hidden rounded-lg border"
                    >
                      <div className="aspect-square overflow-hidden">
                        <img
                          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                          src={d.image}
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
                        <h3 className="mb-2 text-sm text-gray-400">{d.name}</h3>
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
              <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                <div className="flex flex-1 justify-between sm:hidden">
                  <a
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Previous
                  </a>
                  <a
                    disabled={currentPage === totalPages}
                    onClick={() => onPageChange(currentPage + 1)}
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Next
                  </a>
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      Showing <span className="font-medium">{currentPage}</span>{" "}
                      to{" "}
                      <span className="font-medium">
                        {" "}
                        {currentPage * itemsPerPage}
                      </span>{" "}
                      of <span className="font-medium">{length}</span> results
                    </p>
                  </div>
                  <div>
                    <nav
                      className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                      aria-label="Pagination"
                    >
                      <button
                        disabled={currentPage === 1}
                        onClick={() => onPageChange(currentPage - 1)}
                        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      >
                        <span className="sr-only">Previous</span>
                        <BiChevronLeft className="h-5 w-5" aria-hidden="true" />
                      </button>
                      {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                          key={index + 1}
                          onClick={() => onPageChange(index + 1)}
                          className={`relative ${
                            currentPage === index + 1
                              ? "z-10 bg-indigo-600 text-white"
                              : "text-gray-900"
                          } inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
                        >
                          {index + 1}
                        </button>
                      ))}

                      <button
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      >
                        <span className="sr-only">Next</span>
                        <BiChevronRight
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productss;
