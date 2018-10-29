class Vector {
    constructor(options) {
        const {dimensions, vectors} = options;
        this.components = []
        if (vectors) {
            this.components = Array.from(vectors)
        } else {
            dimensions = dimensions || 1
            for (let idx = 0; idx < dimensions; idx++) {
                this.components.push(0)
            }
        }
    }
}


export default Vector;