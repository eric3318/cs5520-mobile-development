import { Button, Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function GoalItem({ item, onDelete }) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{item.text}</Text>
      <Button title="X" onPress={() => onDelete(item.id)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
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
