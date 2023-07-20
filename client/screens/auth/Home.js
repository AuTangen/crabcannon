import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity, Button, Image } from 'react-native'
import PropTypes from 'prop-types'
import DefaultPage from '../../components/DefaultPage'
import title from '../../assets/sprites/title.png'
import subtitle from '../../assets/sprites/subtitle.png'
import intromusic from '../../assets/music/intromusic.mp3'


const SceneHome = ({navigation, route}) => {

    useEffect(() => {
        play()
      },[])
    
      function play() {
        new Audio(intromusic).play()
      }
    
    console.log(route.params)
    const [user, setUser] = useState(route.params.user)
//    console.log(user)
 

   const PLAY = () => {
    navigation.navigate('CrabRangoon', {user: user})
}
// pass user param in navigate (, {user: user})

    return (
        <DefaultPage>
<Image source={title}style={{width:350, height: 40}}/>
<Image source={subtitle}style={{width:230, height: 20}}/>


           
            {/* <Text style= {{
                fontSize: '30px',
                color: 'white'
            }}>Welcome Back {user.username}</Text> */}
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