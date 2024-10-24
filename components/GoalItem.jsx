import { Alert, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PressableButton from "./PressableButton";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function GoalItem({
  item,
  onDelete,
  onSeparatorHighlight,
  onSeparatorUnHighlight,
}) {
  const navigation = useNavigation();

  const navigateToDetails = () => {
    navigation.navigate("Details", { goal: item });
  };

  const onLongPress = () => {
    Alert.alert("Deleting item...", "Do you really want to delete the item?", [
      {
        text: "OK",
        onPress: deleteItem,
      },
      { text: "Cancel" },
    ]);
  };

  const deleteItem = () => {
    onDelete(item.id);
  };

  return (
    <View style={styles.textContainer}>
      <PressableButton
        pressedFunction={navigateToDetails}
        longPressedFunction={onLongPress}
        onPressIn={onSeparatorHighlight}
        onPressOut={onSeparatorUnHighlight}
        componentStyle={styles.pressable}
        pressedStyle={styles.pressedPressable}
        android_ripple={{ color: "white", radius: 20 }}
      >
        <Text style={styles.text}>{item.text}</Text>
        <PressableButton pressedFunction={deleteItem}>
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
