import Space from './space';
import CBody from './c_body';
import Vector from './vector';
import constants from './constants';

const solarSystem = new Space(constants.planets.map(planet => {
    new CBody(
        planet.mass,
        new Vector([0, planet.orbit]),
        new Vector([planet.orbitSpeed, 0]),
        planet.color
        )
}))

export default solarSystem;