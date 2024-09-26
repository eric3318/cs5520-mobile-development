import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "./components/Header";
import Input from "./components/Input";
import { useState } from "react";
import GoalItem from "./components/GoalItem";

export default function App() {
  const appName = "First Mobile App";
  // const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  const handleInputData = (changedText) => {
    // updateText(changedText);
    const goal = { text: changedText, id: Math.floor(Math.random() * 100) };
    setGoals((prev) => {
      return [goal, ...prev];
    });
    setIsVisible(false);
  };

  /*  const updateText = (changedText) => {
    setText(changedText);
  };*/

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
        <FlatList
          data={goals}
          contentContainerStyle={styles.scrollView}
          renderItem={({ item }) => <GoalItem item={item} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topView: { flex: 1, alignItems: "center", justifyContent: "space-evenly" },
  bottomView: {
    flex: 4,
    backgroundColor: "#dcd",
    width: "100%",
  },
  scrollView: {
    alignItems: "center",
  },
});
