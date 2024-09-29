import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Start from './screens/Start';
import { useState } from 'react';
import Confirm from './screens/Confirm';

export default function App() {
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const registerSuccessHandler = () => {
    setRegisterSuccess(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {registerSuccess ? (
        <Confirm />
      ) : (
        <Start onRegisterSuccess={registerSuccessHandler} />
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
