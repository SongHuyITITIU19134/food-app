import { FlatList } from "react-native";
import CategoryGridTitle from "../componenets/CategoryGridTitle";
import { CATEGORIES } from "../data/dummy-data";

function CategoryScreen({ navigation }) {
  function renderCategory(itemData) {
    function pressedHandler() {
      navigation.navigate("MealsOverViewScreen", {
        categoryID: itemData.item.id,
      });
    }
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        pressed={pressedHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategory}
      numColumns={2}
    />
  );
}
export default CategoryScreen;
