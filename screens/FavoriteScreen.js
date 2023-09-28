import { useContext } from "react";
import MealsList from "../componenets/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoriteContext } from "../store/context/favorite-contacts";

export default function FavoriteScreen() {
  const favoriteMealCtx = useContext(FavoriteContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealCtx.ids.includes(meal.id)
  );

  return <MealsList items={favoriteMeals} />;
}
