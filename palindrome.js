// This program checks if the user's input is a palindrome and 
// prints the reverse of the word.
// before running the program run npm install prompt-sync

var prompt = require('prompt-sync')();      //required for prompt method to work
var retryInput;

function palindromeChecker(){
    var wordInput = prompt('Enter a string: ');
    var lowercaseWord = wordInput.toLowerCase();
    var reverseWord = [];

    //Using JS inbuilt methods we can reverse the string and compare it to the string input
    //split() method splits each character in the string into an array 
    //reverse() method reverses the order of an array
    //join() method concatenates an element of an array together into a single string
    reverseWord = lowercaseWord.split('').reverse().join('');

    //checks if reverseWord is equal to the original user input
    if (reverseWord == lowercaseWord) {
        console.log("The string "+ lowercaseWord +" is a palindrome.");
        //prints the reverse of wordInput
        console.log("The reverse of " + lowercaseWord + " is " + reverseWord);
    } else {
        console.log("The string "+ lowercaseWord +" is not a palindrome.");
        //prints the reverse of wordInput
        console.log("The reverse of " + lowercaseWord + " is " + reverseWord);
        resetPrompt();
    }
}

// calls palindromeChecker method again based on whether user response to resetPrompt() is yes or no
//otherwise, remprompt. ask user if they want to retry again.
function resetOptions(retryInput) {
    if (retryInput === 'Yes' || retryInput === 'yes' || retryInput === 'y' || retryInput === 'Y') {
        palindromeChecker();
    } else if (retryInput === 'No' || retryInput === 'no' || retryInput === 'n' || retryInput === 'N') {
        console.log("Have a nice day! ");
    } else {
        resetPrompt();
    }
}

//prompts user to reset
function resetPrompt() {
    var retryInput = prompt("Would you like to retry? (Y/N) ");
    resetOptions(retryInput);
}

palindromeChecker();