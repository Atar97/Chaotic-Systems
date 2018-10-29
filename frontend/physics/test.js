import Vector from './vector'

const vectors = []
for (let i = 0; i < 5; i++) {
    vectors.push(Vector.make2DVector(Math.random() * i, Math.random() * i))
}

vectors.push(new Vector([10, -10]))
vectors.push(new Vector([16, -2]))
vectors.push(new Vector([3, 4]))

vectors.forEach(vector => {
    console.log(vector.components)
    console.log(vector.length())
})

window.vectors = vectors
