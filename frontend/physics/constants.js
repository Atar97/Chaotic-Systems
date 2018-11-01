const c = {
    G: Number("6.674e-11"),
    week: 604800,
    AU: Number("1.49e9"),   
    solarMass: Number("2e30"),
    scaleG: (mass, distance, time) => {
        let G = c.G;
        G *= mass;
        G /= (distance * distance * distance);
        G *= (time * time);
        return G;
    },
    scaleSpeed: (speed, distance, time) => (speed * time / distance),
    solarMasses: (kg) => (kg / c.solarMass)
};

// all of these are in si units

planets = []

const mercury = {
    name: 'Mercury',
    orbit: Number('5.79e10') ,
    orbitVelocity: 47362,
    mass: Number('3.3e23'),
    color: '#F3D43C'
}
planets.push(mercury)

const venus = {
    name: 'Venus',
    orbit: Number('1.08e11') ,
    orbitVelocity: 35020,
    mass: Number('4.87e24'),
    color: '#DFEE4B'
}
planets.push(venus)

const earth = {
  name: "Earth",
  orbit: Number("1.49e11"),
  orbitVelocity: 29783,
  mass: Number("5.97e24"),
  color: '#2A70EB'
};
planets.push(earth)

const mars = {
  name: "Mars",
  orbit: Number("2.27e11"),
  orbitVelocity: 24077,
  mass: Number("6.4169e23"),
  color: '#E27935'
};
planets.push(mars)

const jupiter = {
  name: "Jupiter",
  orbit: Number("7.78e11"),
  orbitVelocity: 13056,
  mass: Number("1.89e27"),
  color: '#D14C3A'
};
planets.push(jupiter)

const Saturn = {
  name: "Saturn",
  orbit: Number("1.42e12"),
  orbitVelocity: 9639,
  mass: Number("5.6e26"),
  color: '#EBCF80'
};
planets.push(Saturn)

const Uranus = {
  name: "Uranus",
  orbit: Number("2.87e12"),
  orbitVelocity: 6799,
  mass: Number("8.68e25"),
  color: '#61DEE7'
};
planets.push(Uranus)

const Neptune = {
  name: "Neptune",
  orbit: Number("4.49e12"),
  orbitVelocity: 5434,
  mass: Number("1.02e26"),
  color: '#5559EE'
};
planets.push(Neptune)



export default c; 