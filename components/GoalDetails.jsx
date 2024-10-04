import { View, Text, Button } from "react-native";
import { useEffect } from "react";

export default function GoalDetails({ navigation, route }) {
  useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => <Button title="Warning" />,
    });
  }, [navigation]);

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
