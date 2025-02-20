// QUESTION 1
// Declare and initialize an empty multidimensional array.
// (Array of arrays)

// ANSWER: 1

/*document.write("<h3>Empty multidimensional array:</h3> + "<br>");

let multiArray = [[], [], [], []];

document.write(multiArray.join(" ") + "<br>");*/


// QUESTION 2
// Declare and initialize a multidimensional array
// representing the following matrix:

// ANSWER: 2

/*document.write("<h3>Multidimensional array (Matrix):</h3> + "<br>");

let multidimensionalArray = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

document.write(multidimensionalArray[0] + "<br>");
document.write(multidimensionalArray[1] + "<br>");
document.write(multidimensionalArray[2] + "<br>");*/

// QUESTION 3
// Write a program to print numeric counting from 1 to 10.

// ANSWER: 3

/*document.write("<h3>Counting from 1 to 10:</h3> + "<br>");

for (let i = 1 ; i <= 10 ; i++) {
    document.write(i + "<br>");
}*/

// QUESTION 4
// Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// ANSWER: 4

/*document.write("<h3>Multiplication Table:</h3>" + "</br>");

let userNumber = +prompt("Enter a number to show its multiplication table:");

let userTableLength = +prompt("Enter length of multiplication table:");

for (let i = 1 ; i <= userTableLength ; i++) {
    document.write(userNumber + " x " + i + " = " + userNumber * i + "<br>");
}*/

// QUESTION 5
// Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// ANSWER: 5

/*document.write("<h3>Fruits:</h3> + "<br>");

let fruits = [
    "Apple", "Banana", "Orange", "Grapes", "Strawberry", 
    "Mango", "Pineapple", "Watermelon", "Peach", "Pear", 
    "Cherry", "Plum", "Kiwi", "Blueberry", "Raspberry", 
    "Blackberry", "Apricot", "Cantaloupe", "Honeydew", "Papaya", 
    "Guava", "Passionfruit", "Dragonfruit", "Lychee", "Pomegranate", 
    "Coconut", "Fig", "Date", "Persimmon", "Cranberry", 
    "Gooseberry", "Elderberry", "Currant", "Tangerine", "Clementine", 
    "Lemon", "Lime", "Grapefruit", "Kumquat", "Star Fruit", 
    "Jackfruit", "Durian", "Rambutan", "Soursop", "Mulberry", 
    "Boysenberry", "Loganberry", "Quince", "Nectarine"
];  

for (let i = 1 ; i <= fruits.length ; i++){
    document.write(fruits[i] + "<br>");

    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}*/

// QUESTION 6
// Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// ANSWER: 6

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

/*document.write("<h3>Counting:</h3>" + "<br>");

for (let i = 1 ; i <= 15 ; i++) {
    document.write(i + " ");
}

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

document.write("<br>");
document.write("<h3>Reverse Counting:</h3>" + "<br>");

for (let i = 10 ; i >= 1 ; i--){
    document.write(i + " ");
}

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

document.write("<br>");
document.write("<h3>Even Numbers:</h3>" + "<br>");

for (let i = 0 ; i <= 20 ; i += 2){
    document.write(i + " ");
}

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

document.write("<br>");
document.write("<h3>Odd Numbers:</h3>" + "<br>");

for (let i = 1 ; i <= 15 ; i++ ){
    console.log(i + " ");
    document.write(i + " ");
    i++;
}

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write("<br>");
document.write("<h3>Series:</h3>" + "<br>");

for (let i = 2 ; i <= 20 ; i += 2){
    document.write(i + "k ");
}*/


// QUESTION 7
// You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not.

// ANSWER: 7

/*let ourBakery = ["cake", "apple pie", "cookie", "chips", "patties"];

let userWants = prompt("Welcome to Aeiman's Bakery \nWhat do you want to order?");
userWants = userWants.toLowerCase();

let flag = false;

for (let i = 0 ; i < ourBakery.length ; i++){
    if (userWants === ourBakery[i]){
        flag = true;
        break;
    }
}
if(flag){
    document.write(userWants + " is available");
}
else{
    document.write("We are sorry. " + userWants + " is not available");
}

// if(userWants == ourBakery.length){
//     flag = true;
//     document.write(userWants + " " + "is available at" + " " + ourBakery)
// }
// else(flag == false)
//     document.write("We are sorry" + " " + userWants + " " + "is not available at our bakery")*/


// QUESTION 8
// Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

// ANSWER: 8

/*let numbers = [24, 53, 78, 91, 12];

let largestNumber = numbers[0];

for(let i = 0 ; i < numbers.length ; i++ ){
    if (largestNumber < numbers [i]){
        largestNumber = numbers [i]
    }
}
document.write("Largest number is = " + largestNumber)*/

// QUESTION 9
// Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12].

// ANSWER: 9

/*let num = [38, 54, 19, 7, 9]

let smallestNum = num[0];

for(let i = 0 ; i < num.length ; i++){
    if (smallestNum > num[i]){
        smallestNum = num[i]
    }
}
document.write("Smallest number is = " + smallestNum)*/

// QUESTION 10
// Write a program to print multiples of 5 ranging 1 to
// 100.

// ANSWER: 10

/*document.write("<h3>Multiples of 5:</h3>" + "<br>");

for (let i = 1 ; i <= 100 ; i++){
    if (i % 5 === 0){
        document.write(i + " , ");
    }
}*/