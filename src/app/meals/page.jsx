import Link from "next/link";
import MealSearchInput from "./components/MealSearchInput";

export const metadata = {
  title: "All Meals",
  
  description: "All Meals from meal db API",
};

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
            <div key={singleMeals.idMeal} className="bg-teal-100 p-5 text-black rounded-2xl">
              <p className="text-2xl font-bold">{singleMeals?.strMeal}</p>
              <p>{singleMeals?.strInstructions}</p>
              <Link href={`/meals/${singleMeals.idMeal}`}>
              <button className="bg-amber-200 rounded-2xl px-5">Details</button>
              </Link>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default MealsPage;
