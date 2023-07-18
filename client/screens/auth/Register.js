import React, { useEffect, useState } from 'react'

import axios from 'axios'


import { Text, TextInput, Button } from 'react-native'
import PropTypes from 'prop-types'
import DefaultPage from '../../components/DefaultPage'
import { useNavigation } from '@react-navigation/native'

const SceneRegister = () => {

    const [user, setUser] = useState(null)

    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: ''
    })

    const navigation = useNavigation()

    useEffect(() => {
       if (user) {
        console.log(user);
        navigation.navigate('home', {user: user})
    }
      }, [user]);


    const submitLogin = async () => {
        
        try {
            const res = await axios.post('http://localhost:3001/auth/signup', formState);
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
               Register
            </Text>
            <TextInput
            id='username'
            placeholder='Enter username'
                style={{
                    height: 50, width: 200, borderColor: 'gray', borderWidth: 3, padding: 10, margin: 10,
                }}
                onChangeText={(text) => setFormState({
                    ...formState,
                    username: text
                })}
                value={formState.username}
            />
              <TextInput
            id='email'
            placeholder='Enter email address'
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
                title="Create Account"
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

SceneRegister.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default SceneRegister