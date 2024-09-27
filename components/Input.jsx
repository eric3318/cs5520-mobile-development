import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import { useState } from "react";

export default function Input({ shouldFocus, onConfirm, onCancel, isVisible }) {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleConfirm = () => {
    onConfirm(text);
    clearText();
  };

  const handleCancel = () => {
    onCancel();
    clearText();
  };

  const clearText = () => {
    setText("");
  };

  const imageUrl = "https://cdn-icons-png.flaticon.com/512/2617/2617812.png";

  return (
    <Modal animationType="slide" visible={isVisible} transparent>
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <Image src={imageUrl} alt="network image" style={styles.image} />
          <Image
            source={require("../assets/target.png")}
            alt="local image"
            style={styles.image}
          />
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
            <View style={styles.button}>
              <Button title="Cancel" onPress={handleCancel} color="white" />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={handleConfirm}
                color="white"
                disabled={text.length < 3}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    height: "50%",
    marginTop: "25%",
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
    backgroundColor: "indigo",
  },
  image: {
    height: 100,
    width: 100,
  },
});
