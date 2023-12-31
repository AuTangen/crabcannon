import React, { useEffect, useState } from 'react'

import axios from 'axios'

import { Text, TextInput, Button, Platform } from 'react-native'
import PropTypes from 'prop-types'
import DefaultPage from '../../components/DefaultPage'

// const API_URL = Platform.OS === 'ios' ? 'http://localhost:3001' : 'http://10.0.2.2:3001';

const API_URL = 'http://localhost:3001'


const SceneLogin = ({navigation}) => {

    const [user, setUser] = useState(null)

    const [formState, setFormState] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        if (user) {
         console.log(user);
         navigation.navigate('home', {user: user})
     }
       }, [user]);

 
    const submitLogin = async () => {
        
        try {
            const res = await axios.post(`${API_URL}/auth/login`, formState);
            console.log(res.data)
            setUser(res.data)
            console.log(user)
            
        } catch (err) {
            if (err.code === 402) {
                console.log(err)
            }
        }
    }



    const returnMain = () => {
        navigation.navigate('auth')
    }

    return (
        <DefaultPage>
            <Text>
            <Text>
                Login
            </Text>
            <TextInput
            id='email'
            placeholder='Enter email'
                style={{
                    height: 50, width: 200, borderColor: 'gray', borderWidth: 3, padding: 10, margin: 10,
                }}
                onChangeText={(text) => setFormState({
                    ...formState,
                    email: text
                })}
                value={formState.email}
            />
             <TextInput 
             id='password'
             placeholder='Enter password'
             secureTextEntry={true}
                style={{
                    height: 50, width: 200, borderColor: 'gray', borderWidth: 3, padding: 10, margin: 10,
                }}
                onChangeText={(text) => setFormState({
                    ...formState,
                    password: text
                })}
                value={formState.password}
            />
            <Button
                title="Login In"
                onPress={submitLogin}
            />
            </Text>
            <Button
                title="Return To Main Screen"
                onPress={returnMain}
            />
        </DefaultPage>
    )
}

SceneLogin.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default SceneLogin