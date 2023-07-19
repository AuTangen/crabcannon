import Matter from 'matter-js'
import Crab from '../components/Crab'
import Floor from '../components/Floor'
import Obstacle from '../components/Obstacle'
import slingshot from '../components/Slingshot'




import { Dimensions } from 'react-native'
import { getPipeSizePosPair } from '../utils/random'

var windowHeight = Dimensions.get('window').height
var windowWidth = Dimensions.get('window').width

window.onresize = function(event) {
    windowWidth = Dimensions.get('window').width
    windowHeight = Dimensions.get('window').height
};

export default restart => {
    let engine = Matter.Engine.create({enableSleeping: false})


    let world = engine.world

    const pipeSizePosA = getPipeSizePosPair()

    world.gravity.y = 0.4;

    return {
        physics: {engine, world},
        Crab: Crab(world, 'green', {x:200, y:200}, {height:40, width:60}),
        ObstacleTop1: Obstacle(world, 'ObstacleTop1', 'red', pipeSizePosA.pipeTop.pos, pipeSizePosA.pipeTop.size),
        Floor: Floor(world, 'burlywood', {x:windowWidth/2, y:windowHeight}, {height:80, width:windowWidth}),
        slingshot: slingshot

    }
}