const checkButton = document.getElementById("check-btn");
const userInput = document.getElementById("text-input");
const resultText = document.getElementById("result");

function isAPalindrome(input) {
  const reverseInput = input.split("").reverse().join("");
  return (input === reverseInput) ? true : false;

}
function updateResult(result) {
  resultText.style.display = "block";
  if (result) {
    resultText.innerText = `${userInput.value} is a Palindrome.`;
  } else {
    resultText.innerText = `${userInput.value} is not a Palindrome.`
  }
  userInput.value="";
  return;
}

function cleanInput(input) {
  return input.replace(/[^A-Za-z1-9]/g, "").toLowerCase();
}

function checkInput() {
  if (!userInput.value) { 
    alert("Please input a value");
    return;
  }
  const cleanedInput = cleanInput(userInput.value);

  const checkPalindrome = isAPalindrome(cleanedInput);

  updateResult(checkPalindrome);

  return;
}

checkButton.addEventListener("click", checkInput);
