import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Header from "./components/Header";

export default function App() {
  const appName = "First Mobile App";
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header appName={appName} />
      <TextInput
        value={text}
        onChangeText={(inputText) => {
          setText(inputText);
        }}
      />
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
