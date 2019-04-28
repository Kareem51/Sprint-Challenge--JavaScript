// 1. Copy and paste your prototype in here and refactor into class syntax.

class QuboidMaker {
    constructor(length, width, height){
        this.length = length
        this.width = width
        this.height = height
    }
    volume(){
        return this.length * this.width * this.height
    }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
}

class CubeMaker extends QuboidMaker {
    constructor(length){
        super(length)
    }
    volume(){
        return this.length * this.length * this.length
    }
    surfaceArea(){
        return 6 * (this.length * this.length)
    }
}

const quboid = new CuboidMaker(4, 5, 5)

const cube = new CubeMaker(5)

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
console.log(quboid.volume()); // 100
console.log(quboid.surfaceArea()); // 130
console.log(cube.volume()) // 125
console.log(cube.surfaceArea()) // 150