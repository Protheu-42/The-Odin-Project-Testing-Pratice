export function cesarCipher(string, cipherNumber) {
  let outputString = [];
  for (let i = 0; i < string.length; i++) {
    // if a letter do the cipher, else leave it
    if (string.charAt(i).match(/[a-z]/i)) {
      let charToASCIICode = string.charCodeAt(i);
      charToASCIICode = charToASCIICode + cipherNumber;

      //ASCII for UpperCase letters start at 65 and ends at 90, if the cipher number go beyond he get back to 65
      while (charToASCIICode > 90 && charToASCIICode < 97) {
        charToASCIICode = charToASCIICode - 26;
      }

      //ASCII for LowerCase letters start at 97 and ends at 122, if the cipher number go beyond he get back to 97
      while (charToASCIICode > 122) {
        charToASCIICode = charToASCIICode - 26;
      }
      let codeToChar = String.fromCharCode(charToASCIICode);
      outputString.push(codeToChar);
    } else {
      outputString.push(string.charAt(i));
    }
  }
  return outputString.join("");
}
