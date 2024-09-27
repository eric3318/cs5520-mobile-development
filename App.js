import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  Modal,
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
import GoalDeleteModal from "./components/GoalDeleteModal";

export default function App() {
  const appName = "First Mobile App";
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [goals, setGoals] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleInputData = (changedText) => {
    updateText(changedText);
    let goal = { text: changedText, id: Math.floor(Math.random() * 100) };
    setGoals((prev) => {
      return [goal, ...prev];
    });
    setIsVisible(false);
  };

  const handleDelete = (id) => {
    setGoals((prev) => prev.filter((item) => item.id !== id));
  };

  const updateText = (changedText) => {
    setText(changedText);
  };

  const confirmButtonHandler = () => {
    setIsVisible(true);
  };

  const cancelButtonHandler = () => {
    setIsVisible(false);
  };

  const modalOpenHandler = () => {
    setIsDeleteModalOpen(true);
  };

  const modalCloseHandler = () => {
    setIsDeleteModalOpen(false);
  };

  const clearGoals = () => {
    setGoals([]);
    modalCloseHandler();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topView}>
        <Header appName={appName} />
        <Button title="Add a goal" onPress={confirmButtonHandler}></Button>
      </View>
      <Input
        shouldFocus={true}
        onConfirm={handleInputData}
        onCancel={cancelButtonHandler}
        isVisible={isVisible}
      />
      <View style={styles.bottomView}>
        <FlatList
          ListEmptyComponent={
            <Text style={styles.emptyListText}>No goals to show</Text>
          }
          ListHeaderComponent={
            goals.length > 0 && (
              <Text style={styles.listHeaderText}>My goals</Text>
            )
          }
          ListFooterComponent={
            goals.length > 0 && (
              <Button title="Delete All" onPress={modalOpenHandler} />
            )
          }
          data={goals}
          contentContainerStyle={styles.scrollView}
          renderItem={({ item }) => (
            <GoalItem item={item} onDelete={handleDelete} />
          )}
        />
      </View>
      <GoalDeleteModal
        isOpen={isDeleteModalOpen}
        onConfirm={() => clearGoals()}
        onCancel={modalCloseHandler}
      />
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
  emptyListText: {
    fontSize: 20,
    fontWeight: 500,
  },
  listHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});
