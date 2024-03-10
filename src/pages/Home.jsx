import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import * as utils from '../utils';
import SeparatorsAndWrappers from "../components/SeparatorsAndWrappers";

export default function Home() {
    const placeholderText = "Enter your text to see it in different fonts";

    const [ inputText, setInputText ] = useState("");
    const [ customisedFont, setCustomisedFont ] = useState(placeholderText);
    const [ customisedFontCopyButtonText, setCustomisedFontCopyButtonText ] = useState("Copy");

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

    const [ selectedSeparator, setSelectedSeparator ] = useState("");
    const [ isSeparateWords, setIsSeparateWords ] = useState(false);
    const [ isSeparateCharacters, setIsSeparateCharacters ] = useState(false);

    useEffect(() => {
        let customisedText;
        if (!inputText) {
            customisedText = placeholderText;
        } else {
            customisedText = inputText;
        }
        if (isReverseText) {
            customisedText = utils.reverseText(customisedText);
        }
        if (isUppercase) {
            customisedText = utils.toUppercase(customisedText);
        }
        if (isLowercase) {
            customisedText = utils.toLowercase(customisedText);
        }
        if (isCapitalisation) {
            customisedText = utils.toCapitalisation(customisedText);
        }
        if (isCapitalisationOdd) {
            customisedText = utils.toCapitalisationOdd(customisedText);
        }
        if (isCapitalisationEven) {
            customisedText = utils.toCapitalisationEven(customisedText);
        }
        if (isCapitalisationRandom) {
            customisedText = utils.toCapitalisationRandom(customisedText);
        }
        if (isCamelCase) {
            customisedText = utils.toCamelCase(customisedText);
        }
        if (isPascalCase) {
            customisedText = utils.toPascalCase(customisedText);
        }
        if (isURLFriendly) {
            customisedText = utils.toURLFriendly(customisedText);
        }
        if (selectedSeparator && isSeparateWords) {
            customisedText = utils.separateWords(customisedText, selectedSeparator);
        }
        if (selectedSeparator && isSeparateCharacters) {
            customisedText = utils.separateCharacters(customisedText, selectedSeparator);
        }
        setCustomisedFont(customisedText);
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
        isSeparateCharacters
    ])

    function handleInputText(event) {
        setInputText(event.target.value);
        if (event.target.value) {
            setCustomisedFont(event.target.value);
        } else {
            setCustomisedFont(placeholderText);
        }
    }

    function handleClearTextButton() {
        setInputText("");
    }

    function copyCustomisedFontToClipboard(text) {      
        navigator.clipboard.writeText(text);
        setCustomisedFontCopyButtonText("Copied");
        setTimeout(() => setCustomisedFontCopyButtonText("Copy"), 3000);
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
                            <legend>Separators</legend>

                            <SeparatorsAndWrappers
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
                    </form>
                </section>

                <section>
                    <h2>Customised Font</h2>
                    <div id="customised-font">{customisedFont}</div>
                    <button
                        onClick={() => copyCustomisedFontToClipboard(customisedFont)}
                    >{customisedFontCopyButtonText}</button>
                </section>
            </main>
        </div>
    )
}