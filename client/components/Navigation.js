import React from 'react'
import { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SceneSplash from '../screens/auth/Splash'
import SceneLoading from '../screens/auth/Loading'
import SceneLogin from '../screens/auth/Login'
import SceneRegister from '../screens/auth/Register'
import SceneAuth from '../screens/auth/Auth'
import SceneHome from '../screens/auth/Home'

const Stack = createStackNavigator()




const Navigation = () => (



    <NavigationContainer>
       
         <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="splash" component={SceneSplash} />
            <Stack.Screen name="loading" component={SceneLoading} />
            <Stack.Screen name="auth" component={SceneAuth} />
            <Stack.Screen name="signup" component={SceneRegister} />
            <Stack.Screen name="login" component={SceneLogin} />
            <Stack.Screen name="home" component={SceneHome} user={user} setUser={setUser} />
            
        </Stack.Navigator>
    </NavigationContainer>
)

export default Navigation