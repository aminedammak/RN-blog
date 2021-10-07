import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BlogProvider } from "./src/contexts/BlogContext";
import IndexScreen from "./src/screens/IndexScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Index"
            component={IndexScreen}
            options={{ title: "Overview" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}

export default App;
