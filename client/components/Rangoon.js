import React from 'react'
import Matter from 'matter-js'
import rangoonImg from '../assets/sprites/rangoon.png'
import { StyleSheet, Text, View, Image } from 'react-native';

const Rangoon = props => {
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y

    const xBody = props.body.position.x - widthBody /2
    const yBody = props.body.position.y - heightBody /2

    const color = props.color
    return(
        <Image source={rangoonImg} style= {{
            
            position: 'absolute',
            left: xBody,
            top: yBody,
            width: widthBody,
            height: heightBody

        }}
        
        />
    )
}

export default (world, color, pos, size) => {

    // hitbox of crab
   const initialRangoon = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {
        label: 'rangoon',
        isStatic: true
    }
   )
   Matter.World.add(world, initialRangoon)

   return {
    body: initialRangoon,
    color,
    pos,
    renderer: <Rangoon/>
   }
}