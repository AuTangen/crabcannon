import Matter from "matter-js"

const Physics = (entities, {touches, time, dispatch}) => {
    let engine = entities.physics.engine



   
    touches.filter(t => t.type === 'press' || 'click').forEach(t => {
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