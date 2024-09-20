import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
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

  const cancelButtonHandler = () => {
    setIsVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topView}>
        <Header appName={appName} />
        <Button title="Add a goal" onPress={handleButtonClick}></Button>
      </View>
      <Input
        shouldFocus={true}
        inputDataHandler={handleInputData}
        onModalClose={cancelButtonHandler}
        isVisible={isVisible}
      />
      <View style={styles.bottomView}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    color: "purple",
    marginVertical: 5,
  },
  topView: { flex: 1, alignItems: "center", justifyContent: "space-evenly" },
  bottomView: {
    flex: 4,
    backgroundColor: "#dcd",
    alignItems: "center",
    width: "100%",
  },
});
