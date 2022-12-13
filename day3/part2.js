const fs = require("fs")
// Every rucksack has two compartments. Every word is split in half to represent first and second compartment.
const priorityList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

fs.readFile("./part2.txt", (err, data) => {
    // split the data into an array of strings
    const rucksacks = data.toString().split(/\r?\n/)

    // variable to keep track of score 
    let totalScore = 0

    // check every three rucksacks
    for (let i = 0; i < rucksacks.length; i+=3) {
        for (let char of rucksacks[i]) {
            const secondList = rucksacks[i + 1]
            const thirdList = rucksacks[i + 2]

            // check if the current character in the first ruck sack is included in the second and third rucksacks
            if (secondList.includes(char) && thirdList.includes(char)) {
                const index = alphabet.indexOf(char.toLowerCase())
                // if the current character is uppercase then update it to match the count otherwise keep it under 26
                if (char === char.toUpperCase()) {
                    totalScore += priorityList[index] + 26
                    break
                } else {
                    totalScore += priorityList[index]
                    break
                }
            }
        }
    }
    console.log(totalScore)
})