import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios'

import { enableScreens } from 'react-native-screens';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Navigation from './components/Navigation'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SceneSplash from './screens/auth/Splash'
import SceneLoading from './screens/auth/Loading'
import SceneLogin from './screens/auth/Login'
import SceneRegister from './screens/auth/Register'
import SceneAuth from './screens/auth/Auth'
import SceneHome from './screens/auth/Home'
import SceneGame from './screens/game/CrabRangoon'



enableScreens();
const Stack = createStackNavigator()


function App(props) {

  

  // const [user, setUser] = useState(null)

  // useEffect(() => {
  //   axios.get('http://localhost:3000/auth/authenticated').then(res => {
  //     setUser(res.data.username)
  //     console.log(res.data)
  //   })

  // }, []);
  

  return (
    <NavigationContainer>
       
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }} >
       <Stack.Screen name="splash" component={SceneSplash} />
       <Stack.Screen name="loading" component={SceneLoading} />
       <Stack.Screen name="auth" component={SceneAuth} />
       <Stack.Screen name="signup" component={SceneRegister}  />
       <Stack.Screen name="login" component={SceneLogin} />
       <Stack.Screen name="home" component={SceneHome}  />
       <Stack.Screen name="CrabRangoon" component={SceneGame}  />

       
   </Stack.Navigator>
</NavigationContainer>
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
