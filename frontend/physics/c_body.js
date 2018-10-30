import Vector from './vector'

class CBody {
    constructor(mass, initPos, initVel, initAcc) {
        this.mass = mass || 1 
        this.x = initPos || new Vector([0, 0])
        this.v = initVel || new Vector([0, 0])
        this.a = initAcc || new Vector([0, 0])
        this.f = new Vector([0,0])
        // G = 6.674E-11 N*m^2/kg^2
        // I am setting G to 1 and will scale it appropriately if I want to display actual data about how things are moving around
        // my G is in ED from the sun ^3 / solar masses * s^2
        this.G = 0.0000000395;
        // this.G = 
    }

    move(t) {
        const vX = this.v.scale(t)
        const aX = this.a.scale(t*t)
        this.x = this.x.add(aX).add(vX)
        this.v = this.v.add(this.a.scale(t))
        return this 
    }

    updateAcceleration() {
        this.a = this.a.add(this.f.scale(1 / this.mass))
        return this
    }

    calculateForce(otherBody) {
        // this is the force and direction of the force being applied to this 
        // body by the other body 
        const distanceVector = otherBody.x.subtract(this.x)
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
        return this
    }

}

export default CBody