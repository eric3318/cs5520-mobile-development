import { View, Text, StyleSheet, Button } from 'react-native';
import { useState } from 'react';

export default function Game({ lastDigit, onRestart }) {
  const [started, setStarted] = useState(false);

  const start = () => {
    setStarted(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.restartButton}>
          <Button title="RESTART" color="white" onPress={onRestart} />
        </View>
        <View style={styles.gameContainer}>
          <Text style={styles.text}>Guess a number between 1 & 100</Text>
          <Text style={styles.text}>that is a multiply of {lastDigit}</Text>
          <Text style={styles.text}>in 60 seconds and 4 attempts</Text>
          {!started && (
            <View style={styles.startButton}>
              <Button title="START" color="white" onPress={start} />
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    rowGap: 24,
    alignItems: 'center',
  },
  restartButton: {
    alignSelf: 'flex-end',
    borderRadius: 5,
    backgroundColor: '#1E90FF',
  },
  startButton: {
    borderRadius: 5,
    backgroundColor: 'blue',
  },
  gameContainer: {
    alignItems: 'center',
    rowGap: 5,
    padding: 12,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  text: {
    fontSize: 18,
  },
});
