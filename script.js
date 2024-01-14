// prettier-ignore
const characters = ["A","B","C","D","E","F","G","H",
"I","J","K","L","M","N","O","P","Q","R","S","T","U",
"V","W","X","Y","Z","a","b","c","d","e","f","g","h",
"i","j","k","l","m","n","o","p","q","r","s","t","u",
"v","w","x","y","z", "0", "1", "2", "3", "4", "5", 
"6", "7", "8", "9","~","`","!","@","#","$","%",
"^","&","*","(",")","_","-","+","=","{","[","}",
"]",",","|",":",";","<",">",".","?","/"];

const generatedPassFieldOne = document.querySelector("#generated-p-field1");
const generatedPassFieldTwo = document.querySelector("#generated-p-field2");
const generatePassButton = document.querySelector("#generate-p-btn");
const passLengthCB = document.querySelector("#passLengthCB");
const passLengthInput = document.querySelector("#passLengthInput");
const symbolsNumCB = document.querySelector("#symbolsNumCB");
const copyIconBtnOne = document.querySelector("#copy-icon-one");
const copyIconBtnTwo = document.querySelector("#copy-icon-two");

let passLength = 15;
let generatedPassOne;
let generatedPassTwo;
let isSymbolsNumsOn = true;

passLengthInput.value = passLength;

// Copying input field to clipboard
copyIconBtnOne.addEventListener("click", () => {
  copyTextToClipboard(generatedPassFieldOne);
});
copyIconBtnTwo.addEventListener("click", () => {
  copyTextToClipboard(generatedPassFieldTwo);
});

passLengthCB.addEventListener("change", () => {
  if (passLengthCB.checked) {
    passLength = 15;
    passLengthInput.value = passLength;
    passLengthInput.disabled = true;
    passLengthInput.classList.toggle("disabled");
  } else if (!passLengthCB.checked) {
    passLengthInput.disabled = false;
    passLengthInput.classList.toggle("disabled");
  }
});

passLengthInput.addEventListener("change", () => {
  passLength = passLengthInput.value;
});

symbolsNumCB.addEventListener("change", () => {
  if (symbolsNumCB.checked) {
    isSymbolsNumsOn = true;
  } else if (!symbolsNumCB.checked) {
    isSymbolsNumsOn = false;
  }
});

generatePassButton.addEventListener("click", () => {
  generatedPassOne = "";
  generatedPassTwo = "";
  for (let i = 0; i < passLength; i++) {
    generatedPassOne += generateRandomChar();
    generatedPassTwo += generateRandomChar();
  }

  generatedPassFieldOne.value = generatedPassOne;
  generatedPassFieldTwo.value = generatedPassTwo;
});

function copyTextToClipboard(generatedPassFieldEl) {
  let copyText = generatedPassFieldEl;
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  alert("Copied the text: " + copyText.value);
}

function generateRandomChar() {
  if (isSymbolsNumsOn) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  } else if (!isSymbolsNumsOn) {
    const filteredCharacters = characters.filter(isAlphabetLetter);
    let randomIndex = Math.floor(Math.random() * filteredCharacters.length);
    return filteredCharacters[randomIndex];
  }
}

function isAlphabetLetter(char) {
  return /[a-zA-Z]/.test(char);
}
