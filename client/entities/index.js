import Matter from 'matter-js'
import Crab from '../components/Crab'
import Floor from '../components/Floor'
import Obstacle from '../components/Obstacle'
import slingshot from '../components/Slingshot'




import { Dimensions } from 'react-native'
import { getPipeSizePosPair } from '../utils/random'
import Rangoon from '../components/Rangoon'

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
    const pipeSizePosB = getPipeSizePosPair(windowWidth * 0.9)


    world.gravity.y = 0.4;

    return {
        physics: {engine, world},

        Crab: Crab(world, 'green', {x:200, y:windowHeight/2}, {height:40, width:60}),

        Rangoon: Rangoon(world, 'green', {x:500, y:windowHeight/2}, {height:80, width:100}),


        ObstacleTop1: Obstacle(world, 'ObstacleTop1', 'red', pipeSizePosA.pipeTop.pos, pipeSizePosA.pipeTop.size),
        ObstacleBottom1: Obstacle(world, 'ObstacleBottom1', 'red', pipeSizePosA.pipeBottom.pos, pipeSizePosA.pipeBottom.size),

        ObstacleTop2: Obstacle(world, 'ObstacleTop2', 'red', pipeSizePosB.pipeTop.pos, pipeSizePosB.pipeTop.size),
        ObstacleBottom2: Obstacle(world, 'ObstacleBottom2', 'red', pipeSizePosB.pipeBottom.pos, pipeSizePosB.pipeBottom.size),

        Floor: Floor(world, 'burlywood', {x:windowWidth/2, y:windowHeight}, {height:80, width:windowWidth}),
        slingshot: slingshot

    }
}