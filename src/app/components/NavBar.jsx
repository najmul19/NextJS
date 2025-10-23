"use client";
import { Baloo_Bhai_2 , Cabin_Condensed} from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const roboto = Cabin_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"]
})
const NavBar = () => {
  const pathName = usePathname();
  console.log(pathName, pathName.includes("dashboard"));
  if (!pathName.includes("dashboard")) {
    return (
      <div>
        <nav className="flex justify-center">
          <ul className={`flex justify-between w-1/2 ${roboto.className} `}>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/services">
              <li>Services</li>
            </Link>
            <Link href="/products/add">
              <li>Add Products</li>
            </Link>
            <Link href="/products">
              <li>Products</li>
            </Link>
            <Link href="/posts">
              <li>Posts</li>
            </Link>
            <Link href="/meals">
              <li>Meals</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
          </ul>
        </nav>
      </div>
    ); 
  } else {
    return <></>
  }
};

export default NavBar;
