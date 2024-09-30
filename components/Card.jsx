import { StyleSheet, View } from 'react-native';

export default function Card({ children, style }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    padding: 24,
    rowGap: 30,
    backgroundColor: '#caf0f8',
    borderRadius: 12,
  },
});
