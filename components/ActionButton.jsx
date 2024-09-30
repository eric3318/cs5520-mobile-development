import { Button, StyleSheet, View } from 'react-native';

export default function ActionButton({
  title,
  color = 'white',
  onPress,
  disabled = false,
}) {
  return (
    <View style={styles.button}>
      <Button
        title={title}
        color={color}
        onPress={onPress}
        disabled={disabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    backgroundColor: '#00b4d8',
  },
});
