const fs = require('fs')

function inputDataLinesIntegers(filename="input.txt") {
    return fs.readFileSync(filename).toString().trim().split("\n").map((x)=>parseInt(x))
}

const determineIncrease = (data) => {
    let increasedCount = 0;
    let i = 1;
    do {
        if (data[i-1] < data[i]) {
            increasedCount+=1
        }
        i++
    } while (i < data.length); 
    return increasedCount;
}

function getSolutionPart1() {
    return determineIncrease(inputDataLinesIntegers())
}

const determineWindowIncrease = (data) => {
    let i = 1;
    let prevSetValue = data[0] + data[1] + data[2];
    let increasedCount = 0;
    do {
        const setValue = data[i] + data[i+1] + data[i+2]
        if (prevSetValue < setValue) {
            increasedCount+=1
        }
        prevSetValue = setValue;
        i++;
    } while (i < data.length - 2);
    return increasedCount;
}

function getSolutionPart2() {
    return determineWindowIncrease(inputDataLinesIntegers()) 
}

const part = process.env.part || "part1"

if (part === "part1")
    console.log(getSolutionPart1())
else
    console.log(getSolutionPart2())

module.exports = {
    getSolutionPart1, getSolutionPart2, inputDataLinesIntegers
}