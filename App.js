import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import MealDetail from "./screens/MealDetail";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import FavoriteContextProvider from "./store/context/favorite-contacts";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        sceneContainerStyle: { backgroundColor: "#FBC252" },
        headerStyle: { backgroundColor: "#ffffff" },
        headerTintColor: "#0040ff",
        drawerContentStyle: { backgroundColor: "#0ccfc2" },
        drawerInactiveTintColor: "#92026e",
        drawerActiveTintColor: "#000000",
        drawerActiveBackgroundColor: "#f2caca",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoryScreen}
        options={{
          headerTitle: " All Categories",
        }}
      />
      <Drawer.Screen name="Favorite" component={FavoriteScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <FavoriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverViewScreen"
              component={MealsOverViewScreen}
            />
            <Stack.Screen name="MealDetail" component={MealDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoriteContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  contain: {
    marginTop: 50,
  },
});
