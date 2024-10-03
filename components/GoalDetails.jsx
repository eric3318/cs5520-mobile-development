import { View, Text, Button } from "react-native";

export default function GoalDetails({ navigation, route }) {
  return (
    <View>
      {route.params ? (
        <>
          <Text>{route.params.id} </Text>
          <Button
            title="More details"
            onPress={() => navigation.navigate("Details")}
          />
        </>
      ) : (
        <Text>More details</Text>
      )}
    </View>
  );
}
