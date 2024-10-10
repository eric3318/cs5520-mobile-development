import { Pressable, StyleSheet, View } from "react-native";

export default function PressableButton(props) {
  return (
    <Pressable
      onPress={props.pressedFunction}
      style={({ pressed }) => {
        return [
          styles.defaultStyle,
          props.componentStyle,
          pressed & styles.defaultPressedStyle,
          pressed && props.pressedStyle,
        ];
      }}
    >
      {props.children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    backgroundColor: "beige",
  },
  defaultPressedStyle: {
    backgroundColor: "#a4a",
  },
});
