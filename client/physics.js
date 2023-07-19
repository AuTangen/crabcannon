import Matter from "matter-js"
import React, { useState, useEffect } from 'react'
import jump from './assets/music/jump.mp3'





const Physics = (entities, {touches, time, dispatch}) => {
    let engine = entities.physics.engine

    function jump() {
        new Audio(jump).play()
      }

    document.addEventListener('keydown', event => {
        if (event.code === 'Space') {
            
            Matter.Body.setVelocity(entities.Crab.body, {
                x:0,
                y: -8
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

    return entities
}

export default Physics