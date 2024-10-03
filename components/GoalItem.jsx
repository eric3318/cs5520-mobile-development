import { Button, StyleSheet, Text, View } from "react-native";

export default function GoalItem({ item, onDelete, onClick }) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{item.text}</Text>
      <Button title="X" onPress={() => onDelete(item.id)} />
      <Button title="i" onPress={onClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "gray",
    borderRadius: 5,
    marginTop: 10,
  },
  text: {
    color: "purple",
    padding: 10,
    fontSize: 20,
  },
});
