// For each challenge you complete, include comments showing the overall goal in your own words, your pseudocode, and your final solution.

// Challenge 1: Given an array of strings,
// return only the strings that have exactly 4 characters.

// GOAL: From a list of strings, print only those string w/ 4 characters.
// Create an array of strings with various lengths with at least one string === 4 characters.
// Create an if statement that checks string.length, and put it within a for loop so we can check every string in the array.
// Print only strings === 4 characters.

var foodsInFridge = ["milk", "cheese", "onion", "meat", "fish", "apples", "lettuce"];

for (var i = 0; i < foodsInFridge.length; i++ ) {
    if (foodsInFridge[i].length === 4 ) {
        console.log(foodsInFridge[i]);
    };
}