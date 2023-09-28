import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItems from "../componenets/MealItem";
import MealsList from "../componenets/MealsList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

function MealsOverViewScreen({ route, navigation }) {
  const cateId = route.params.categoryID;
  const displayMeals = MEALS.filter((mealItem) => {
    // Using this function for filtering the meal items and
    //if the category was not find, it will be not displayed
    return mealItem.categoryIds.indexOf(cateId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === cateId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [cateId, navigation]);
  return <MealsList items={displayMeals} />;

  function renderMealItems(itemData) {
    const items = itemData.item;
    const MealItemData = {
      id: items.id,
      title: items.title,
      steps: items.steps,
      imageUrl: items.imageUrl,
      duration: items.duration,
      complexity: items.complexity,
      affordability: items.affordability,
    };
    return <MealItems {...MealItemData} />;
  }
  return (
    <View style={styles.contain}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItems}
      />
    </View>
  );
}
export default MealsOverViewScreen;
const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
});
