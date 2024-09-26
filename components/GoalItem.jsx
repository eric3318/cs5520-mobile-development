import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function GoalItem({ item }) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: "gray",
    borderRadius: 5,
    marginTop: 20,
  },
  text: {
    color: "purple",
    padding: 10,
    fontSize: 20,
  },
});
