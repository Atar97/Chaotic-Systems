import { setInterval } from "timers";

// Earth distance from the sun 1.5E9
// Solar Mass 2E30
// Earth Mass = 3E-6 solar masses 
// G = 3.95E-8
class Space {
    constructor(bodies) {
        this.bodies = bodies || []
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

    updateAccelerations() {
        this.bodies.forEach(body => {
            body.updateAcceleration()
        })
    }

    resetForces() {
        this.bodies.forEach(body => {
            body.resetForce()
        })
    }

    stepAll(t) {
        this.updateForces()
        this.updateAccelerations()
        this.moveAll(t)
        this.resetForces()
        return this
    }

    drawAll(ctx) {
        ctx.clearRect(0, 0, 800, 500)
        this.bodies.forEach(body => {
            body.draw(ctx);
        });
    }

    toS() {
        
    }

    stepAtInterval(interval, ctx) {
        let i = 0;
        setInterval(() => {
            this.stepAll(10)
            this.drawAll(ctx)
            i++ 
        }, interval)
    }
}

export default Space;