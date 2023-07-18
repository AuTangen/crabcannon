import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity, Button } from 'react-native'
import PropTypes from 'prop-types'
import DefaultPage from '../../components/DefaultPage'

const SceneHome = ({navigation, route}) => {
    
    console.log(route.params)
    const [user, setUser] = useState(route.params.user)
   console.log(user)
 

   const PLAY = () => {
    navigation.navigate('CrabRangoon', {user: user})
}

    return (
        <DefaultPage>
            <Text style= {{
                fontSize: '48px',
                color: 'white'
            }}>
                Crab Rangoon: The Game
            </Text>
            <Text style= {{
                fontSize: '30px',
                color: 'white'
            }}>Welcome Back, {user.username}</Text>
            <Button
                title="PLAY"
                onPress={PLAY}
            />
        </DefaultPage>
    )
}

SceneHome.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default SceneHome