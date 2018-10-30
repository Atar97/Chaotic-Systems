import Space from '../physics/space';
import CBody from '../physics/c_body';
import Vector from '../physics/vector';

export default () => document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const bodies = []
    bodies.push(new CBody(
        100, new Vector([0, 0]), new Vector([0, 0]), new Vector([0, 0])))
    bodies.push(new CBody
        (1, new Vector([100, 0]), new Vector([0, .01]), new Vector([0, 0])))
    const space = new Space(bodies)
    space.drawAll(ctx);
});