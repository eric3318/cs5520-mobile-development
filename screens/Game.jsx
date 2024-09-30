import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import ActionButton from '../components/ActionButton';

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

  useEffect(() => {
    let timerId;
    if (started && countDown > 0 && !ended) {
      timerId = setInterval(() => {
        setCountDown((prevCountDown) => prevCountDown - 1);
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [started, countDown, ended]);

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
      <Card>
        <Text style={styles.text}>Guess a number between 1 & 100</Text>
        <Text style={styles.text}>that is a multiply of {lastDigit}</Text>
        <Text style={styles.text}>in 60 seconds and 4 attempts</Text>
        {!started ? (
          <ActionButton title="START" onPress={start} />
        ) : (
          <>
            <TextInput
              style={styles.input}
              value={input}
              onChangeText={setInput}
              autoFocus
            />
            <Text style={styles.text}>Attempts left: {4 - guessCount}</Text>
            <Text style={styles.text}>Timer: {countDown}s</Text>
            <ActionButton
              title="Use a hint"
              onPress={showHint}
              disabled={hintUsed}
            />
            <ActionButton
              title="Submit a guess"
              onPress={validateSubmission}
              disabled={hintUsed}
            />
          </>
        )}
      </Card>
    );
  };

  const GameOverCard = () => {
    return (
      <Card>
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
        <ActionButton title="NEW GAME" onPress={newGameHandler} />
      </Card>
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
        <ActionButton title="NEW GAME" onPress={newGameHandler} />
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
        <ActionButton title="TRY AGAIN" onPress={retryHandler} />
        <ActionButton title="END GAME" onPress={endGameHandler} />
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
          <Card>
            {parseInt(lastGuess) === target ? (
              <GuessCorrectCard />
            ) : (
              <GuessIncorrectCard />
            )}
          </Card>
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
    backgroundColor: '#0096c7',
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
    alignSelf: 'center',
  },
});
