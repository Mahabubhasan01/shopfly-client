import React from "react";
import Link from "next/link";
const Navbar = () => {
  const languages = [
    {
      id: 1,
      name: "English",
    },
    {
      id: 2,
      name: "Spanish",
    },
    {
      id: 3,
      name: "Russian",
    },
    {
      id: 4,
      name: "German",
    },
    {
      id: 5,
      name: "French",
    },
    {
      id: 6,
      name: "Japanese",
    },
    {
      id: 7,
      name: "Chinese",
    },
    {
      id: 8,
      name: "Bengali",
    },
  ];

  const currencies = [
    {
      id: 1,
      name: "USD",
    },
    {
      id: 2,
      name: "EUR",
    },
    {
      id: 3,
      name: "JPY",
    },
    {
      id: 4,
      name: "GBP",
    },
    {
      id: 5,
      name: "AUD",
    },
    {
      id: 6,
      name: "CAD",
    },
    {
      id: 7,
      name: "CNH",
    },
    {
      id: 8,
      name: "NZD",
    },
  ];

  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 1,
      title: "Home",
      url: "/",
    },
  ];
  return (
    <div>
      {/* Heading navbar */}

      <div className="navbar bg-base-100">
        <div className="navbar-start">
          {/* <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div> */}
          <p className=" normal-case text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, quo architecto?</p>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <details>
                <summary>English</summary>
                <ul className="p-2">
                  {languages.map((ln) => (
                    <li key={ln.id}>
                      <a>{ln.name}</a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li>
              <a>|</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>USD</summary>
                <ul className="p-2">
                  {currencies.map((ln) => (
                    <li key={ln.id}>
                      <a>{ln.name}</a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>
      {/* Heading navbar */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
