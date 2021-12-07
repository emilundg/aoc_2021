const fs = require('fs');
const inputDataLinesIntegers = (filename="input.txt") => fs.readFileSync(filename).toString().trim().split(",");

let calcValues = {};
const increaseFactor = (steps) => {
    if (calcValues[steps]) return calcValues[steps];
    let i = 0, factor = 0;
    do {
        factor+=i;
        i++; 
    } while (i < steps);
    calcValues[steps] = factor;
    return factor; 
}
const alignCrabs = (data, withAlignmentFactor) => {
    let i = 0, fuelSpent;
    do {
        let j = 0, averageSteps = 0;
        do {
            const distance = Math.abs(data[j] - i);
            averageSteps+=distance;
            if (withAlignmentFactor) averageSteps+= increaseFactor(distance); 
            j++;
        } while (j < data.length);
        if (averageSteps < fuelSpent || i === 0) fuelSpent = averageSteps;
        i++;
    } while (i < data.length);
    return fuelSpent;
}

const getSolutionPart1 = () => alignCrabs(inputDataLinesIntegers(), false);
const getSolutionPart2 = () => alignCrabs(inputDataLinesIntegers(), true);

const part = process.env.part || "part1";
part === "part1" ? console.log(getSolutionPart1()) : console.log(getSolutionPart2());
module.exports = { getSolutionPart1, getSolutionPart2, inputDataLinesIntegers };