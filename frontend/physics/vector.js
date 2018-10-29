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
        this.i = this.components[0]
        this.j = this.components[1]
        this.k = this.components[2]
        this.c = this.components
    }

    static make2DVector(x, y) {
        return new Vector([x, y])
    } 

    length() {
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
            newComponents.push(this.c[i] + otherVector.c[i])
        }
        return new Vector(newComponents)
    }
}

export default Vector;