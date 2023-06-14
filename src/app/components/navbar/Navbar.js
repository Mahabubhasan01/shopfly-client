import React from "react";
import Link from "next/link";
const Navbar = () => {
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
        <h1>Hello world</h1>
      <div>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
