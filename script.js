const button = document.getElementById("countButton");
const letterCounts = {};
const words = {}

button.addEventListener("click", function() {  

    let typedText = document.getElementById('textInput').value
    typedText = typedText.toLowerCase();
    typedText = typedText.replace(/[^a-z'\s]+/g, ""); 

    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];
    
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1; 
         }

        else { 
            letterCounts[currentLetter]++; 
         }
    }

    for (let letter in letterCounts) { 

        if (letter === ' ') continue

        const span = document.createElement("span"); 
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent + ' '; 
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span); 
    }
    
    typedText = typedText.split(' ')

    for (let i = 0; i < typedText.length; i++){

        if (typedText[i] === '') continue;

        if (words[ typedText[i] ] === undefined){
            words[ typedText[i] ] = 1
        }

        else{
            words[ typedText[i] ]++
        }

    }

    for(word in words){

        const span = document.createElement("span"); 
        const textContent = `"${word}": ${words[word]}, `;
        span.innerText = textContent + ' '; 
        const letters = document.getElementById("wordsDiv");
        letters.appendChild(span); 

    }
});
