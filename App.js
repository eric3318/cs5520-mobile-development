import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Start from './screens/Start';
import { useState } from 'react';
import Confirm from './screens/Confirm';
import Game from './screens/Game';

export default function App() {
  const [isConfirmPageVisible, setIsConfirmPageVisible] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({});
  const [isGamePageVisible, setIsGamePageVisible] = useState(false);

  const registerSuccessHandler = (info) => {
    setIsConfirmPageVisible(true);
    console.log(info);
    setRegisterInfo(info);
  };

  const goBackHandler = () => {
    setIsConfirmPageVisible(false);
  };

  const confirmHandler = () => {
    setIsConfirmPageVisible(false);
    setIsGamePageVisible(true);
  };

  const restartHandler = () => {
    setIsGamePageVisible(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {isGamePageVisible ? (
        <Game
          lastDigit={parseInt(
            registerInfo.number.charAt(registerInfo.length - 1)
          )}
          onRestart={restartHandler}
        />
      ) : (
        <>
          <Start onRegisterSuccess={registerSuccessHandler} />
          <Confirm
            isVisible={isConfirmPageVisible}
            registerInfo={registerInfo}
            onBack={goBackHandler}
            onConfirm={confirmHandler}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ade8f4',
    justifyContent: 'center',
  },
});
