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
        this.bodies.forEach(body => {
            body.draw(ctx);
        });
    }

    toS() {
        
    }

    stepAtInterval(interval) {
        let i = 0;
        setInterval(() => {
            this.stepAll(.1)
            this.drawAll()
            i++ 
            // if (i % 100 == 0) {
            //     const sun1 = this.bodies[0].x.components;
            //     const sun2 = this.bodies[1]
            //     const sun2x = sun2.x.components;
            //     // const distx = sun1[0] - sun2x[0]
            //     // const disty = sun1[1] - sun2x[1]
            //     // console.log(Math.sqrt(distx*distx + disty*disty))
            //     // console.log(sun1)
            //     console.log(sun2x)
            //     console.log(sun2.v.dotProduct(sun2.a))
            //     // console.log()
            //     // const pos = this.bodies[1].x.components
            //     const distance = Math.sqrt(sun2x[0]*sun2x[0] + sun2x[1]*sun2x[1])
            // }
        }, interval)
    }
}

export default Space;