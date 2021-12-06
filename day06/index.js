const fs = require('fs');
const inputDataLinesIntegers = (filename="input.txt") => fs.readFileSync(filename).toString().trim().split(",");

const countFish = (data, count) => {
    let i = 0, j = 0, days = {"0": 0, "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0}; 
    do {
        days[data[i]] += 1;
        i++;
    } while (i < data.length);
    do {
        let k = 1, addValue = 0;
        do {
            if (k === 1) addValue = days[0];
            days[k-1] += days[k];
            days[k] = 0;
            k++;
        } while (k <= 8);
        days["0"] -= addValue;
        days["6"] += addValue;
        days["8"] = addValue;
        j++; 
    } while (j < count);
    return days["0"] + days["1"] + days["2"] + days["3"] + days["4"] + days["5"] + days["6"] + days["7"] + days["8"];
}

const getSolutionPart1 = () => countFish(inputDataLinesIntegers(), 80);
const getSolutionPart2 = () => countFish(inputDataLinesIntegers(), 256);

const part = process.env.part || "part1";
part === "part1" ? console.log(getSolutionPart1()) : console.log(getSolutionPart2());
module.exports = { getSolutionPart1, getSolutionPart2, inputDataLinesIntegers };