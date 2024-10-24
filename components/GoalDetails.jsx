import { Button, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import PressableButton from "./PressableButton";
import AntDesign from "@expo/vector-icons/AntDesign";
import GoalUsers from "./GoalUsers";

export default function GoalDetails({ navigation, route }) {
  const [isWarning, setIsWarning] = useState(false);

  const onWarningButtonClick = () => {
    setIsWarning((prev) => !prev);
  };

  useEffect(() => {
    navigation.setOptions({
      title: isWarning ? "Warning!" : "Details",
      headerRight: () => (
        <PressableButton
          pressedFunction={onWarningButtonClick}
          componentStyle={styles.warningIcon}
        >
          <AntDesign name="warning" size={24} />
        </PressableButton>
      ),
    });
  }, [isWarning, navigation]);

  return (
    <View>
      {route.params ? (
        <>
          <Text style={isWarning && styles.warningText}>
            {route.params.goal.text}
          </Text>
        </>
      ) : (
        <Text style={isWarning && styles.warningText}>More details</Text>
      )}
      <Button title="More details" onPress={() => navigation.push("Details")} />
      <GoalUsers goalId={route.params.goal.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  warningText: {
    color: "red",
  },
  warningIcon: {
    backgroundColor: "transparent",
  },
});
