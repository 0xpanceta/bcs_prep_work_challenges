function cipher(str) {
    const cipherMap = {"A" : "Q",
        "B" : "W",
        "C" : "E",
        "D" : "R",
        "E" : "T",
        "F" : "Y",
        "G" : "U",
        "H" : "I",
        "I" : "O",
        "J" : "P",
        "K" : "A",
        "L" : "S",
        "M" : "D",
        "N" : "F",
        "O" : "G",
        "P" : "H",
        "Q" : "J",
        "R" : "K",
        "S" : "L",
        "T" : "Z",
        "U" : "X",
        "V" : "C",
        "W" : "V",
        "X" : "B",
        "Y" : "N",
        "Z" : "M"}; //creates an object with the conversion table
    let toBeCiphered = str.split(''); //splits the string into an array of characters
    let cipheredArray = toBeCiphered.map(char => {
        return cipherMap[char] || char;
    }) // creates the ciphered message array, attributes to it the function that maps the array to the cipher conversion -> I have no idea how this is done, I don't get .map or =>
    return cipheredArray.join('') //turns the array back into a string
}

console.log(cipher("I HAVE A SECRET MESSAGE FOR YOU"))

function decipher(str) {
    const decipherMap = {"Q" : "A",
      "W" : "B",
      "E" : "C",
      "R" : "D",
      "T" : "E",
      "Y" : "F",
      "U" : "G",
      "I" : "H",
      "O" : "I",
      "P" : "J",
      "A" : "K",
      "S" : "L",
      "D" : "M",
      "F" : "N",
      "G" : "O",
      "H" : "P",
      "J" : "Q",
      "K" : "R",
      "L" : "S",
      "Z" : "T",
      "X" : "U",
      "C" : "V",
      "V" : "W",
      "B" : "X",
      "N" : "Y",
      "M" : "Z"}; //creates an object with the conversion table
    let toBeDeciphered = str.split(''); //splits the string into an array of characters
    let decipheredArray = toBeDeciphered.map(char => {
        return decipherMap[char] || char;
    })
    return decipheredArray.join('')
}

console.log(decipher("O IQCT Q LTEKTZ DTLLQUT YGK NGX"))


  