import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Header from "./components/Header";
import Input from "./components/Input";
import { useState } from "react";

export default function App() {
  const appName = "First Mobile App";
  const [text, setText] = useState("");

  const handleInputData = (text) => {
    updateText(text);
  };

  const updateText = (changedText) => {
    setText(changedText);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header appName={appName} />
      <Input shouldFocus={true} inputDataHandler={handleInputData} />
      <Text>{text}</Text>
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
