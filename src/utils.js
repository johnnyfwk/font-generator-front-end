// export function convertText(
//     text,
//     characters,
//     openingTextWrapper,
//     closingTextWrapper,
//     openingWordWrapper,
//     closingWordWrapper,
//     openingCharacterWrapper,
//     closingCharacterWrapper
// ) {
//     let convertedText = text;

//     if (characters) {
//         let newText = "";
//         for (let character of convertedText) {
//             newText += characters[character] || character;
//         }
//         convertedText = newText;
//     }

//     if (openingCharacterWrapper && closingCharacterWrapper) {
//         let wrapperText = "";
//         for (let character of convertedText) {
//             let wrapperCharacter = "";
//             if (character !== " ") {
//                 wrapperCharacter += openingCharacterWrapper + character + closingCharacterWrapper;
//             } else {
//                 wrapperCharacter += character;
//             }
//             wrapperText += wrapperCharacter;
//         }
//         convertedText = wrapperText;
//     }

//     if (openingWordWrapper && closingWordWrapper) {
//         const words = convertedText.split(' ');
//         let arrayOfWords = [];
//         for (let word of words) {
//             arrayOfWords.push(openingWordWrapper + word + closingWordWrapper)
//         }
//         convertedText = arrayOfWords.join(" ")
//     }

//     if (openingTextWrapper) {
//         convertedText = openingTextWrapper + convertedText;
//     }

//     if (closingTextWrapper) {
//         convertedText = convertedText + closingTextWrapper;
//     }

//     return convertedText;
// }

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