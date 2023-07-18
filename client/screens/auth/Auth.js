import React, { useEffect, useState } from 'react'
import { Text, Button } from 'react-native'
import axios from 'axios'

import PropTypes from 'prop-types'
import DefaultPage from '../../components/DefaultPage'

const SceneAuth = ({ navigation }) => {

    const navigateLogin = () => {
        navigation.navigate('login')
    }

    const navigateRegister = () => {
        navigation.navigate('signup')
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