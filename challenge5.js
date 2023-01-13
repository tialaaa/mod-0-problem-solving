// For each challenge you complete, include comments showing the overall goal in your own words, your pseudocode, and your final solution.

// Challenge 5: Start with an array of travel destinations. Print every travel destination in alphabetical order embedded in a sentence using string interpolation. For example, if the destination is "New York City", print something like "The next place I want to visit is New York City!"

// GOAL: Alphabetically sort a list of places and print those places individually within a phrase.
// Start with string array arranged in random order.
// Sort the array alphabetically.
// Use for statement to print an interpolated phrase for each string in the array.

var travelDestination = ["Greece", "Croatia", "Costa Rica", "Hawaii"];

var destinationsSort = travelDestination.sort();
// console.log(destinationsSort)

for (var i = 0; i < travelDestination.length; i++ ) {
  console.log(`The next place I want to visit is ${destinationsSort[i]}!`)
}

