import { View, Text, Button, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

export default function GoalDetails({ navigation, route }) {
  const [isWarning, setIsWarning] = useState(false);

  const onWarningButtonClick = () => {
    setIsWarning((prev) => !prev);
  };

  useEffect(() => {
    navigation.setOptions({
      title: isWarning ? "Warning!" : "Details",
      headerRight: () => (
        <Button title="Warning" onPress={onWarningButtonClick} />
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
    </View>
  );
}

const styles = StyleSheet.create({
  warningText: {
    color: "red",
  },
});
