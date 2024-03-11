import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import * as utils from '../utils';
import SeparatorsAndWrappers from "../components/SeparatorsAndWrappers";
import { allFonts } from "../content/fonts";

export default function Home() {
    const placeholderText = "Enter your text to see it in different fonts";

    const [ inputText, setInputText ] = useState("");
    const [ outputText, setOutputText ] = useState(placeholderText);
    const [ selectCopyButtonIndex, setSelectCopyButtonIndex ] = useState(null);

    const [ isReverseText, setIsReverseText ] = useState(false);
    const [ isUppercase, setIsUppercase ] = useState(false);
    const [ isLowercase, setIsLowercase ] = useState(false);
    const [ isCapitalisation, setIsCapitalisation ] = useState(false);
    const [ isCapitalisationOdd, setIsCapitalisationOdd ] = useState(false);
    const [ isCapitalisationEven, setIsCapitalisationEven ] = useState(false);
    const [ isCapitalisationRandom, setIsCapitalisationRandom ] = useState(false);
    const [ isCamelCase, setIsCamelCase ] = useState(false);
    const [ isPascalCase, setIsPascalCase ] = useState(false);
    const [ isURLFriendly, setIsURLFriendly ] = useState(false);

    const selectedSeparatorLabel = "";
    const [ selectedSeparator, setSelectedSeparator ] = useState("");
    const [ isSeparateWords, setIsSeparateWords ] = useState(false);
    const [ isSeparateCharacters, setIsSeparateCharacters ] = useState(false);

    const selectedPrefixLabel = "Prefix:";
    const [ selectedPrefix, setSelectedPrefix ] = useState("");

    const selectedSuffixLabel = "Suffix:";
    const [ selectedSuffix, setSelectedSuffix ] = useState("");
    
    const selectedOpeningWrapperLabel = "Opening wrapper:";
    const [ selectedOpeningWrapper, setSelectedOpeningWrapper ] = useState("");

    const selectedClosingWrapperLabel = "Closing wrapper:";
    const [ selectedClosingWrapper, setSelectedClosingWrapper ] = useState("");
    
    const [ isWordWrapper, setIsWordWrapper ] = useState(false);
    const [ isCharacterWrapper, setIsCharacterWrapper ] = useState(false);

    useEffect(() => {
        let text;

        if (!inputText) {
            text = placeholderText;
        } else {
            text = inputText;
        }

        if (isReverseText) {
            text = utils.reverseText(text);
        }
        if (isUppercase) {
            text = utils.toUppercase(text);
        }
        if (isLowercase) {
            text = utils.toLowercase(text);
        }
        if (isCapitalisation) {
            text = utils.toCapitalisation(text);
        }
        if (isCapitalisationOdd) {
            text = utils.toCapitalisationOdd(text);
        }
        if (isCapitalisationEven) {
            text = utils.toCapitalisationEven(text);
        }
        if (isCapitalisationRandom) {
            text = utils.toCapitalisationRandom(text);
        }
        if (isCamelCase) {
            text = utils.toCamelCase(text);
        }
        if (isPascalCase) {
            text = utils.toPascalCase(text);
        }
        if (isURLFriendly) {
            text = utils.toURLFriendly(text);
        }
        if (selectedSeparator && isSeparateCharacters) {
            text = utils.separateCharacters(text, selectedSeparator);
        }
        if (selectedOpeningWrapper && isWordWrapper) {
            text = utils.wordOpeningWrapper(text, selectedOpeningWrapper);
        }
        if (selectedClosingWrapper && isWordWrapper) {
            text = utils.wordClosingWrapper(text, selectedClosingWrapper);
        }
        if (selectedSeparator && isSeparateWords) {
            text = utils.separateWords(text, selectedSeparator);
        }
        if (selectedOpeningWrapper && isCharacterWrapper) {
            text = utils.characterOpeningWrapper(text, selectedOpeningWrapper);
        }
        if (selectedClosingWrapper && isCharacterWrapper) {
            text = utils.characterClosingWrapper(text, selectedClosingWrapper);
        }
        if (selectedPrefix) {
            text = utils.addPrefix(text, selectedPrefix);
        }
        if (selectedSuffix) {
            text = utils.addSuffix(text, selectedSuffix);
        }
        setOutputText(text);
    }, [
        inputText,
        isUppercase,
        isLowercase,
        isReverseText,
        isCapitalisation,
        isCapitalisationOdd,
        isCapitalisationEven,
        isCapitalisationRandom,
        isCamelCase,
        isPascalCase,
        isURLFriendly,
        selectedSeparator,
        isSeparateWords,
        isSeparateCharacters,
        selectedPrefix,
        selectedSuffix,
        selectedOpeningWrapper,
        selectedClosingWrapper,
        isWordWrapper,
        isCharacterWrapper
    ])

    function handleInputText(event) {
        setInputText(event.target.value);
        if (event.target.value) {
            setOutputText(event.target.value);
        } else {
            setOutputText(placeholderText);
        }
    }

    function handleClearTextButton() {
        setInputText("");
    }

    function copyFontToClipboard(text, buttonIndex) {
        setSelectCopyButtonIndex(buttonIndex)
        navigator.clipboard.writeText(text);
        setTimeout(() => setSelectCopyButtonIndex(null), 3000);
    };

    function handleReverseText() {
        setIsReverseText((currentTextReversedValue) => !currentTextReversedValue);
    }

    function handleUppercase() {
        setIsUppercase((currentUppercaseValue) => !currentUppercaseValue);
        setIsLowercase(false);
        setIsCapitalisation(false);
        setIsCapitalisationOdd(false);
        setIsCapitalisationEven(false);
        setIsCapitalisationRandom(false);
        setIsCamelCase(false);
        setIsPascalCase(false);
        setIsURLFriendly(false);
    }

    function handleLowercase() {
        setIsLowercase((currentLowercaseValue) => !currentLowercaseValue);
        setIsUppercase(false);
        setIsCapitalisation(false);
        setIsCapitalisationOdd(false);
        setIsCapitalisationEven(false);
        setIsCapitalisationRandom(false);
        setIsCamelCase(false);
        setIsPascalCase(false);
        setIsURLFriendly(false);
    }

    function handleCapitalisation() {
        setIsCapitalisation((currentCapitalisationValue) => !currentCapitalisationValue);
        setIsUppercase(false);
        setIsLowercase(false);
        setIsCapitalisationOdd(false);
        setIsCapitalisationEven(false);
        setIsCapitalisationRandom(false);
        setIsCamelCase(false);
        setIsPascalCase(false);
        setIsURLFriendly(false);
    }

    function handleCapitalisationOdd() {
        setIsCapitalisationOdd((currentCapitalisationOddValue) => !currentCapitalisationOddValue);
        setIsUppercase(false);
        setIsLowercase(false);
        setIsCapitalisation(false);
        setIsCapitalisationEven(false);
        setIsCapitalisationRandom(false);
        setIsCamelCase(false);
        setIsPascalCase(false);
        setIsURLFriendly(false);
    }

    function handleCapitalisationEven() {
        setIsCapitalisationEven((currentCapitalisationEvenValue) => !currentCapitalisationEvenValue);
        setIsUppercase(false);
        setIsLowercase(false);
        setIsCapitalisation(false);
        setIsCapitalisationOdd(false);
        setIsCapitalisationRandom(false);
        setIsCamelCase(false);
        setIsPascalCase(false);
        setIsURLFriendly(false);
    }

    function handleCapitalisationRandom() {
        setIsCapitalisationRandom((currentCapitalisationRandomValue) => !currentCapitalisationRandomValue);
        setIsUppercase(false);
        setIsLowercase(false);
        setIsCapitalisation(false);
        setIsCapitalisationOdd(false);
        setIsCapitalisationEven(false);
        setIsCamelCase(false);
        setIsPascalCase(false);
        setIsURLFriendly(false);
    }

    function handleCamelCase() {
        setIsCamelCase((currentCamelCaseValue) => !currentCamelCaseValue);
        setIsUppercase(false);
        setIsLowercase(false);
        setIsCapitalisation(false);
        setIsCapitalisationOdd(false);
        setIsCapitalisationEven(false);
        setIsCapitalisationRandom(false);
        setIsPascalCase(false);
        setIsURLFriendly(false);
    }

    function handlePascalCase() {
        setIsPascalCase((currentPascalCaseValue) => !currentPascalCaseValue);
        setIsUppercase(false);
        setIsLowercase(false);
        setIsCapitalisation(false);
        setIsCapitalisationOdd(false);
        setIsCapitalisationEven(false);
        setIsCapitalisationRandom(false);
        setIsCamelCase(false);
        setIsURLFriendly(false);
    }

    function handleURLFriendly() {
        setIsURLFriendly((currentURLFriendlyValue) => !currentURLFriendlyValue);
        setIsUppercase(false);
        setIsLowercase(false);
        setIsCapitalisation(false);
        setIsCapitalisationOdd(false);
        setIsCapitalisationEven(false);
        setIsCapitalisationRandom(false);
        setIsCamelCase(false);
        setIsPascalCase(false);
    }

    function handleSelectSeparator(event) {
        setSelectedSeparator(event.target.value);
    }

    function handleSeparateWordsCheckbox() {
        setIsSeparateWords((currentSeparateWordsValue) => !currentSeparateWordsValue);
        setIsSeparateCharacters(false);
    }

    function handleSeparateCharactersCheckbox() {
        setIsSeparateCharacters((currentSeparateCharactersValue) => !currentSeparateCharactersValue);
        setIsSeparateWords(false);
    }

    function handleSelectPrefix(event) {
        setSelectedPrefix(event.target.value);
    }

    function handleSelectSuffix(event) {
        setSelectedSuffix(event.target.value);
    }

    function handleSelectOpeningWrapper(event) {
        setSelectedOpeningWrapper(event.target.value);
    }

    function handleWordWrapperCheckbox() {
        setIsWordWrapper((currentWordWrapperValue) => !currentWordWrapperValue);
        setIsCharacterWrapper(false);
    }

    function handleSelectClosingWrapper(event) {
        setSelectedClosingWrapper(event.target.value);
    }

    function handleCharacterWrapperCheckbox() {
        setIsCharacterWrapper((currentCharacterWrapperValue) => !currentCharacterWrapperValue);
        setIsWordWrapper(false);
    }

    return (
        <div>
            <Helmet>
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://fontgenerator.co.uk/" />
                <title>Font Generator • FontGenerator.co.uk</title>
                <meta name="description" content="Copy and paste fonts with our font generator." />
            </Helmet>

            <header>
                <h1>Font Generator</h1>
                <p>Copy and paste fonts with our font generator.</p>
            </header>

            <main>
                <section>
                    <form>
                        <label htmlFor="input-text">Input your text:</label>

                        <textarea
                            id="input-text"
                            name="input-text"
                            value={inputText}
                            onChange={handleInputText}
                            placeholder={placeholderText}
                        ></textarea>

                        <div>
                            <button
                                type="button"
                                onClick={handleClearTextButton}
                            >Clear Text</button>
                        </div>

                        <fieldset>
                            <legend>Options</legend>
                            <div id="font-options">
                                <div>
                                    <input
                                        type="checkbox"
                                        id="reverse-text"
                                        name="reverse-text"
                                        value="Reverse Text"
                                        onChange={handleReverseText}
                                        checked={isReverseText}
                                    />
                                    <label htmlFor="reverse-text">Reverse Text</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="uppercase"
                                        name="uppercase"
                                        value="Uppercase"
                                        onChange={handleUppercase}
                                        checked={isUppercase}
                                    />
                                    <label htmlFor="uppercase">Uppercase</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="lowercase"
                                        name="lowercase"
                                        value="Lowercase"
                                        onChange={handleLowercase}
                                        checked={isLowercase}
                                    />
                                    <label htmlFor="lowercase">Lowercase</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="capitalisation"
                                        name="capitalisation"
                                        value="Capitalisation"
                                        onChange={handleCapitalisation}
                                        checked={isCapitalisation}
                                    />
                                    <label htmlFor="capitalisation">Capitalisation</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="capitalisation-odd"
                                        name="capitalisation-odd"
                                        value="Capitalisation Odd"
                                        onChange={handleCapitalisationOdd}
                                        checked={isCapitalisationOdd}
                                    />
                                    <label htmlFor="capitalisation-odd">Capitalisation (Odd)</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="capitalisation-even"
                                        name="capitalisation-even"
                                        value="Capitalisation Even"
                                        onChange={handleCapitalisationEven}
                                        checked={isCapitalisationEven}
                                    />
                                    <label htmlFor="capitalisation-even">Capitalisation (Even)</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="capitalisation-random"
                                        name="capitalisation-random"
                                        value="Capitalisation Random"
                                        onChange={handleCapitalisationRandom}
                                        checked={isCapitalisationRandom}
                                    />
                                    <label htmlFor="capitalisation-random">Capitalisation (Random)</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="camel-case"
                                        name="camel-case"
                                        value="Camel Case"
                                        onChange={handleCamelCase}
                                        checked={isCamelCase}
                                    />
                                    <label htmlFor="camel-case">Camel Case</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="pascal-case"
                                        name="pascal-case"
                                        value="pascal Case"
                                        onChange={handlePascalCase}
                                        checked={isPascalCase}
                                    />
                                    <label htmlFor="pascal-case">Pascal Case</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="url-friendly"
                                        name="url-friendly"
                                        value="URL Friendly"
                                        onChange={handleURLFriendly}
                                        checked={isURLFriendly}
                                    />
                                    <label htmlFor="url-friendly">URL Friendly</label>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>Wrappers</legend>
                            <SeparatorsAndWrappers
                                selectedSeparatorAndWrapperLabel={selectedOpeningWrapperLabel}
                                selectedSeparatorAndWrapper={selectedOpeningWrapper}
                                handleSelectSeparatorAndWrapper={handleSelectOpeningWrapper}
                            />
                            <SeparatorsAndWrappers
                                selectedSeparatorAndWrapperLabel={selectedClosingWrapperLabel}
                                selectedSeparatorAndWrapper={selectedClosingWrapper}
                                handleSelectSeparatorAndWrapper={handleSelectClosingWrapper}
                            />
                            <div>
                                <input
                                    type="checkbox"
                                    id="word-wrapper-checkbox"
                                    name="word-wrapper-checkbox"
                                    value="Word Wrapper Checkbox"
                                    onChange={handleWordWrapperCheckbox}
                                    checked={isWordWrapper}
                                />
                                <label htmlFor="word-wrapper-checkbox">Words</label>
                                <input
                                    type="checkbox"
                                    id="character-wrapper-checkbox"
                                    name="character-wrapper-checkbox"
                                    value="character Wrapper Checkbox"
                                    onChange={handleCharacterWrapperCheckbox}
                                    checked={isCharacterWrapper}
                                />
                                <label htmlFor="character-wrapper-checkbox">Characters</label>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>Separators</legend>
                            <SeparatorsAndWrappers
                                selectedSeparatorAndWrapperLabel={selectedSeparatorLabel}
                                selectedSeparatorAndWrapper={selectedSeparator}
                                handleSelectSeparatorAndWrapper={handleSelectSeparator}
                            />
                            <div>
                                <input
                                    type="checkbox"
                                    id="separate-words-checkbox"
                                    name="separate-words-checkbox"
                                    value="Separate Words Checkbox"
                                    onChange={handleSeparateWordsCheckbox}
                                    checked={isSeparateWords}
                                />
                                <label htmlFor="separate-words-checkbox">Words</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="separate-characters-checkbox"
                                    name="separate-characters-checkbox"
                                    value="Separate Characters Checkbox"
                                    onChange={handleSeparateCharactersCheckbox}
                                    checked={isSeparateCharacters}
                                />
                                <label htmlFor="separate-characters-checkbox">Characters</label>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>Prefix / Suffix</legend>
                            <SeparatorsAndWrappers
                                selectedSeparatorAndWrapperLabel={selectedPrefixLabel}
                                selectedSeparatorAndWrapper={selectedPrefix}
                                handleSelectSeparatorAndWrapper={handleSelectPrefix}
                            />
                            <SeparatorsAndWrappers
                                selectedSeparatorAndWrapperLabel={selectedSuffixLabel}
                                selectedSeparatorAndWrapper={selectedSuffix}
                                handleSelectSeparatorAndWrapper={handleSelectSuffix}
                            />
                        </fieldset>
                    </form>
                </section>

                <section id="font-outputs-wrapper">
                    {allFonts.map((font, index) => {
                        return (
                            <div key={index}>
                                <div className="font-output-name">{font.name}</div>
                                {font.characters
                                    ? <div>                                        
                                        <div className="font-output-text">{utils.convertText(outputText, font.name, font.characters)}</div>
                                        <button
                                            onClick={() => copyFontToClipboard(utils.convertText(outputText, font.name, font.characters), index)}
                                        >{index === selectCopyButtonIndex ? "Copied" : "Copy"}</button>
                                    </div>
                                    : <div>
                                        <div className="font-output-text" style={{ fontFamily: font.name}}>{outputText}</div>
                                        <button
                                            onClick={() => copyFontToClipboard(outputText, index)}
                                        >{index === selectCopyButtonIndex ? "Copied" : "Copy"}</button>
                                    </div>
                                }
                            </div>
                        )
                    })}
                </section>
            </main>
        </div>
    )
}