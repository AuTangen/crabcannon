import Matter from "matter-js"
import React, { useState, useEffect } from 'react'
import jumpSound from './assets/music/jump.mp3'
import { getPipeSizePosPair } from "./utils/random"

import { Dimensions } from 'react-native'

var windowHeight = Dimensions.get('window').height
var windowWidth = Dimensions.get('window').width



const Physics = (entities, {touches, time, dispatch}) => {
    let engine = entities.physics.engine

    function jump() {
        new Audio(jumpSound).play()
      }

    document.addEventListener('keydown', event => {
        if (event.code === 'Space') {
            
            Matter.Body.setVelocity(entities.Crab.body, {
                x:0,
                y: -6
            })
            
        }
        
    })


   
    touches.filter(t => t.type === 'press').forEach(t => {
        console.log('click!')
        Matter.Body.setVelocity(entities.Crab.body, {
            x:0,
            y: -8
        })
    });


    Matter.Engine.update(engine, time.delta)
 for(let i = 1; i <= 2; i++){

    if (entities[`ObstacleTop${i}`].body.bounds.max.x <= 0) {
            const pipeSizePos = getPipeSizePosPair(windowWidth * 0.9);
            Matter.Body.setPosition(entities[`ObstacleTop${i}`].body, pipeSizePos.pipeTop.pos)
            Matter.Body.setPosition(entities[`ObstacleBottom${i}`].body, pipeSizePos.pipeBottom.pos)   
    }
    Matter.Body.translate(entities[`ObstacleTop${i}`].body, {x: -3, y:0 })
    Matter.Body.translate(entities[`ObstacleBottom${i}`].body, {x: -3, y:0 })
 }
  


    return entities
}

export default Physics