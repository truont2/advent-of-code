
const fs = require('fs');

const reader = {
    readFileData: function(fileDir) {
        try {
            const data = fs.readFileSync(fileDir, 'utf-8');
            return data;
        } catch (error) {
            throw Error(`Error: ${error}`);
        }
    }
};

// now need to find the top three calories
// can sort the results by decreasing order to get the top three
const getTopThree = (dataArr) => {
    let topThree = 0;
    dataArr.sort(function(a, b){return b - a});
    for(let i = 0; i < 3; i++) {
        topThree+= parseInt(dataArr[i]);
    }
    console.log(topThree, 'top');
    return topThree;
}


const processData = (fileData) => {
    let elfMap = {};
    let counter = 0;

    const data = fileData.split(/\r?\n/);
    let subSum = 0;
    for(let i = 0; i < data.length; i++) {
        if(data[i] !== ""){
            subSum+= parseInt(data[i]);
        } else {
            elfMap[counter] = subSum;
            subSum = 0;
            counter++;
        }
    }
    let maxElf = 0;

    for(const key in elfMap) {
        if(elfMap[key] > maxElf){
            maxElf = elfMap[key];
        }
    }

    return maxElf;
}

const getData = (fileDir) => {
    const fileData = reader.readFileData(fileDir);
    const data = processData(fileData);
    return data;
}
const results = getData('./input.txt');
console.log(results);

