import React, { useEffect } from 'react'
import { Text, Button } from 'react-native'
import PropTypes from 'prop-types'
import DefaultPage from '../../components/DefaultPage'

const SceneAuth = ({ navigation }) => {

    const navigateLogin = () => {
        navigation.navigate('Login')
    }

    const navigateRegister = () => {
        navigation.navigate('Register')
    }

    return (
        <DefaultPage>
          <Button
                title="Login"
                onPress={navigateLogin}
            />
            <Text>
                or
            </Text>
            <Button
                title="SignUp"
                onPress={navigateRegister}
            />
        </DefaultPage>
    )
}

SceneAuth.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default SceneAuth