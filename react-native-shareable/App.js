import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

// shared component

import Header from './shared/components/Header';

export default function App() {

  const [randomNumber, setRandomNumber] = useState(0);
  const randomNumberHandler = () => { setRandomNumber(randomNumber + 1); };

  return (
    <View style={styles.test}>
      <StatusBar style="auto"
      // clock and carrier on top
      />
      <Header />
      <Text style={styles.text}>Hello World from mobile!</Text>
      <View style={styles.test2}>
        <Button
          onPress={event => randomNumberHandler(event)}
          title='Click'
        />
        <Button
          onPress={() => setRandomNumber(0)}
          title='Reset'
        />
      </View>
      <Text>{randomNumber}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  test: {
    textAlign: 'center',
    marginTop: '15rem',
  },
  test2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: '3rem'
  }
});