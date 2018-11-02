import CBody from '../physics/c_body';
import Vector from '../physics/vector';
import constants from '../physics/constants';
import Space from '../physics/space';

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
        this.addEventListeners()
    }

    appendDetails(planetId) {
        const planet = constants.planets[planetId]
        debugger;
        const planetDetail = document.getElementById('planet-detail')
        planetDetail.getElementsByTagName('img')[0]
        .setAttribute('src', planet.img)
    }

    addEventListeners() {
        const planetList = document.getElementById('planet-list')
        for (let i = 0; i < planetList.childElementCount; i++) {
            planetList.children[i].addEventListener('click', event => {
                this.appendDetails(event.currentTarget.getAttribute('planet'));
            })
        }
    }
}


export default SolarSystem;