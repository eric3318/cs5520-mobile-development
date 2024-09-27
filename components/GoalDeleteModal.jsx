import { Button, Modal, StyleSheet, View, Text } from "react-native";

export default function GoalDeleteModal({ isOpen, onConfirm, onCancel }) {
  return (
    <Modal visible={isOpen} transparent>
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <Text>Delete all goals?</Text>
          <View style={styles.buttonContainer}>
            <Button title="yes" onPress={onConfirm} />
            <Button title="no" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#F0F8FF",
    padding: 36,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
