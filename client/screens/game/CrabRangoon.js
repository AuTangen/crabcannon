import React, { useState, useEffect, useId} from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import DefaultPage from '../../components/DefaultPage'
import {GameEngine} from 'react-native-game-engine'
import entities from '../../entities'
import Physics from '../../physics'


const SceneGame = ({ navigation, route }) => {

const [running, setRunning] = useState(false)

   useEffect(() => {
setRunning(true)
   },[])
    return (
        
<GameEngine
systems={[Physics]}
entities={entities()}
running={running}
style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0, 
    bottom: 0,
    backgroundColor: 'lightskyblue',
    overflow: 'hidden'
    
}}>

</GameEngine>

        
    )
}

SceneGame.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default SceneGame