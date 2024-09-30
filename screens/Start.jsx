import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { Checkbox } from 'expo-checkbox';
import Card from '../components/Card';

export default function Start({ onRegisterSuccess }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [checked, setChecked] = useState(false);
  const [errorMsg, setErrorMsg] = useState({ name: '', email: '', number: '' });
  const [focused, setFocused] = useState(null);

  const handleBlur = () => {
    setFocused(null);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setNumber('');
    setErrorMsg({ name: '', email: '', number: '' });
    setChecked(false);
  };

  const handleRegister = () => {
    if (
      errorMsg.name ||
      errorMsg.email ||
      errorMsg.number ||
      !name ||
      !email ||
      !number
    ) {
      Alert.alert('Register failed...', 'Information provided is invalid', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
      return;
    }
    onRegisterSuccess({
      name: name,
      email: email,
      number: number,
    });
  };

  const validate = (changedText) => {
    switch (focused) {
      case 'name':
        if (changedText.length <= 1 || !isNaN(parseFloat(changedText))) {
          setErrorMsg((prev) => ({
            ...prev,
            name: 'Please enter a valid name',
          }));
        } else {
          setErrorMsg((prev) => ({ ...prev, name: '' }));
        }
        break;
      case 'email':
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (!reg.test(changedText)) {
          setErrorMsg((prev) => ({
            ...prev,
            email: 'Please enter a valid email',
          }));
          return false;
        } else {
          setErrorMsg((prev) => ({ ...prev, email: '' }));
        }
        break;
      case 'number':
        if (
          changedText.length !== 10 ||
          isNaN(parseFloat(changedText)) ||
          ['0', '1'].includes(changedText.charAt(9))
        ) {
          setErrorMsg((prev) => ({
            ...prev,
            number: 'Please enter a valid number',
          }));
        } else {
          setErrorMsg((prev) => ({ ...prev, number: '' }));
        }
        break;
    }
  };

  return (
    <Card>
      <Text>Name</Text>
      <TextInput
        style={styles.textInput}
        onFocus={() => setFocused('name')}
        onBlur={handleBlur}
        value={name}
        onChangeText={(changedText) => {
          setName(changedText);
          validate(changedText);
        }}
      />
      {focused === 'name' && errorMsg.name && <Text>{errorMsg.name}</Text>}
      <Text>Email Address</Text>
      <TextInput
        style={styles.textInput}
        onFocus={() => setFocused('email')}
        onBlur={handleBlur}
        value={email}
        onChangeText={(changedText) => {
          setEmail(changedText);
          validate(changedText);
        }}
      />
      {focused === 'email' && errorMsg.email && <Text>{errorMsg.email}</Text>}
      <Text>Phone Number</Text>
      <TextInput
        style={styles.textInput}
        onFocus={() => setFocused('number')}
        onBlur={handleBlur}
        value={number}
        onChangeText={(changedText) => {
          setNumber(changedText);
          validate(changedText);
        }}
      />
      {focused === 'number' && errorMsg.number && (
        <Text>{errorMsg.number}</Text>
      )}
      <View style={styles.checkboxContainer}>
        <Checkbox value={checked} onValueChange={setChecked} />
        <Text>I am not a robot</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Reset" color="red" onPress={handleReset} />
        <Button title="Register" disabled={!checked} onPress={handleRegister} />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    columnGap: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
  },
  textInput: {
    borderWidth: 1,
    paddingVertical: 10,
  },
});
