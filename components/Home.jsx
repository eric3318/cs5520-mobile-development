import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from ".//Header";
import Input from "./Input";
import { useState, useEffect } from "react";
import GoalItem from "./GoalItem";
import { writeToDB } from "../firebase/firestoreHelper";
import { collection, onSnapshot } from "firebase/firestore";
import { database } from "../firebase/firebaseSetup";

export default function Home({ navigation }) {
  const appName = "First Mobile App";
  /*  const [text, setText] = useState("");*/
  const [isVisible, setIsVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    onSnapshot(collection(database, "goals"), (querySnapshot) => {
      let newArray = [];
      querySnapshot.forEach((docSnapshot) => {
        newArray.push({ ...docSnapshot.data() });
      });
      setGoals(newArray);
    });
  }, []);

  const handleInputData = async (changedText) => {
    /*    updateText(changedText);*/
    /*    let goal = { text: changedText, id: Math.floor(Math.random() * 100) };
    setGoals((prev) => {
      return [goal, ...prev];
    });*/
    await writeToDB({ text: changedText }, "goals");
    setIsVisible(false);
  };

  const handleDelete = (id) => {
    setGoals((prev) => prev.filter((item) => item.id !== id));
  };

  /*  const updateText = (changedText) => {
    setText(changedText);
  };*/

  const confirmButtonHandler = () => {
    setIsVisible(true);
  };

  const cancelButtonHandler = () => {
    setIsVisible(false);
  };

  const showAlert = () => {
    Alert.alert("Deleting goals..,", "Do you wish to continue?", [
      {
        text: "yes",
        onPress: clearGoals,
      },
      {
        text: "no",
      },
    ]);
  };

  const clearGoals = () => {
    setGoals([]);
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
              <Button title="Delete All" onPress={showAlert} />
            )
          }
          ItemSeparatorComponent={({ highlighted }) => (
            <View
              style={[
                styles.separator,
                highlighted && styles.highlightedSeparator,
              ]}
            />
          )}
          data={goals}
          contentContainerStyle={styles.scrollView}
          renderItem={({ item, separators }) => (
            <GoalItem
              item={item}
              onDelete={handleDelete}
              onSeparatorHighlight={separators.highlight}
              onSeparatorUnHighlight={separators.unhighlight}
            />
          )}
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
  emptyListText: {
    fontSize: 20,
    fontWeight: 500,
  },
  listHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  separator: {
    height: 1,
    borderWidth: 2,
    marginTop: 10,
    borderColor: "gray",
  },
  highlightedSeparator: {
    borderColor: "purple",
  },
});
