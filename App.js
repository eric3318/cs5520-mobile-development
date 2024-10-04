import Home from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetails from "./components/GoalDetails";
import { Button } from "react-native";
const Stack = createNativeStackNavigator();

const defaultScreenOptions = {
  headerStyle: { backgroundColor: "purple" },
  headerTintColor: "white",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultScreenOptions}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
          }}
        />
        <Stack.Screen
          name="Details"
          component={GoalDetails}
          options={({ route }) => ({
            title: route.params ? route.params.goal.text : "Details",
            headerRight: () => <Button title="Warning" />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
