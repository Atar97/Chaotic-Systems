import CBody from './c_body';
import Vector from './vector';
import constants from './constants';
import Space from './space';

const solarSystem = constants.planets.map(planet => {
    let direction;
    if (Math.random() > .5) {
        direction = -1
    } else {
        direction = 1
    }
    return new CBody(
        planet.mass,
        new Vector([0, planet.orbit * direction]),
        new Vector([direction * planet.orbitSpeed, 0]),
        planet.color
        )
})

class SolarSystem extends Space {
    constructor(context, dimensions) {
        super(context, dimensions, solarSystem)
    }

    
}


export default SolarSystem;