const fs = require('fs');
const inputDataLinesIntegers = (filename="input.txt") => fs.readFileSync(filename).toString().trim().split("\n");

const determinePowerUsage = (data) => {
    const dataLength = data.length;
    let i = 0, j = 0, indexArray = [0,0,0,0,0,0,0,0,0,0,0,0], gammaRateArray = [], epsilonRateArray = []; 
    do {
        do {
            if (data[i][j] === "1") indexArray[j]+=1;
            if (indexArray[j] > dataLength / 2) {
                gammaRateArray[j] = "1"
                epsilonRateArray[j] = "0"
            } else {
                gammaRateArray[j] = "0";
                epsilonRateArray[j] = "1";
            }
            j++;
        } while (j < data[i].length);
        j = 0;
        i++; 
    } while (i < dataLength);
    const gammaBinary = gammaRateArray.join("");
    const epsilonBinary = epsilonRateArray.join("");
    return parseInt(gammaBinary, 2) * parseInt(epsilonBinary, 2);
}

const getSolutionPart1 = () => determinePowerUsage(inputDataLinesIntegers());
const getSolutionPart2 = () => determinePowerUsage(inputDataLinesIntegers());

const part = process.env.part || "part1";
part === "part1" ? console.log(getSolutionPart1()) : console.log(getSolutionPart2());
module.exports = { getSolutionPart1, getSolutionPart2, inputDataLinesIntegers };