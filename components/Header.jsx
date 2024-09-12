import { View, Text } from "react-native";

export default function Header({ appName }) {
  return (
    <View>
      <Text>Welcome to {appName}</Text>
    </View>
  );
}
