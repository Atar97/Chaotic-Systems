import { request } from "https";

class Space {
    constructor(context, dimensions, bodies = []) {
        this.bodies = bodies;
        this.ctx = context;
        this.dimensions = dimensions;
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
        requestAnimationFrame(this.drawAll.bind(this))
    }

    integrate(stepSize) {
        this.stepAll(stepSize);
        if (!this.handle) {
            this.handle = setTimeout(() => this.integrate(stepSize), 0);
        }
    }

    stopIntegration() {
        clearTimeout(this.handle);
        this.handle = null;
    }

    animate() {
        requestAnimationFrame(this.drawAll.bind(this))
    }

}

export default Space;