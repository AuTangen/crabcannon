import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios'

import { enableScreens } from 'react-native-screens';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './components/Navigation'

enableScreens();

function App(props) {

  
  const [user, setUser] = useState(null)

useEffect(() => {
  axios.get('/auth/authenticated').then(res => {
    setUser(res.data.user)
  })
}, []);

  return (
    <Navigation user={user} setUser={setUser}/>
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

export default App;
