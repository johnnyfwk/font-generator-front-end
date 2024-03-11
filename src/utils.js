export function convertText(text, fontName, fontCharacters) {
    const textCopy = text;

    if (fontName === "Morse Code") {
        return convertTextToMorseCode(textCopy, fontCharacters);
    } else if (fontName === "Braille") {
        return convertTextToBraille(textCopy, fontCharacters);
    } else {
        let convertedText = "";
        for (let character of text) {
            convertedText += fontCharacters[character] || character;
        }
        return convertedText;
    }
}

export function convertTextToBraille(text, characters) {
    let brailleString = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i].toLowerCase();
        if (characters.hasOwnProperty(char)) {
            brailleString += characters[char];
            if (char === ' ') {
                brailleString += ' ';
            }
        }
    }
    return brailleString;
}

export function convertTextToMorseCode(text, characters) {
    let morseCodeString = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i].toLowerCase();
        if (characters.hasOwnProperty(char)) {
            morseCodeString += characters[char] + ' ';
        }
    }
    return morseCodeString.trim();
}

export function removeNonAlphanumericAndSpaces(text) {
    const regex = /[^a-zA-Z0-9\s]/g;
    const result = text.replace(regex, '');  
    return result;
}

export function separateWords(text, separator) {
    const words = text.split(' ');  
    const separatedString = words.join(" " + separator + " ");  
    return separatedString;
}

export function separateCharacters(text, separator) {
    const words = text.split(' ');
    const arrayOfWords = [];
    for (let word of words) {
        arrayOfWords.push(word.split("").join(separator));
    }
    const result = arrayOfWords.join(" ");
    return result;
}

export function addPrefix(text, prefix) {
    return prefix + " " + text;
}

export function addSuffix(text, suffix) {
    return text + " " + suffix;
}

export function wordOpeningWrapper(text, openingWrapper) {
    const words = text.split(' ');
    const wrappedWords = words.map(word => `${openingWrapper}${word}`);
    const wrappedString = wrappedWords.join(' ');
    return wrappedString;
}

export function wordClosingWrapper(text, closingWrapper) {
    const words = text.split(' ');
    const wrappedWords = words.map(word => `${word}${closingWrapper}`);
    const wrappedString = wrappedWords.join(' ');
    return wrappedString;
}

export function characterOpeningWrapper(text, openingWrapper) {
    const modifiedString = text.replace(/(\w)/g, `${openingWrapper}$1`);
    return modifiedString;
}

export function characterClosingWrapper(text, closingWrapper) {
    const modifiedString = text.replace(/(\w)/g, `$1${closingWrapper}`);
    return modifiedString;
}

export function toUppercase(text) {
    return text.toUpperCase();
}

export function toLowercase(text) {
    return text.toLowerCase();
}

export function reverseText(text) {
    return text.split('').reverse().join('');
}

export function toCamelCase(text) {
    return text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
}

export function toPascalCase(text) {
    return text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase()).replace(/\s+/g, '');
}

export function toCapitalisation(text) {
    return text.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}

export function toURLFriendly(text) {
    return text.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
}

export function toCapitalisationOdd(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        if (i % 2 === 0) {
            result += text[i].toUpperCase();
        } else {
            result += text[i].toLowerCase();
        }
    }
    return result;
}

export function toCapitalisationEven(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        if (i % 2 === 0) {
            result += text[i].toLowerCase();
        } else {
            result += text[i].toUpperCase();
        }
    }
    return result;
}

export function toCapitalisationRandom(text) {
    const textCopy = text.toLowerCase();
    const indicesToCapitalise = [];
  
    let numberOfCharactersToCapitalise = Math.floor(Math.random() * textCopy.length) + 1;
    for (let i = 0; i < numberOfCharactersToCapitalise; i++) {
        const randomIndex = Math.floor(Math.random() * textCopy.length);
        if (!indicesToCapitalise.includes(randomIndex)) {
            indicesToCapitalise.push(randomIndex);
        }
    }

    let result = '';
    for (let i = 0; i < textCopy.length; i++) {
        if (indicesToCapitalise.includes(i)) {
            result += textCopy[i].toUpperCase();
        } else {
            result += textCopy[i];
        }
    }
    return result;
}