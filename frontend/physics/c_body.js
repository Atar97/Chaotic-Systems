import Vector from './vector'
import constants from './constants';
window.c = constants

class CBody {
    constructor(mass, initPos, initVel, color, canvasTransform) {
        this.mass = mass || 1 
        this.s = initPos || new Vector([0, 0])
        this.v = initVel || new Vector([0, 0])
        this.f = new Vector([0,0])
        this.color = color || 'yellow';
        this.G = constants.scaleG(
            constants.solarMass,
            constants.AU, 
            3600);
    }

    move(t) {
        const vX = this.v.scale(t)
        const a = this.f.scale(1 / this.mass)
        const aX = a.scale(t*t*.5)
        this.v = this.v.add(a.scale(t))
        this.s = this.s.add(aX).add(vX)
        return this 
    }

    calculateForce(otherBody) {
        // this is the force and direction of the force being applied to this 
        // body by the other body 
        const distanceVector = otherBody.s.subtract(this.s)
        const r = distanceVector.magnitude()
        const scale = this.G * (this.mass * otherBody.mass) / (r*r*r)
        return distanceVector.scale(scale)
    }

    updateForce(otherBody) {
        this.f = this.f.add(this.calculateForce(otherBody))
        return this
    }

    resetForce() {
        this.f = new Vector([0,0])
        this.a = new Vector([0,0])
        return this
    }

    canvasTransform(canvasDimensions) {
        let radius;
        if (this.mass < 0.000004) {
          radius = 1;
        } else if (this.mass < .001) {
          radius = 2;
        } else if (this.mass <= .6) {
            radius = 3;
        } else if (this.mass <= 1) {
            radius = 4;
        } else if (this.mass < 10){
            radius = 10;
        } else if (this.mass < 25) {
            radius = 15;
        } else if (this.mass < 40) {
            radius = 20;
        } else if (this.mass < 60) {
            radius = 25;
        } else {
            radius = 30;
        }
        return {
            x: (this.s.components[0]*10 + canvasDimensions[0]/2),
            y: (this.s.components[1]*10 + canvasDimensions[1]/2),
            radius
        }
    }

    draw(ctx, dimensions) {
        const {x, y, radius} = this.canvasTransform(dimensions);
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2*Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill()
    }

}

export default CBody