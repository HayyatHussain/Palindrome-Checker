const userInput = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const output = document.getElementById("result");


const palindrome = () => {
  const regex = /[^a-zA-Z0-9]/g;
  const filteredInput = userInput.value.replace(regex, "");
  const lowerCaseStr = filteredInput.toLowerCase();
  const reverseStr = lowerCaseStr.split("").reverse().join("");
  if (lowerCaseStr.length == 0) {
    alert("Please input a value");
    return;
  } else if (lowerCaseStr == reverseStr) {
      output.innerText = `${userInput.value} is a palindrome`;
  } else {
    output.innerText = `${userInput.value} is not a palindrome`;
  }
}

button.addEventListener("click", () => {
  palindrome();
  userInput.value = "";
});

userInput.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Trigger the button element with a click
    button.click();
  }
});
