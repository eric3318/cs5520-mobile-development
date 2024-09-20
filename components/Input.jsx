import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function Input({
  shouldFocus,
  inputDataHandler,
  onModalClose,
  isVisible,
}) {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleConfirm = () => {
    inputDataHandler(text);
  };

  const handleCancel = () => {
    onModalClose();
  };

  return (
    <Modal animationType="slide" visible={isVisible} transparent>
      <View style={styles.outerContainer}>
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
          <View style={styles.buttonContainer}>
            <View style={[styles.button, styles.cancelButton]}>
              <Button title="Cancel" onPress={handleCancel} color="white" />
            </View>
            <View style={[styles.button, styles.confirmButton]}>
              <Button title="Confirm" onPress={handleConfirm} color="white" />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    height: "25%",
    marginTop: "50%",
    marginHorizontal: 25,
    borderRadius: 20,
    backgroundColor: "#F0F8FF",
  },
  container: {
    flex: 1,
    rowGap: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderColor: "purple",
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    color: "blue",
  },
  buttonContainer: {
    flexDirection: "row",
    columnGap: 5,
  },
  button: {
    width: "25px",
  },
  cancelButton: {
    backgroundColor: "indigo",
  },
  confirmButton: {
    backgroundColor: "gray",
  },
});
