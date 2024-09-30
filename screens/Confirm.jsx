import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import ActionButton from '../components/ActionButton';

export default function Confirm({
  isVisible,
  registerInfo,
  onBack,
  onConfirm,
}) {
  return (
    <Modal visible={isVisible} transparent>
      <View style={styles.outerContainer}>
        <Card>
          <Text style={styles.text}>Hello {registerInfo.name}</Text>
          <Text style={styles.text}>Here is the information you entered:</Text>
          <Text style={styles.text}>{registerInfo.email}</Text>
          <Text style={styles.text}>{registerInfo.number}</Text>
          <View style={styles.buttonContainer}>
            <ActionButton
              title="Go back"
              color="red"
              onPress={onBack}
            ></ActionButton>
            <Button title="Continue" onPress={onConfirm} />
          </View>
        </Card>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 18,
  },
});
