const fs = require('fs')

const determineIncrease = (data) => {
    let increasedCount = 0
    let i = 1;
    do {
        if (data[i-1] < data[i]) {
            increasedCount+=1
        }
        i++
    } while (i < data.length); 
    console.log(increasedCount)
}

fs.readFile('./testdata.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    const lines = data.split(/\r?\n/);
    determineIncrease(lines)
})