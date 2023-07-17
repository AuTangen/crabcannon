import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SceneSplash from '../screens/auth/Splash'
import SceneLoading from '../screens/auth/Loading'
import SceneLogin from '../screens/auth/Login'
import SceneRegister from '../screens/auth/Register'
import SceneAuth from '../screens/auth/Auth'

const Stack = createStackNavigator()



const Navigation = () => (

    
    <NavigationContainer>
         <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SceneSplash} />
            <Stack.Screen name="Loading" component={SceneLoading} />
            <Stack.Screen name="Auth" component={SceneAuth} />
            <Stack.Screen name="Register" component={SceneRegister} />
            <Stack.Screen name="Login" component={SceneLogin} />
            
        </Stack.Navigator>
    </NavigationContainer>
)

export default Navigation