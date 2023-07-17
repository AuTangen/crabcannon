import React, { useEffect, useState } from 'react'

import axios from 'axios'

import { Text, TextInput, Button } from 'react-native'
import PropTypes from 'prop-types'
import DefaultPage from '../../components/DefaultPage'

const SceneLogin = ({ navigation }) => {

    const [user, setUser] = useState("")

    const [formState, setFormState] = useState({
        user: '',
        password: ''
    })


 

    const submitLogin = () => {
        console.log(formState.user)
    }

    const returnMain = () => {
        navigation.navigate('Auth')
    }

    return (
        <DefaultPage>
            <Text>
            <Text>
                Login
            </Text>
            <TextInput
            id='username'
            placeholder='Enter username'
                style={{
                    height: 50, width: 200, borderColor: 'gray', borderWidth: 3, padding: 10, margin: 10,
                }}
                onChangeText={(text) => setFormState({
                    ...formState,
                    user: text
                })}
                value={formState.user}
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
                title="Press me"
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