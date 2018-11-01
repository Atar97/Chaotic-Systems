import Space from './physics/space';
import Vector from './physics/vector';
import CBody from './physics/c_body';
import drawBodies from "./canvas/bodies";
import BodyForm from './body_form'

document.addEventListener("DOMContentLoaded", () => {
    const bodies = [];
    bodies.push(new CBody(100000, new Vector([0, 0]), new Vector([0, 0])));
    bodies.push(new CBody(10, new Vector([
          5,
          -70
        ]), new Vector([0.005, 0]), "red"));
    bodies.push(new CBody(5, new Vector([
          0,
          50
        ]), new Vector([-0.01, 0]), "blue"));
    bodies.push(new CBody(900, new Vector([
          0,
          -80
        ]), new Vector([0.005, 0]), "green"));
    const space = new Space(bodies);
    const form = new BodyForm(space)
    drawBodies(space);
})

