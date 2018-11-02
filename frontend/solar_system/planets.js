const planets = []

const sun = {
  name: "Sun",
  mass: Number("2E30"),
  orbit: 0,
  orbitSpeed: 0,
  color: "yellow",
  order: 0,
  img:
    'https://cdn.pixabay.com/photo/2015/06/26/18/48/mercury-822825_960_720.png'
};
planets.push(sun)

const mercury = {
    name: 'Mercury',
    orbit: Number('5.79e10'),
    orbitSpeed: 47362,
    mass: Number('3.3e23'),
    color: '#F3D43C',
    order: 1,
    img: 'https://cdn.pixabay.com/photo/2015/06/26/18/48/mercury-822825_960_720.png'
}
planets.push(mercury)

const venus = {
  name: "Venus",
  orbit: Number("1.08e11"),
  orbitSpeed: 35020,
  mass: Number("4.87e24"),
  color: "#DFEE4B",
  order: 2,
  img: "https://cdn.pixabay.com/photo/2011/12/13/14/39/venus-11022_960_720.jpg"
};
planets.push(venus)

const earth = {
    name: "Earth",
    orbit: Number("1.49e11"),
    orbitSpeed: 29783,
    mass: Number("5.97e24"),
    color: '#2A70EB',
    order: 3,
    img: "https://cdn.pixabay.com/photo/2011/12/13/14/28/earth-11009_960_720.jpg"
};
planets.push(earth)

const mars = {
    name: "Mars",
    orbit: Number("2.27e11"),
    orbitSpeed: 24077,
    mass: Number("6.4169e23"),
    color: '#E27935',
    order: 4,
    img: 'https://cdn.pixabay.com/photo/2011/12/13/14/30/mars-11012_960_720.jpg'
};
planets.push(mars)

const jupiter = {
    name: "Jupiter",
    orbit: Number("7.78e11"),
    orbitSpeed: 13056,
    mass: Number("1.89e27"),
    color: '#D14C3A',
    order: 5,
    'https://en.wikipedia.org/wiki/Jupiter#/media/File:Jupiter_and_its_shrunken_Great_Red_Spot.jpg'
};
planets.push(jupiter)

const Saturn = {
    name: "Saturn",
    orbit: Number("1.42e12"),
    orbitSpeed: 9639,
    mass: Number("5.6e26"),
    color: '#EBCF80',
    order: 6,
    img: 'https://cdn.pixabay.com/photo/2012/11/28/10/54/saturn-67671_960_720.jpg'
};
planets.push(Saturn)

const Uranus = {
    name: "Uranus",
    orbit: Number("2.87e12"),
    orbitSpeed: 6799,
    mass: Number("8.68e25"),
    color: '#61DEE7',
    order: 7,
    img: 'https://cdn.pixabay.com/photo/2012/01/09/10/56/uranus-11625_960_720.jpg'
};
planets.push(Uranus)

const Neptune = {
    name: "Neptune",
    orbit: Number("4.49e12"),
    orbitSpeed: 5434,
    mass: Number("1.02e26"),
    color: '#5559EE',
    order: 8,
    img: 'https://cdn.pixabay.com/photo/2012/11/28/09/17/neptune-67537_960_720.jpg'
};
planets.push(Neptune)

export default planets