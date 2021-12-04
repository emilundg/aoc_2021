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

let oxygen = [], scrubber = [], cOc = 0, cSc = 0;
const determineOxygen = (data) => {
    while (oxygen.length !== 1) {
            let ones = [], zeroes = [], j = 0;
            do {
                if (data[j][cOc] === "1") {
                    ones.push(data[j]);
                } else {
                    zeroes.push(data[j]);
                }
                j++;
            } while (j < data.length);
            if (ones.length >= zeroes.length) {
                oxygen = ones;
            } else {
                oxygen = zeroes;
            }
            cOc++;
            determineOxygen(oxygen);
    }
}    

const determineScrubber = (data) => {
    while (scrubber.length !== 1) {
            let ones = [], zeroes = [], j = 0;
            do {
                if (data[j][cSc] === "1") {
                    ones.push(data[j]);
                } else {
                    zeroes.push(data[j]);
                }
                j++;
            } while (j < data.length);
            if (ones.length < zeroes.length) {
                scrubber = ones;
            } else {
                scrubber = zeroes;
            }
            cSc++;
            determineScrubber(scrubber);
    }
}    

const determineLifeSupport = (data) => {
    determineOxygen(data);
    determineScrubber(data);
    return parseInt(oxygen[0], 2) * parseInt(scrubber[0], 2);
}

const getSolutionPart1 = () => determinePowerUsage(inputDataLinesIntegers());
const getSolutionPart2 = () => determineLifeSupport(inputDataLinesIntegers());

const part = process.env.part || "part1";
part === "part1" ? console.log(getSolutionPart1()) : console.log(getSolutionPart2());
module.exports = { getSolutionPart1, getSolutionPart2, inputDataLinesIntegers };