import { readFileSync } from 'fs';

const reader = {
    readFileData: function(fileDir) {
        try {
            const data = readFileSync(fileDir, 'utf-8');
            return data;
        } catch (error) {
            throw Error(`Error: ${error}`);
        }
    }
};

// process data and store into a map where we can iterate over and retrieve the max result
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

