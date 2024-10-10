import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function GoalItem({ item, onDelete }) {
  const navigation = useNavigation();

  const navigateToDetails = () => {
    navigation.navigate("Details", { goal: item });
  };

  return (
    <View style={styles.textContainer}>
      <Pressable
        onPress={navigateToDetails}
        style={styles.pressable}
        android_ripple={{ color: "white", radius: 20 }}
      >
        <Text style={styles.text}>{item.text}</Text>
        <Button title="X" onPress={() => onDelete(item.id)} />
      </Pressable>
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
  pressable: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "purple",
    padding: 10,
    fontSize: 20,
  },
});
