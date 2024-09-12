import { View, Text } from "react-native";
import React from "react";

export default function Input() {
  const [text, setText] = useState("");

  return (
    <View>
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
