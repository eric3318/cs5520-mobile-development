import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState, useEffect } from 'react';

export default function Start() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [focused, setFocused] = useState(null);
  const numbers = Array.from(Array(10).keys());

  const handleBlur = () => {
    setFocused(null);
  };

  const validate = (changedText) => {
    if (!changedText) {
      setErrorMsg('');
      return;
    }
    switch (focused) {
      case 'name':
        if (changedText.length <= 1 || !isNaN(parseFloat(changedText))) {
          setErrorMsg('Please enter a valid name');
        } else {
          setErrorMsg('');
        }
        break;
      case 'email':
        break;
      case 'number':
        if (
          changedText.length !== 10 ||
          isNaN(parseFloat(changedText)) ||
          ['0', '1'].includes(changedText.charAt(9))
        ) {
          setErrorMsg('Please enter a valid phone number');
        } else {
          setErrorMsg('');
        }
        break;
    }
  };

  return (
    <View style={styles.container}>
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
      {focused === 'name' && errorMsg && <Text>{errorMsg}</Text>}
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
      {focused === 'email' && errorMsg && <Text>{errorMsg}</Text>}
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
      {focused === 'number' && errorMsg && <Text>{errorMsg}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    rowGap: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    columnGap: 10,
  },
  textInput: {
    borderWidth: 1,
    paddingVertical: 10,
  },
  resetButton: {},
});
