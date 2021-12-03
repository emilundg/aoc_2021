const fs = require('fs');
const inputDataLinesIntegers = (filename="input.txt") => fs.readFileSync(filename).toString().trim().split("\n");

const reorganizeData = (data) => {
    let i = 0, j = 0, verticalMap = [];
    do {
        do {
            const currentNumValue = data[i][j];
            verticalMap[j] ? verticalMap[j] += currentNumValue : verticalMap[j] = currentNumValue;
           j++; 
        } while (j < 12);
       j = 0;
       i++;
    } while (i < data.length);
    return verticalMap;
}

const reorganizedData = reorganizeData(inputDataLinesIntegers());
const determinePowerUsage = () => {
    let i = 0, j = 0, ones = 0, zeroes = 0, gammaRate = "", epsilonRate = "", valueIndexes = [];
    do {
        do {
            const value = reorganizedData[i][j];
            value === "1" ? ones+=1 : zeroes+=1;
            j++;
        } while (j < 1000);
        if (ones > zeroes) {
            gammaRate+="1";
            epsilonRate+="0";
        } else {
            gammaRate+="0";
            epsilonRate+="1";
        }
        j = 0, zeroes = 0, ones = 0;
        i++;
    } while (i < reorganizedData.length);
    return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2)
}

const getSolutionPart1 = () => determinePowerUsage();
const getSolutionPart2 = () => determinePowerUsage();

const part = process.env.part || "part2";
part === "part1" ? console.log(getSolutionPart1()) : console.log(getSolutionPart2());
module.exports = { getSolutionPart1, getSolutionPart2, inputDataLinesIntegers };