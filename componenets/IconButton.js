import { FontAwesome } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";
function IconButton({ icon, color, pressed }) {
  return (
    <Pressable
      onPress={pressed}
      style={({ buttionPressed }) => buttionPressed && styles.buttionPressed}
    >
      <FontAwesome name={icon} size={24} color={color} />
    </Pressable>
  );
}
export default IconButton;

const styles = StyleSheet.create({
  buttionPressed: {
    opacity: 0.6,
  },
});
