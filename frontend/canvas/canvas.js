import Space from '../physics/space';
import CBody from '../physics/c_body';
import Vector from '../physics/vector';

export default () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const bodies = []
    bodies.push(new CBody(
        100000, new Vector([0, 0]), new Vector([0, 0])))
    bodies.push(new CBody(10, 
        new Vector([5, -70]), 
        new Vector([.005, 0]), 'red'));
    bodies.push(new CBody(5, 
        new Vector([0, 50]), 
        new Vector([-.01, 0]), 'blue'));
    bodies.push(new CBody(900, 
        new Vector([0, -80]), 
        new Vector([.005, 0]), 'green'));
    const space = new Space(bodies)
    // space.drawAll(ctx);
    space.stepAtInterval(1, ctx)
};