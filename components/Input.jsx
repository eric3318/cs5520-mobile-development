import {Text, TextInput, View} from "react-native";
import {useState} from "react"

export default function Input({shouldFocus}) {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false)

  return (
      <View>
        <TextInput
            style={{height: 40}}
            placeholder="Input goes here"
            value={text}
            onChangeText={(inputText) => {
              setText(inputText);
            }}
            autoFocus={shouldFocus}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false)
            }}
        />
        {isFocused &&
            text.length > 0 &&
            <Text>Character count: {text.length}</Text>}
      </View>
  );
}
