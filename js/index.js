const arrays = [1,2,3]
arrays[1] = 10
console.log(arrays);

const string = ["stringone", "stringtwo", "stringthree"]
string[3] = "stringfour"
console.log(string);

const numbers = [2,6,8,3,7]
let result = 0
for(let i = 0; i < numbers.length; i += 1){
    result += numbers[i]
}
console.log(result);

const randomNumbers = [1,2,3,4,5]

for(let i = 0; i < randomNumbers.length; i += 1){
    console.log(randomNumbers[i]);
}

const randomString = ["hello", "word", "string", "random", "string2"]

for(let i = 0; i < randomString.length; i += 1){
    if(randomString[i].length > 5){
        console.log(randomString[i]);
    }
}

const number = [1,4,6,9,2,10,28,15,40,8]
const biggestNumber = number[8]
console.log(biggestNumber);

for(let i = 0; i < number.length; i += 1){
    if(biggestNumber < number[i]){
        biggestNumber = number[i]
    }
    console.log(biggestNumber);
}

const findNumbers = [1,2,3,4,5,6,7,8,9,10]

for(let i = 0; i < findNumbers.length; i += 1){
    if(findNumbers[i] % 2 === 0){
        console.log(findNumbers[i]);
    }
}


