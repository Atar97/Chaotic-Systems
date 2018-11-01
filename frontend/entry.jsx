import Space from './physics/space';
import Vector from './physics/vector';
import CBody from './physics/c_body';
import drawBodies from "./canvas/bodies";
import BodyForm from './forms/body_form'
import StarForm from './forms/star_form';
import solarSystem from './physics/solar_system';

document.addEventListener("DOMContentLoaded", () => {
    const space = new Space() 
    const bodyForm = new BodyForm(space)
    const starForm = new StarForm(space)
    drawBodies(solarSystem);
})

