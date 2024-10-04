import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function GoalItem({ item, onDelete }) {
  const navigation = useNavigation();

  const navigateToDetails = () => {
    navigation.navigate("Details", { goal: item });
  };

  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{item.text}</Text>
      <Button title="X" onPress={() => onDelete(item.id)} />
      <Button title="i" onPress={navigateToDetails} />
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
