import CBody from './c_body';
import Vector from './vector';

const bodies = []
bodies.push(new CBody(5, new Vector([100]), new Vector([0]), new Vector([-9.8])))

window.bodies = bodies 

for (let i = 0; i < 10; i++) {
    bodies[0].updateAcceleration(new Vector([1]))
}
