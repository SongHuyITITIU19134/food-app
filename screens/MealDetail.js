import { useContext, useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import IconButton from "../componenets/IconButton";
import { MEALS } from "../data/dummy-data";
import { FavoriteContext } from "../store/context/favorite-contacts";

function MealDetails({ route, navigation }) {
  const favoriteMealCtx = useContext(FavoriteContext);
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealIsFavorite = favoriteMealCtx.ids.includes(mealId);

  function changeFavoriteStatusHandle() {
    if (mealIsFavorite) {
      favoriteMealCtx.removeFavorite(mealId);
    } else {
      favoriteMealCtx.addFavorite(mealId);
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-o"}
            color="black"
            pressed={changeFavoriteStatusHandle}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandle]);

  return (
    <ScrollView style={styles.contain}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.titleText}>{selectedMeal.title}</Text>
      <Text style={styles.bold}>INGREDIENTS:</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <Text style={styles.text} key={ingredient}>
          {ingredient}
        </Text>
      ))}
      <Text style={styles.bold}>STEPS:</Text>
      {selectedMeal.steps.map((step) => (
        <Text style={styles.text} key={step}>
          {step}
        </Text>
      ))}
      <View></View>
    </ScrollView>
  );
}

export default MealDetails;
const styles = StyleSheet.create({
  contain: {
    marginBottom: 32,
    flex: 1,
    margin: 16,
    borderRadius: 8,
  },
  image: {
    height: 350,
    width: "100%",
    borderRadius: 5,
  },
  titleText: {
    fontSize: 27,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 10,
    textAlign: " center",
  },
  text: {
    fontSize: 19,
    marginLeft: 10,
    marginBottom: 5,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  button: {
    flex: 1,
  },
  bold: {
    fontSize: 21,
    fontWeight: "bold",
  },
});
