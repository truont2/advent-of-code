const { readFileSync } = require('fs');

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
    
    let sum = 0;

    for(let i = 0; i < data.length; i++) {
        let rucksack = data[i];
        let firstMap= {};
        let commonVal = "";
        for(let j = 0; j < Math.floor(rucksack.length / 2); j++) {
            firstMap[rucksack[j]] = i;
        }

        for(let k = Math.floor(rucksack.length / 2); k < rucksack.length; k++) {
            if(firstMap[rucksack.charAt(k)] !== undefined) {
                // found common item
                commonVal = rucksack.charAt(k);
            }
        }
        let val = getPriority(commonVal);
        sum+=val;
    }
    console.log(sum);
    return sum;
}

const getPriority = (letter) => {
    let map ={
        a: 1, 
        b: 2, 
        c: 3, 
        d: 4, 
        e: 5, 
        f: 6,
        g: 7, 
        h: 8, 
        i: 9, 
        j: 10, 
        k: 11, 
        l: 12, 
        m: 13, 
        n: 14, 
        o: 15, 
        p: 16, 
        q: 17, 
        r: 18, 
        s: 19, 
        t: 20, 
        u: 21, 
        v: 22, 
        w: 23, 
        x: 24, 
        y: 25, 
        z: 26,
        A: 27, 
        B: 28, 
        C: 29, 
        D: 30, 
        E: 31, 
        F: 32,
        G: 33, 
        H: 34, 
        I: 35, 
        J: 36, 
        K: 37, 
        L: 38, 
        M: 39, 
        N: 40, 
        O: 41, 
        P: 42, 
        Q: 43, 
        R: 44, 
        S: 45, 
        T: 46, 
        U: 47, 
        V: 48, 
        W: 49, 
        X: 50, 
        Y: 51, 
        Z: 52, 
    }
    return map[letter];
}

const getData = (fileDir) => {
    const fileData = reader.readFileData(fileDir);
    const data = processData(fileData);
    return data;
}
const results = getData('./input.txt');