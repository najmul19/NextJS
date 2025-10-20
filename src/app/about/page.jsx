"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const AboutePage = () => {
  const router = useRouter();
  const isLoggedIn = true;
  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };
  return (
    <div>
      <p className="font-bold text-3xl">Aboute Page</p>
      <p>
        <Link href="/about/address">Address Page</Link>
      </p>

      <button type="button" className="cursor-pointer" onClick={handleNavigation}>
        Address Page
      </button>
    </div>
  );
};

export default AboutePage;
