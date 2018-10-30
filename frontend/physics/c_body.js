import Vector from './vector'

class CBody {
    constructor(mass, initPos, initVel, initAcc) {
        this.mass = mass || 1 
        this.x = initPos || new Vector([0, 0])
        this.v = initVel || new Vector([0, 0])
        this.a = initAcc || new Vector([0, 0])
    }

    move(t) {
        const vX = this.v.scale(t)
        const aX = this.a.scale(t*t)
        this.x = this.x.add(aX).add(vX)
        this.v = this.v.add(this.a.scale(t))
        return this 
    }

    updateAcceleration(force) {
        this.a = this.a.add(force.scale(1 / this.mass))
        return this
    }

}

export default CBody