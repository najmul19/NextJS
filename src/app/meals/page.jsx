import { Roboto , Besley } from "next/font/google";
import Link from "next/link";
import MealSearchInput from "./components/MealSearchInput";
import Image from "next/image";

export const metadata = {
  title: "All Meals",
  
  description: "All Meals from meal db API",
};
const roboto = Besley({
  weight: ["400", "700"],
  subsets: ["latin"]
})

const MealsPage = async ({ searchParams }) => {
  const query = await searchParams;
  const fetchMeal = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
      );

      const data = await res.json();
      // setMeals(data?.meals || []);
      return data.meals;
    } catch (e) {
      console.log(e);
      return [];
    }
  };

  const meals = await fetchMeal();

  return (
    <div>
      <div className="flex justify-center">
        <MealSearchInput></MealSearchInput>
      </div>
      <div className=" gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {/* <p>{JSON.stringify(meals)}</p> */}
        {meals?.map((singleMeals) => {
          return (
            <div key={singleMeals?.idMeal} className="bg-teal-100 p-5 text-black rounded-2xl">
              <Image width={641} height={641} src={singleMeals?.strMealThumb} alt={singleMeals?.strMeal} />
              <p className={`${roboto.className} text-2xl font-bold`}>{singleMeals?.strMeal}</p>
              <p>{singleMeals?.strInstructions}</p>
              <Link href={`/meals/${singleMeals.idMeal}`}>
              <button className="bg-amber-200 rounded-2xl px-5 cursor-pointer">Details</button>
              </Link>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default MealsPage;
