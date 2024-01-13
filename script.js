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

let passLength = 15;
let generatedPassOne;
let generatedPassTwo;

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

function generateRandomChar() {
  let randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}
