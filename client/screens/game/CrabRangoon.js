import React, { useState, useEffect, useId} from 'react'
import { Text, TextInput, Button, Platform } from 'react-native'
import PropTypes from 'prop-types'
import DefaultPage from '../../components/DefaultPage'
import Popup from '../../components/Popup'

import {GameEngine} from 'react-native-game-engine'
import entities from '../../entities'
import Physics from '../../physics'


const SceneGame = ({ navigation, route }) => {

    const [showMessage, setShowMessage] = useState(true)


const [running, setRunning] = useState(false)

const [pause, setPause] = useState(false)

const handleMessage = () => {
    setShowMessage(false)

    setTimeout(() => {
        setRunning(true)
    }, 500)
}

document.addEventListener('keydown', event => {
    if (event.code === 'KeyP') {
        setRunning(!running)
       setPause(!pause) 

       
    }
    
})

document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && pause) {
        handleResume() 

       
    }
    
})

const handleResume = () => {
    setRunning(!running)
       setPause(!pause) 
}

const handleQuit = () => {
    navigation.navigate('home')
}

//    useEffect(() => {
// setRunning(true)
//    },[])
    return (
     <>

     {showMessage && (
        <Popup>
        <Text style={{
            zIndex: 2,
            color: 'white',
            fontSize: '32px'

        }}>Press 'spacebar' to move up and down through the obstacles. Collect as many crab rangoons as you can to get the high score</Text>
        <Button
        title="OK"
        onPress={handleMessage}></Button>
        </Popup>
     )}

     {pause && (
        <Popup>
        <Text style={{
            zIndex: 2,
            color: 'white',
            fontSize: '32px'

        }}>Paused</Text>
        <Button 
        title="Resume"
        onPress={handleResume}></Button>
        
         <Button 
        title="Leaderboards"
        ></Button>

        <Button 
        title="Quit"
        onPress={handleQuit}></Button>
       
        </Popup>
     )}
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
</>   
        
    )
}

SceneGame.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default SceneGame