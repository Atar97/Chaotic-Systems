import { setInterval } from "timers";

// Earth distance from the sun 1.5E9
// Solar Mass 2E30
// Earth Mass = 3E-6 solar masses 
// G = 3.95E-8
class Space {
    constructor(bodies = [], context, dimensions) {
        this.bodies = bodies
        this.ctx = context 
        this.dimensions = dimensions
    }

    add(cBody) {
        this.bodies.push(cBody)
    }

    moveAll(t) {
        this.bodies.forEach(body => {
            body.move(t)
        })
    }

    updateForces() {
        this.bodies.forEach((body1, idx1) => {
            this.bodies.forEach((body2, idx2) => {
                if (idx1 !== idx2) {
                    body1.updateForce(body2)
                }
            })
        })
    }

    resetForces() {
        this.bodies.forEach(body => {
            body.resetForce()
        })
    }

    stepAll(t) {
        this.updateForces()
        this.moveAll(t)
        this.resetForces()
        return this
    }

    drawAll() {
        this.ctx.clearRect(0, 0, this.dimensions[0], this.dimensions[1])
        this.bodies.forEach(body => {
            body.draw(this.ctx, this.dimensions);
        });
    }

    toS() {
        
    }

    stepAtInterval(interval) {
        let i = 0;
        setInterval(() => {
            this.stepAll(5)
            this.drawAll()
            i++ 
        }, interval)
    }
}

export default Space;