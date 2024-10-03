import { View, Text, Button } from "react-native";

export default function GoalDetails({ navigation, route }) {
  return (
    <View>
      {route.params ? (
        <>
          <Text>{route.params.goal.id} </Text>
        </>
      ) : (
        <Text>More details</Text>
      )}
      <Button title="More details" onPress={() => navigation.push("Details")} />
    </View>
  );
}
