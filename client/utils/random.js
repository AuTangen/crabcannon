

import { Dimensions } from 'react-native'

var windowHeight = Dimensions.get('window').height
var windowWidth = Dimensions.get('window').width


export const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max  - min +1) + min)
}

export const getPipeSizePosPair = (addToPosX = 0) => {
    let yPosTop = -getRandom(300, windowHeight - 100)

    const pipeTop = {pos: {x: windowWidth + addToPosX, y: yPosTop}, size: { height: windowHeight * 2, width: 75} }
    const pipeBottom = {pos: {x: windowWidth + addToPosX, y: windowHeight * 2 + 300 + yPosTop}, size: { height: windowHeight * 2, width: 75} }
    
    return {pipeTop, pipeBottom}
}

export const getRangoonPos = (addToPosX = 300) => {

    let yPos = getRandom(300, windowHeight - 100)

    let xPos = getRandom(300, 100)

    console.log(yPos)
    
    let {pipeTop} = getPipeSizePosPair()
    

    const rangoonPos = {x: windowWidth - xPos, y: yPos}

    // console.log(rangoonPos)

    return rangoonPos

}