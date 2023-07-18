import React, { useEffect } from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import DefaultPage from '../../components/DefaultPage'

const SceneSplash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('loading')
        }, 2000)
    }, [])
    return (
        <DefaultPage>
            <Text style= {{
                fontSize: '56px',
                color: 'white'
            }}>
                Crab Rangoon:
            </Text>
            <Text style= {{
                fontSize: '48px',
                color: 'white'
            }}>
                The Game
            </Text>
        </DefaultPage>
    )
}

SceneSplash.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default SceneSplash