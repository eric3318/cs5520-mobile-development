import { View, Text, StyleSheet, Button, Alert, TextInput } from 'react-native';
import { useState } from 'react';

export default function Game({ lastDigit, onRestart }) {
  const [started, setStarted] = useState(false);
  const [countDown, setCountDown] = useState(60);
  const [guessCount, setGuessCount] = useState(0);
  const [lastGuess, setLastGuess] = useState('');
  const [hintUsed, setHintUsed] = useState(false);
  const target = 99;

  const start = () => {
    setStarted(true);
  };

  const showHint = () => {
    if (hintUsed) {
      return;
    }
    setHintUsed(true);
    let hint =
      parseInt(lastGuess, 10) > target
        ? 'Your guess is too big!'
        : 'Your guess is too small!';
    Alert.alert('Hint', hint, [
      {
        text: 'Got it',
      },
    ]);
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
          {!started ? (
            <View style={styles.startButton}>
              <Button title="START" color="white" onPress={start} />
            </View>
          ) : (
            <>
              <TextInput style={styles.input} />
              <Text style={styles.text}>Attempts left: {4 - guessCount}</Text>
              <Text style={styles.text}>Timer: {countDown}s</Text>
              <View style={styles.startButton}>
                <Button
                  title="Use a hint"
                  color="white"
                  onPress={showHint}
                  disabled={hintUsed}
                />
              </View>
              <View style={styles.startButton}>
                <Button title="Submit a guess" color="white" />
              </View>
            </>
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
  input: {
    borderBottomWidth: 2,
  },
});
