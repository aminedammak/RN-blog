import * as React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "./src/contexts/BlogContext";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import { Feather } from "@expo/vector-icons";
import EditScreen from "./src/screens/EditScreen";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Index"
            component={IndexScreen}
            options={({ navigation, route }) => {
              return {
                title: "Overview",
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Create")}
                  >
                    <Feather name="plus" size={24} color="black" />
                  </TouchableOpacity>
                ),
              };
            }}
          />
          <Stack.Screen
            name="Show"
            component={ShowScreen}
            options={{ title: "Show" }}
          />
          <Stack.Screen
            name="Create"
            component={CreateScreen}
            options={{ title: "Create" }}
          />
          <Stack.Screen
            name="Edit"
            component={EditScreen}
            options={{ title: "Edit" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
