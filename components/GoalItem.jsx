import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PressableButton from "./PressableButton";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function GoalItem({ item, onDelete }) {
  const navigation = useNavigation();

  const navigateToDetails = () => {
    navigation.navigate("Details", { goal: item });
  };

  return (
    <View style={styles.textContainer}>
      <PressableButton
        pressedFunction={navigateToDetails}
        componentStyle={styles.pressable}
        pressedStyle={styles.pressedPressable}
        android_ripple={{ color: "white", radius: 20 }}
      >
        <Text style={styles.text}>{item.text}</Text>
        <PressableButton pressedFunction={() => onDelete(item.id)}>
          <AntDesign name="delete" size={22} />
        </PressableButton>
      </PressableButton>
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
  pressedPressable: {
    backgroundColor: "aqua",
  },
  text: {
    color: "purple",
    padding: 10,
    fontSize: 20,
  },
});
