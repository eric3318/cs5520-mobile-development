import { Button, Modal, StyleSheet, View, Text } from 'react-native';

export default function Confirm({
  isVisible,
  registerInfo,
  onBack,
  onConfirm,
}) {
  return (
    <Modal visible={isVisible}>
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <Text style={styles.text}>Hello {registerInfo.name}</Text>
          <Text style={styles.text}>Here is the information you entered:</Text>
          <Text style={styles.text}>{registerInfo.email}</Text>
          <Text style={styles.text}>{registerInfo.number}</Text>
          <View style={styles.buttonContainer}>
            <View>
              <Button title="Go back" color="red" onPress={onBack} />
            </View>
            <Button title="Continue" onPress={onConfirm} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    rowGap: 6,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 18,
  },
});
