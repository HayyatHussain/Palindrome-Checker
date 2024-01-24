// Get the DOM elements
const userInput = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const output = document.getElementById("result");

// Function to check if the user input is a palindrome
const palindrome = () => {
  // Regular Expression to check any input that is not a-z, A-Z and 0-9
  const regex = /[^a-zA-Z0-9]/g;
  // Replace user input (special characters) with an empty string
  const filteredInput = userInput.value.replace(regex, "");
  // Convert user input to lowercase for valid checking
  const lowerCaseStr = filteredInput.toLowerCase();
  // Reverse user input
  const reverseStr = lowerCaseStr.split("").reverse().join("");
  // Conditions to check user input validity
  if (lowerCaseStr.length == 0) {
    alert("Please input a value");
    return;
  } else if (lowerCaseStr == reverseStr) {
      output.innerText = `${userInput.value} is a palindrome`;
  } else {
    output.innerText = `${userInput.value} is not a palindrome`;
  }
}

// Run the afore mentioned function on click
button.addEventListener("click", () => {
  palindrome();
  userInput.value = "";
});

// Run the afore mentioned function on pressing enter
userInput.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Trigger the button element with a click
    button.click();
  }
});
