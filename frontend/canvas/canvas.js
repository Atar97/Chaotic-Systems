import Space from '../physics/space';
import CBody from '../physics/c_body';
import Vector from '../physics/vector';

export default () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const bodies = []
    bodies.push(new CBody(
        1000, new Vector([0, 0]), new Vector([-.0001, 0]), new Vector([0, 0])))
    bodies.push(new CBody(1000, 
        new Vector([ 0,-200]), 
        new Vector([.0001, 0]), 
        new Vector([0, .00015])));
    const space = new Space(bodies)
    // space.drawAll(ctx);
    space.stepAtInterval(.01, ctx)
};