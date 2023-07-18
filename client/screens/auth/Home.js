import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import DefaultPage from '../../components/DefaultPage'

const SceneHome = ({route}) => {
    
    console.log(route.params)
    const [user, setUser] = useState(route.params.user)
   console.log(user)
 
    return (
        <DefaultPage>
            <Text>
                HOME
            </Text>
            <Text>Hello {user.username}</Text>
        </DefaultPage>
    )
}

SceneHome.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default SceneHome