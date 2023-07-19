import React, { useEffect } from 'react'
import { Text, Image } from 'react-native'
import PropTypes from 'prop-types'
import DefaultPage from '../../components/DefaultPage'
// import title from '../../assets/title.png'


const title = require('../../assets/sprites/title.png')
const subtitle = require('../../assets/sprites/subtitle.png')

const SceneSplash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('loading')
        }, 2000)
    }, [])
    return (
        <DefaultPage>
            <Image source={title}style={{width:350, height: 40}}/>
<Image source={subtitle}style={{width:230, height: 20}}/>
        

            {/* <Text style= {{
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
            </Text> */}
        </DefaultPage>
    )
}

SceneSplash.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default SceneSplash