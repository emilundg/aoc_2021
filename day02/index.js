const fs = require('fs')

function inputDataLinesIntegers(filename="input.txt") {
    return fs.readFileSync(filename).toString().trim().split("\n")
}

function getSolutionPart1() {
    return inputDataLinesIntegers()
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