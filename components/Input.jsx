import { Modal, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { Button } from "react-native";

export default function Input({ shouldFocus, inputDataHandler, isVisible }) {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleConfirm = () => {
    console.log(text);
    inputDataHandler(text);
  };

  return (
    <Modal animationType="slide" visible={isVisible}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Input goes here"
          value={text}
          onChangeText={(inputText) => {
            setText(inputText);
          }}
          autoFocus={shouldFocus}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
          }}
        />
        {isFocused && text.length > 0 && (
          <Text>Character count: {text.length}</Text>
        )}
        {!isFocused && (
          <Text>
            {text.length >= 3
              ? "Thank you"
              : "Please type more than 3 characters"}
          </Text>
        )}
        <View style={styles.button}>
          <Button title="Confirm" onPress={handleConfirm} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    margin: 10,
  },
  input: {
    borderColor: "purple",
    borderWidth: 1,
    height: 50,
  },
  button: {
    width: "30%",
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: "10px",
  },
});
