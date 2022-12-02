import { readFileSync } from 'fs';

// file reader
const reader = {
  readFileData: function (fileDir) {
    try {
      const data = fs.readFileSync(fileDir, "utf-8");
      return data;
    } catch (error) {
      throw Error(`Error: ${error}`);
    }
  },
};

// now need to find the top three calories
// can sort the results by decreasing order to get the top three
const processData = (fileData) => {
  let elfArr = [];

  const data = fileData.split(/\r?\n/);
  let subSum = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] !== "") {
      subSum += parseInt(data[i]);
    } else {
      elfArr.push(subSum);
      subSum = 0;
    }
  }

  let topThree = 0;
  let newArr = elfArr.sort(function (a, b) {
    return b - a;
  });

  for (let i = 0; i < 3; i++) {
    topThree += parseInt(newArr[i]);
  }
  return topThree;
};

const getData = (fileDir) => {
  const fileData = reader.readFileData(fileDir);
  const data = processData(fileData);
  return data;
};

const results = getData("./input.txt");
console.log(results);
