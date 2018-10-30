import CBody from './c_body';
import Vector from './vector';
import Space from './space';

const bodies = []
bodies.push(new CBody(
    100, new Vector([0,0]), new Vector([0, 0]), new Vector([0,0])))
bodies.push(new CBody
    (1, new Vector([100, 0]), new Vector([0,.01]), new Vector([0,0])))
// bodies.push(new CBody(
//     5, new Vector([-10, 2]), new Vector([0,0]), new Vector([0,0])))

window.bodies = bodies 

window.space = new Space(bodies)


