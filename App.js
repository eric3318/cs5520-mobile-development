import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Input from "./components/Input";
import { useState } from "react";

export default function App() {
  const appName = "First Mobile App";
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleInputData = (changedText) => {
    updateText(changedText);
    setIsVisible(false);
  };

  const updateText = (changedText) => {
    setText(changedText);
  };

  const handleButtonClick = () => {
    setIsVisible(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header appName={appName} />
      <Input
        shouldFocus={true}
        inputDataHandler={handleInputData}
        isVisible={isVisible}
      />
      <Text>{text}</Text>
      <Button title="Add a goal" onPress={handleButtonClick}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
