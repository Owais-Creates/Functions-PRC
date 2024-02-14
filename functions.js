// Q1 - Write a function that takes two numbers as parameters and returns their sum.

const addTwoNumbers = (num1, num2) => {

    return num1 + num2;

}

console.log(addTwoNumbers(5, 5)); //OUTPUT - 10

// ---------------------------------------------------------------------------------------------------

// Q2 - Create a function that takes an array of numbers as input and returns the largest number in the array.

const largestNumber = (num) => {

    let maxNum = num[0];

    for (i = 1; i < num.length; i++) {
        if (num[i] > maxNum) {
            maxNum = num[i]
        }
    }

    return maxNum
}

const numArray = [10, 20, 200, 300, 50, 2, 3];
console.log(largestNumber(numArray)) // OUTPUT - 300

// ---------------------------------------------------------------------------------------------------

// Q3 - Write a function that takes a string as input and returns the reversed version of the string.

const reverseString = (str) => {

    str.split("");
    let reversedString = '';


    for (i = str.length - 1; i >= 0; i--) {

        reversedString += str[i]

    }

    return reversedString;
}

console.log(reverseString('Hello World')); // Output: "dlroW olleH"

// ---------------------------------------------------------------------------------------------------

// Q4 - Create a function that calculates the factorial of a given number.

const factorial = (num) => {

    let calculatedFactorial = 1;


    if (num < 1) {
        console.log("please input a positive number");
    } else {
        for (i = num; i > 1; i--) {

            calculatedFactorial = calculatedFactorial * i


        }
    }

    return calculatedFactorial

}

console.log(factorial(5)); // Output: 120

// ---------------------------------------------------------------------------------------------------

// Q5 - Write a function that takes an array of strings as input and returns a new array with the lengths of each string.

const calculateLength = (arr) => {

    for (i = 0; i < arr.length; i++) {

        let length = arr[i].length;
        console.log(`length of "${arr[i]}" is ${length}`);

    }

}

let array = ['hello', 'how are you']
calculateLength(array) // OUTPUT - length of "hello" is 5 , length of "how are you" is 11

// ---------------------------------------------------------------------------------------------------

// Q6 - Create a function that takes an array of numbers as input and returns the sum of all the numbers in the array.

const sumOfArray = (arr) => {

    let arrSum = 0;

    for (i = 0; i < arr.length; i++) {
        arrSum += arr[i];
    }

    return arrSum

}
sumArr = [1, 2, 4, 5, 6]
console.log(`The sum of Array is ${sumOfArray(sumArr)}`);

// ---------------------------------------------------------------------------------------------------

// Q7 - Write a function that takes a number as input and returns true if the number is even, and false otherwise.

const isItEven = (num) => {
    if (num % 2 == 0) {
        return true
    } else {
        return false
    }
}

console.log(isItEven(2)) //OUTPUT - True
console.log(isItEven(3)) //OUTPUT - False

// ---------------------------------------------------------------------------------------------------

// Q8 - Create a function that takes an array of numbers as input and returns a new array with only the even numbers from the original array.

const evenInArray = (arr) => {
    const evenArray = [];

    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evenArray.push(arr[i])
        }
    }

    return evenArray;

}

console.log(evenInArray([1, 2, 3, 4, 5, 6, 8])) // OUTPUT - [2, 4, 6, 8]

// ---------------------------------------------------------------------------------------------------

// Q9 - Write a function that takes two parameters: a string and a letter. The function should return the number of times the letter appears in the string.

const letterAppereance = (string, letter) => {

    string.split("");
    let count = 0;

    let newString = string.toLowerCase();
    let newLetter = letter.toLowerCase();

    for (i = 0; i < newString.length; i++) {
        if (newLetter.length > 1 || newString.length < 2) {
            console.log("invalid input of STRING OR LETTER");
            break

        } else if (newString[i] === newLetter) {
            count++
        }
    }

    if (count === 0) {
        console.log("The letter is not present");
    }

    console.log(` Count of ${newLetter} is ${count} `);
}

letterAppereance("owaiIiis", "I") // OUTPUT -  Count of i is 4 

// ---------------------------------------------------------------------------------------------------

// Q10 - Create a function that takes two arrays as input and returns a new array containing elements that are present in both arrays.

const similarElements = (arr1,arr2) => {

    const similars= [];

    for ( let i = 0; i < arr1.length; i++){
        
        for (let j = 0 ; j < arr2.length;j++){
          
          if ( arr1[i] == arr2[j] ){
            similars.push(arr1[i])
          }
          
        }

}
return similars
}

let arrOne = [1,2,3,4,5,6,7,8]
let arrTwo = [4,5,8]

console.log(similarElements(arrOne,arrTwo)) // OUTPUT - [4,5,8]

// ---------------------------------------------------------------------------------------------------






