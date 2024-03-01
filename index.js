// Function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
    return length * width;
}

// Function to display the result
function displayResult(area) {
    console.log("The area of the rectangle is: " + area);
}

// Function to prompt the user for a valid number
function promptForNumber(promptMessage) {
    var input;
    do {
        input = prompt(promptMessage);
    } while (isNaN(input) || input === null || input === "");
    return parseFloat(input);
}

// Main function to orchestrate the interaction
function main() {
    console.log("Welcome to the rectangle area calculator!");

    var length = promptForNumber("Enter the length of the rectangle:");
    var width = promptForNumber("Enter the width of the rectangle:");

    var area = calculateRectangleArea(length, width);
    
    displayResult(area);
}

// Call the main function to start the interaction
main();
