import Matter from 'matter-js'
import Crab from '../components/Crab'
import Floor from '../components/Floor'
import slingshot from '../components/Slingshot'

import { Dimensions } from 'react-native'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

export default restart => {
    let engine = Matter.Engine.create({enableSleeping: false})


    let world = engine.world

    world.gravity.y = 0.4;

    return {
        physics: {engine, world},
        Crab: Crab(world, 'green', {x:200, y:200}, {height:40, width:60}),
        Floor: Floor(world, 'burlywood', {x:windowWidth/2, y:windowHeight}, {height:80, width:windowWidth}),
        slingshot: slingshot

    }
}