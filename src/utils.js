export function convertText(text, characters, openingCharacterWrapper, closingCharacterWrapper, openingTextWrapper, closingTextWrapper) {
    let convertedText = text;

    if (characters) {
        let newText = "";
        for (let character of convertedText) {
            newText += characters[character] || character;
        }
        convertedText = newText;
    }

    if (openingCharacterWrapper && closingCharacterWrapper) {
        let wrapperText = "";
        for (let character of convertedText) {
            let wrapperCharacter = "";
            if (character !== " ") {
                wrapperCharacter += openingCharacterWrapper + character + closingCharacterWrapper;
            } else {
                wrapperCharacter += character;
            }
            wrapperText += wrapperCharacter;
        }
        convertedText = wrapperText;
    }

    if (openingTextWrapper) {
        convertedText = openingTextWrapper + convertedText;
    }

    if (closingTextWrapper) {
        convertedText = convertedText + closingTextWrapper;
    }
    
    return convertedText;
}