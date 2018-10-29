class Vector {
    constructor(options) {
        const {dimensions, vectors} = options;
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

    static make2DVector(x, y) {
        return new Vector({vectors: [x, y]})
    } 

    length() {
        let squareSum = 0;
        this.components.forEach(comp => {
            squareSum += comp*comp
        })
        return Math.sqrt(squareSum)
    }

    direction() {
        
    }
}

const vectors = []
for (let i = 0; i < 5; i++) {
    vectors.push(Vector.make2DVector(Math.random()*i, Math.random()*i))
}

vectors.push(new Vector({vectors: [10, -10]}))
vectors.push(new Vector({vectors: [16, -2]}))
vectors.push(new Vector({vectors: [3, 4]}))

window.vectors = vectors

export default Vector;