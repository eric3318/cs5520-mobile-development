import Home from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetails from "./components/GoalDetails";
import { Button } from "react-native";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            headerStyle: { backgroundColor: "purple" },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="Details"
          component={GoalDetails}
          options={({ route }) => {
            return {
              title: route.params ? route.params.goal.text : "Details",
              headerStyle: { backgroundColor: "purple" },
              headerTintColor: "white",
              headerRight: () => <Button title="Warning" />,
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
