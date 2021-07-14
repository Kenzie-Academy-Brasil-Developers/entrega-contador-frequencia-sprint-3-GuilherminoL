const button = document.getElementById("countButton");


button.addEventListener("click", function() {  
    const wordDiv = document.getElementById("wordsDiv");
    const letters = document.getElementById("lettersDiv");
    const letterCounts = {};
    const words = {}
    wordDiv.classList.remove("hidden")
    letters.classList.remove("hidden")
    wordDiv.innerText = ''
    letters.innerText =''

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

    let newTitle = document.createElement("h1")
    newTitle.innerText = 'Letras:'
    letters.appendChild(newTitle)

    for (let letter in letterCounts) { 

        if (letter === ' ') continue

        const span = document.createElement("span"); 
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent + ' '; 
        
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
    newTitle = document.createElement("h1")
    newTitle.innerText = 'Palavras:'
    wordDiv.appendChild(newTitle)
    for(word in words){

        const span = document.createElement("span"); 
        const textContent = `"${word}": ${words[word]}, `;
        span.innerText = textContent + ' '; 
        
        wordDiv.appendChild(span); 

    }
});
