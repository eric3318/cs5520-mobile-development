import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Start from './screens/Start';
import { useState } from 'react';
import Confirm from './screens/Confirm';

export default function App() {
  const [isConfirmPageVisible, setIsConfirmPageVisible] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({});

  const registerSuccessHandler = (info) => {
    setIsConfirmPageVisible(true);
    setRegisterInfo(info);
  };

  const goBackHandler = () => {
    setIsConfirmPageVisible(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Start onRegisterSuccess={registerSuccessHandler} />
      <Confirm
        isVisible={isConfirmPageVisible}
        registerInfo={registerInfo}
        onBack={goBackHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
