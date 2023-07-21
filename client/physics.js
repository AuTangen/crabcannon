import Matter from "matter-js"
import React, { useState, useEffect } from 'react'
import jumpSound from './assets/music/jump.mp3'
import { getPipeSizePosPair, getRangoonPos } from "./utils/random"

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
            y: -6
        })
    });


    // translate or move the obstacles to the left of the screen, when they reach the edge or the screen re-render them with new hieght params

    // *** add if statement for window width and scale speed accordingly!!


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
  
// move rangoon to edge of screen

if (entities.Rangoon.body.bounds.max.x <= 0) {
    const rangoonPos = getRangoonPos(windowWidth * 0.9);
    Matter.Body.scale(entities.Rangoon.body, 1, 1);
    Matter.Body.setPosition(entities.Rangoon.body, rangoonPos)
    
}
Matter.Body.translate(entities.Rangoon.body, {x: -3, y:0 })


// checks collision between two specific objects!!

if (Matter.Collision.collides(entities.ObstacleTop1.body, entities.Crab.body) != null) {
    dispatch({type: 'game_over'})
}
if (Matter.Collision.collides(entities.ObstacleTop2.body, entities.Crab.body) != null) {
    dispatch({type: 'game_over'})
}
if (Matter.Collision.collides(entities.ObstacleBottom1.body, entities.Crab.body) != null) {
    dispatch({type: 'game_over'})
}
if (Matter.Collision.collides(entities.ObstacleBottom2.body, entities.Crab.body) != null) {
    dispatch({type: 'game_over'})
}

if (Matter.Collision.collides(entities.Rangoon.body, entities.Crab.body) != null) {
    dispatch({type: 'add_point'})
    Matter.Body.scale(entities.Rangoon.body, 0.2, 0.2);

}




    return entities
}

export default Physics