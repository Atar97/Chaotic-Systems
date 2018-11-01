const c = {
    G: Number("6.674e-11"),
    EarthSpeed: 30000,
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
    scaleEarthSpeed: (distance, time) => (c.EarthSpeed * time / distance),

};

export default c; 