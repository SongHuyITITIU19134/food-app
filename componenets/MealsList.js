import { FlatList, StyleSheet, View } from "react-native";
import MealItems from "./MealItem";

export default function MealsList({ items }) {
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
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItems}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
});
