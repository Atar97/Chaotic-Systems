class Vector {
    constructor(vectors, dimensions) {
        this.components = []
        if (vectors) {
            this.components = Array.from(vectors)
        } else {
            const dimension = dimensions || 1
            for (let idx = 0; idx < dimension; idx++) {
                this.components.push(0)
            }
        }
        this.dimension = this.components.length
    }

    magnitude() {
        let squareSum = 0;
        this.components.forEach(comp => {
            squareSum += (comp*comp)
        })
        return Math.sqrt(squareSum)
    }

    add(otherVector) {
        if (this.dimension !== otherVector.dimension) {
            return null 
        }
        const newComponents = [];
        for (let i = 0; i < this.dimension; i++) {
            newComponents.push(this.components[i] + otherVector.components[i])
        }
        return new Vector(newComponents)
    }

    scalarMultiply(num) {
        return this.components.map(comp => {
            return comp*num
        })
    }
    scale(scalar) {
        return new Vector(this.scalarMultiply(scalar))
    }

    subtract(otherVector) {
        return this.add(otherVector.scale(-1))
    }

}

export default Vector;