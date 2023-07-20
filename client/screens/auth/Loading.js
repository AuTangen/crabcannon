import React, { useEffect } from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import DefaultPage from '../../components/DefaultPage'

const SceneLoading = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('home')
        }, 3000)
    }, [])
    return (
        <DefaultPage>
            <Text style= {{
                fontSize: '30px',
                color: 'white'
            }}>
                loading...
            </Text>
        </DefaultPage>
    )
}

SceneLoading.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default SceneLoading