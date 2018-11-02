import planets from '../solar_system/planets';

const c = {
    G: Number("6.674e-11"),
    week: 604800,
    AU: Number("1.49e11"),   
    solarMass: Number("2e30"),
    scaleG: (mass, distance, time) => {
        let G = c.G;
        G *= mass;
        G /= (distance * distance * distance);
        G *= (time * time);
        return G;
    },
    scaleSpeed: (speed, distance, time) => (speed * time / distance),
    solarMasses: (kg) => (kg / c.solarMass),
    scalePlanet: (planet) => {
        planet.orbit = planet.orbit / c.AU
        planet.orbitSpeed = c.scaleSpeed(planet.orbitSpeed, c.AU, 3600)
        planet.mass = c.solarMasses(planet.mass)
    }
};

planets.forEach(planet => {
    c.scalePlanet(planet)
})

c.planets = planets

export default c; 