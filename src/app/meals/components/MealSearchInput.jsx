"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";


const MealSearchInput = () => {
  //   const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathName = usePathname();
  useEffect(() => {
    // fetchMeal();
    const searchQuery = { search };
    const urlQueryParams = new URLSearchParams(searchQuery);
    const url = `${pathName}?${urlQueryParams}`;
    router.push(url)
  }, [search]);

  return (
    <div>
      <input
        className="bg-teal-100 m-5  rounded-2xl p-2 text-black"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </div>
  );
};

export default MealSearchInput;
