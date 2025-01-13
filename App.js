import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; // Correct import
import WelcomeScreen from "./screens/WelcomeScreen";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import Screen4 from "./screens/Screen4"; // Import Screen4

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Breakfast" component={Screen2} />
        <Stack.Screen name="JunkFood" component={Screen3} />
        <Stack.Screen name="OnTime" component={Screen4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
