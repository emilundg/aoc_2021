const fs = require('fs')

function inputDataLinesIntegers(filename="input.txt") {
    return fs.readFileSync(filename).toString().trim().split("\n")
}

let horizontalPosition = 0;
let depth = 0;
const determineDirection = (data) => {
    let i = 0;
    do {
        const currentData = data[i]
        const direction = currentData[0]
        if (direction === 'f') {
            horizontalPosition += parseInt(data[i].split(" ")[1])
        } else if (direction === 'd') {
            depth += parseInt(data[i].split(" ")[1])
        } else if (direction === 'u') {
            depth -= parseInt(data[i].split(" ")[1])
        }
       i++ 
    } while (i < data.length);
}

function getSolutionPart1() {
    determineDirection(inputDataLinesIntegers())
    return horizontalPosition * depth
}

function getSolutionPart2() {
    return inputDataLinesIntegers() 
}

const part = process.env.part || "part1"

if (part === "part1")
    console.log(getSolutionPart1())
else
    console.log(getSolutionPart2())

module.exports = {
    getSolutionPart1, getSolutionPart2, inputDataLinesIntegers
}