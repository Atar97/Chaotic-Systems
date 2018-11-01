const constants = {
    G: Number("6.674e-11"),
    EarthSpeed: 30000,
}

function scaleG(mass, distance, time) {
    const dist = Number(distance);
    const t = Number(time); 
    const m = Number(mass); 
    let G = constants.G;
    G *= m;
    G /= (dist*dist*dist);
    G *= (t*t);
    return G;
}

function scaleEarthSpeed(distance, time) {
    let speed = constants.EarthSpeed;
}

constants.solarSystemG = scaleG("2e30", "1.49e9", 1);
constants.solarSystemWeeksG = scaleG("2e30", "1.49e9", 604800);


export default constants; 