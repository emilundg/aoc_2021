const fs = require('fs');
const inputDataLinesIntegers = (filename="input.txt") => fs.readFileSync(filename).toString().trim().split("\n");

const determinePowerUsage = (data) => {
    let i = 0, gammaRate = "", epsilonRate = "";
    do {
        let j = 0, ones = 0, zeroes = 0;
        do {
            data[j][i] === "1" ? ones+=1 : zeroes+=1;
            j++;
        } while (j < 1000);
        if (ones > zeroes) {
            gammaRate+=1;
            epsilonRate+=0;
        } else {
            gammaRate+=0;
            epsilonRate+=1;
        }
        i++; 
    } while (i < 12);
    return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2); 
}

const getSolutionPart1 = () => determinePowerUsage(inputDataLinesIntegers());
const getSolutionPart2 = () => determineLifeSupport(inputDataLinesIntegers());

const part = process.env.part || "part1";
part === "part1" ? console.log(getSolutionPart1()) : console.log(getSolutionPart2());
module.exports = { getSolutionPart1, getSolutionPart2, inputDataLinesIntegers };