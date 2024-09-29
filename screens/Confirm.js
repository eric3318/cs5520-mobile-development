import { Button, Modal, StyleSheet, View, Text } from 'react-native';

export default function Confirm({ isVisible, registerInfo }) {
  return (
    <Modal visible={isVisible}>
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <Text>Hello {registerInfo.name}</Text>
          <Text>Here is the information you entered:</Text>
          <Text>{registerInfo.email}</Text>
          <Text>{registerInfo.number}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Go back" />
            <Button title="Continue" />
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
    padding: 36,
    borderWidth: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
