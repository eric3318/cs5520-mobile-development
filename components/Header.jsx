import { StyleSheet, Text, View } from "react-native";

export default function Header({ appName }) {
  return (
    <View>
      <Text style={styles.textStyle}>Welcome to {appName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    color: "purple",
    fontSize: 25,
    borderColor: "purple",
    borderWidth: 2,
    padding: 5,
    marginBottom: 10,
  },
});
