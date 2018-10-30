import CBody from './c_body';
import Vector from './vector';

const bodies = []
bodies.push(new CBody(
    5, new Vector([0,0]), new Vector([0,0]), new Vector([0,0])))
bodies.push(new CBody
    (5, new Vector([2,0]), new Vector([0,0]), new Vector([0,0])))
bodies.push(new CBody(
    5, new Vector([1, 100]), new Vector([0,0]), new Vector([0,0])))

window.bodies = bodies 

