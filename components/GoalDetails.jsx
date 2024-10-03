import { View, Text } from "react-native";

export default function GoalDetails({ route }) {
  const { id, text } = route.params;
  return (
    <View>
      <Text>{id} </Text>
      <Text>{text}</Text>
    </View>
  );
}
