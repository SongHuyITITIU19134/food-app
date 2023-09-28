import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
function MealItems({
  id,
  pressed,
  title,
  steps,
  imageUrl,
  duration,
  complexity,
  affordability,
  ingredients,
}) {
  const navigation = useNavigation();
  function selectMealItemHandler() {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  }
  return (
    <View>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={selectMealItemHandler}
      >
        <View style={styles.contain}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.text}>Duration: {duration} (min)</Text>
          <Text style={styles.text}>
            {" "}
            Complexity: {complexity.toUpperCase()}
          </Text>
          <Text style={styles.text}>
            {" "}
            Affordability: {affordability.toUpperCase()}
          </Text>
          <View></View>
        </View>
      </Pressable>
    </View>
  );
}
export default MealItems;
const styles = StyleSheet.create({
  contain: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  image: {
    height: 200,
    width: "95%",
    margin: 10,
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
});
