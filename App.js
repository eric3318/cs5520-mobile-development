import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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
    setRegisterInfo(info);
  };

  const goBackHandler = () => {
    setIsConfirmPageVisible(false);
  };

  const confirmHandler = () => {
    setIsConfirmPageVisible(false);
    setIsGamePageVisible(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {isGamePageVisible ? (
        <Game lastDigit={registerInfo.number.charAt(-1)} />
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
    backgroundColor: '#fff',
  },
});
