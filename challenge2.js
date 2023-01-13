// For each challenge you complete, include comments showing the overall goal in your own words, your pseudocode, and your final solution.

// Challenge 2: Start with an array of strings with a mix of uppercase and lowercase letters. Print every word in all lowercase letters.

// GOAL: Print all letters in an array of strings as lowercase.
// Start with an array of strings with mixed cases.
// then console.log(all_elements.toLowerCase())

var disneyCharacters = ["miNNy", "Mickey", "gOOfY", "donald", "The Wizard"];

for ( var i = 0; i < disneyCharacters.length; i ++ ) {
    console.log(disneyCharacters[i].toLowerCase());
}
