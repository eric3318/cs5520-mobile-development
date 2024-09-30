import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TextInput,
  Image,
} from 'react-native';
import { useState } from 'react';

const generateTarget = (num) => {
  const targets = [];
  let base = parseInt(num);
  let i = 1;
  let curr = base;
  while (curr <= 100) {
    targets.push(curr);
    i++;
    curr = base * i;
  }
  return targets[Math.floor(Math.random() * targets.length)];
};

export default function Game({ lastDigit, onRestart }) {
  const [started, setStarted] = useState(false);
  const [countDown, setCountDown] = useState(60);
  const [guessCount, setGuessCount] = useState(0);
  const [lastGuess, setLastGuess] = useState('');
  const [hintUsed, setHintUsed] = useState(false);
  const [input, setInput] = useState('');
  const [target, setTarget] = useState(generateTarget(lastDigit));
  const [ended, setEnded] = useState(false);

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

  const alertInvalidEntry = () => {
    Alert.alert('Invalid entry', 'The entered value is invalid', [
      {
        text: 'Modify',
      },
    ]);
  };

  const validateSubmission = () => {
    if (
      !input ||
      isNaN(input) ||
      parseInt(input) < 1 ||
      parseInt(input) > 100
    ) {
      alertInvalidEntry();
      return;
    }
    setLastGuess(input);
    setGuessCount((prev) => prev + 1);
  };

  const retryHandler = () => {
    setLastGuess('');
    setInput('');
  };

  const newGameHandler = () => {
    setTarget(generateTarget(lastDigit));
    setLastGuess('');
    setInput('');
    setGuessCount(0);
    setHintUsed(false);
    setCountDown(60);
    setEnded(false);
    setStarted(false);
  };

  const endGameHandler = () => {
    setEnded(true);
    setLastGuess('');
  };

  const GamePlayCard = () => {
    return (
      <View style={styles.card}>
        <Text style={styles.text}>Guess a number between 1 & 100</Text>
        <Text style={styles.text}>that is a multiply of {lastDigit}</Text>
        <Text style={styles.text}>in 60 seconds and 4 attempts</Text>
        {!started ? (
          <View style={styles.startButton}>
            <Button title="START" color="white" onPress={start} />
          </View>
        ) : (
          <>
            <TextInput
              style={styles.input}
              value={input}
              onChangeText={setInput}
            />
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
              <Button
                title="Submit a guess"
                color="white"
                onPress={validateSubmission}
              />
            </View>
          </>
        )}
      </View>
    );
  };

  const GameOverCard = () => {
    return (
      <View style={styles.card}>
        <Text style={styles.text}>The game is over!</Text>
        <Image
          source={require('../assets/emoji.png')}
          alt="game over image"
          style={styles.image}
        />
        <Text style={styles.text}>
          {!ended && (
            <>
              {guessCount >= 4 && 'You are out of attempts'}
              {countDown <= 0 && 'You are out of time'}
            </>
          )}
        </Text>
        <View style={styles.startButton}>
          <Button title="NEW GAME" color="white" onPress={newGameHandler} />
        </View>
      </View>
    );
  };

  const GuessCorrectCard = () => {
    return (
      <>
        <Text style={styles.text}>You guessed correct!</Text>
        <Text style={styles.text}>Attempts used: {guessCount}</Text>
        <Image
          style={styles.image}
          src={`https://picsum.photos/id/${target}/100/100`}
          alt="winning image"
        />
        <View style={styles.startButton}>
          <Button title="NEW GAME" color="white" onPress={newGameHandler} />
        </View>
      </>
    );
  };

  const GuessIncorrectCard = () => {
    return (
      <>
        <Text style={styles.text}>You did not guess correct!</Text>
        <Text style={styles.text}>
          You should guess {parseInt(lastGuess) > target ? 'lower' : 'higher'}.
        </Text>
        <View style={styles.startButton}>
          <Button title="TRY AGAIN" color="white" onPress={retryHandler} />
        </View>
        <View style={styles.startButton}>
          <Button title="END GAME" color="white" onPress={endGameHandler} />
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.restartButton}>
          <Button title="RESTART" color="white" onPress={onRestart} />
        </View>
        {ended || guessCount >= 4 || countDown <= 0 ? (
          <GameOverCard />
        ) : lastGuess ? (
          <View style={styles.card}>
            {parseInt(lastGuess) === target ? (
              <GuessCorrectCard />
            ) : (
              <GuessIncorrectCard />
            )}
          </View>
        ) : (
          <GamePlayCard />
        )}
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
  card: {
    alignItems: 'center',
    rowGap: 5,
    paddingVertical: 12,
    paddingHorizontal: 36,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  text: {
    fontSize: 18,
  },
  input: {
    paddingTop: 12,
    paddingHorizontal: 20,
    maxWidth: '100%',
    borderBottomWidth: 2,
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
  },
});
