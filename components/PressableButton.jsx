import { Pressable, StyleSheet, View } from "react-native";

export default function PressableButton({
  pressedFunction,
  longPressedFunction,
  componentStyle,
  pressedStyle,
  children,
  ...props
}) {
  return (
    <Pressable
      onPress={pressedFunction}
      onLongPress={longPressedFunction}
      style={({ pressed }) => {
        return [
          styles.defaultStyle,
          componentStyle,
          pressed & styles.defaultPressedStyle,
          pressed && pressedStyle,
        ];
      }}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    backgroundColor: "beige",
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  defaultPressedStyle: {
    backgroundColor: "#a4a",
  },
});
