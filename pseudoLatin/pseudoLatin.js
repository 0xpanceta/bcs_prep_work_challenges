//I totally had to cheat and use chatGPT for help with this one

function makeLatin (sentence) {
    //Sets arrow function to say whether a character is punctuation or not
    const isPunctuation = char => ',.;:!?'.includes(char);
    //splits sentence into array of words, and starts the function using arrow function, using map so it'll be done on each word.
    let latinArray = sentence.split(' ').map(word => {
      //sets a variable to the last character
      let lastChar = word[word.length-1];
      //creates the variables for the word body (which will be useful if there is punctuation), the first character (which will be moved, and also will be used to see if it's a capitalized word), and punctuation, which we'll add after the `ay` if needed.
      let wordBody, firstChar, punctuation;
      //uses the isPunctuation function to see if the last character is punctuation
      if (isPunctuation(lastChar)) {
        //if it is, the word body should be the word except for the last character
        wordBody = word.slice(0, -1);
        //and punctuation is the last character
        punctuation = lastChar;
      } else {
        //if it's not, the word body is the entire word
        wordBody = word;
        //and punctuation is null, but we'll still use it later regardless
        punctuation = '';
      }

      //now we'll set firstChar as the first character
      firstChar = wordBody.charAt(0);
      //and create the translated word, with... the last characters of the word (all but the first), then the first character, then `ay`
      let latinWord = wordBody.substring(1) + firstChar + "ay";
      //now, if the firstchar is uppercase, then we'll lowercase everything, and capitalize the first letter
      if (firstChar === firstChar.toUpperCase()) {
        latinWord = latinWord.charAt(0).toUpperCase() + latinWord.slice(1).toLowerCase();
      }
      //and return the word plus its punctuation (or plus nothing if there is none)
      return latinWord + punctuation;

    })
    return latinArray.join(' ');
}

console.log(makeLatin("I, Julio, speak Latin!"))