import Space from '../physics/space';
import CBody from '../physics/c_body';
import Vector from '../physics/vector';

export default () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const bodies = []
    bodies.push(new CBody(
        100000, new Vector([0, 0]), new Vector([0, 0]), new Vector([0, 0])))
    bodies.push(new CBody(10, 
        new Vector([ 0,-50]), 
        new Vector([.005, 0]), 
        new Vector([0,0])));
    const space = new Space(bodies)
    // space.drawAll(ctx);
    space.stepAtInterval(1, ctx)
};