const fs = require('fs')

const inputDataLinesIntegers = (filename="input.txt") => fs.readFileSync(filename).toString().trim().split("\n")

const determineDirection = (data, withAim) => {
    let horizontalPosition = 0, depth = 0, aim = 0, i = 0;
    do {
        const currentData = data[i]
        const num = +data[i].split(" ")[1]
        const direction = currentData[0]
        if (direction === 'f') {
            horizontalPosition += num
            if (withAim) depth += (aim * num)
        } else if (direction === 'd') {
            withAim ? aim += num : depth += num
        } else if (direction === 'u') {
            withAim ? aim -= num : depth -=num
        }
       i++ 
    } while (i < data.length);
    return horizontalPosition * depth
}

const getSolutionPart1 = () => determineDirection(inputDataLinesIntegers(), false)
const getSolutionPart2 = () => determineDirection(inputDataLinesIntegers(), true) 

const part = process.env.part || "part1"
part === "part1" ? console.log(getSolutionPart1()) : console.log(getSolutionPart2())
module.exports = { getSolutionPart1, getSolutionPart2, inputDataLinesIntegers }