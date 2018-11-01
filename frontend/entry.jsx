import Space from './physics/space';
import Vector from './physics/vector';
import CBody from './physics/c_body';
import BodyForm from './forms/body_form'
import StarForm from './forms/star_form';
import solarSystem from './physics/solar_system';

document.addEventListener("DOMContentLoaded", () => {
    const bodyContext = document.getElementById('bodies').getContext('2d');
    const space = new Space([], bodyContext, [800, 500]) 
    const bodyForm = new BodyForm(space)
    const starForm = new StarForm(space)
    // drawBodies(solarSystem);
    space.stepAtInterval(1)
})

