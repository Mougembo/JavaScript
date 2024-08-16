const passwordBox = document.getElementById("password");
const length = 16;
const upperCase = "AZERTYUIOPQSDFGHJKLMWXCVBN";
const lowerCase = "azertyuiopqsdfghjklmwcvbn";
const numbers = "0123456789";
const symbols = "&é#$^ù=+:/;.(§è!çà)-";
let generateBtn = document.querySelector("button")
let copyBtn = document.getElementById("copy")

const allChars = upperCase + lowerCase + numbers + symbols; 

function generatePassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    while (length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];

    }
    passwordBox.value = password;
}

generateBtn.addEventListener("click", ()=>{
    generatePassword()
})

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(passwordBox.value)
})
