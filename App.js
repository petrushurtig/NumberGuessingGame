import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [guess, setGuess] = useState(0);
  const [answer, setAnswer] = useState(Math.floor(Math.random() * 100) + 1);
  const [text, setText] = useState('Guess a number between 1-100')

  const refresh = () => {
    setAnswer(Math.floor(Math.random() * 100) + 1)
  }
    
  const buttonOnClick = () => {
    setCount(count + 1)
    setGuess(guess)
    
    if (guess == answer) {
      Alert.alert('You guessed the number in ' + (count+1) + ' guesses')

      refresh()
      setCount(0);
    }
    else if(guess < answer) {
      setText('Your guess ' + guess + ' is too low' )
    }
    else {
      setText('Your guess ' + guess + ' is too high')
    }
  }
  
  return (
    <View style={styles.container}>
      <Text style={{margin: 10}}>{text}</Text>
      <TextInput onChangeText={(val) => setGuess(val)} keyboardType='numeric' style={{
        backgroundColor:'white', 
        width:80, 
        borderColor: 'black', 
        borderWidth: 1,
      margin: 10}}
        />
      <Button style={{margin: 10}} onPress={buttonOnClick} title="Press me"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
