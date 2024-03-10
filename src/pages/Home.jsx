import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { allFonts } from "../content/fonts";
import * as utils from '../utils';

export default function Home() {
    const placeholderText = "Enter your text to see it in different fonts";

    const [ inputText, setInputText ] = useState("");
    const [ fonts, setFonts ] = useState([]);
    const [ copyButtonText, setCopyButtonText ] = useState("Copy");
    const [ buttonNumberClicked, setButtonNumberClicked ] = useState(null);

    const [ isUppercase, setIsUppercase ] = useState(false);
    const [ isLowercase, setIsLowercase ] = useState(false);
    const [ isReverseText, setIsReverseText ] = useState(false);
    const [ isCapitalisation, setIsCapitalisation ] = useState(false);
    const [ isCapitalisationOdd, setIsCapitalisationOdd ] = useState(false);
    const [ isCapitalisationEven, setIsCapitalisationEven ] = useState(false);
    const [ isCapitalisationRandom, setIsCapitalisationRandom ] = useState(false);
    const [ isCamelCase, setIsCamelCase ] = useState(false);
    const [ isPascalCase, setIsPascalCase ] = useState(false);
    const [ isURLFriendly, setIsURLFriendly ] = useState(false);

    useEffect(() => {
        const fontsToDisplay = [];
        allFonts.forEach((font) => {
            const fontCopy = {};
            fontCopy.name = font.name;

            let text;
            if (!inputText) {
                text = placeholderText;
            } else {
                text = inputText;
            }

            if (isUppercase) {
                text = utils.toUppercase(text);
            }

            if (isLowercase) {
                text = utils.toLowercase(text);
            }

            if (isReverseText) {
                text = utils.reverseText(text);
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

            const convertedText = utils.convertText(
                text,
                font.characters,
                font.openingTextWrapper,
                font.closingTextWrapper,
                font.openingWordWrapper,
                font.closingWordWrapper,
                font.openingCharacterWrapper,
                font.closingCharacterWrapper
            );
            fontCopy.text = convertedText;            
            fontsToDisplay.push(fontCopy);
        })
        setFonts(fontsToDisplay);
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
        isURLFriendly
    ])

    function handleInputText(event) {
        setInputText(event.target.value);
    }

    function handleClearTextButton() {
        setInputText("");
    }

    function copyToClipboard(buttonNumber, text) {
        setButtonNumberClicked(buttonNumber);
        navigator.clipboard.writeText(text);
        setCopyButtonText("Copied");
        setTimeout(() => setCopyButtonText("Copy"), 3000);
    };

    function handleUppercase() {
        setIsUppercase((currentUppercaseValue) => !currentUppercaseValue);
    }

    function handleLowercase() {
        setIsLowercase((currentLowercaseValue) => !currentLowercaseValue);
    }

    function handleReverseText() {
        setIsReverseText((currentTextReversedValue) => !currentTextReversedValue);
    }

    function handleCapitalisation() {
        setIsCapitalisation((currentCapitalisationValue) => !currentCapitalisationValue);
    }

    function handleCapitalisationOdd() {
        setIsCapitalisationOdd((currentCapitalisationOddValue) => !currentCapitalisationOddValue);
    }

    function handleCapitalisationEven() {
        setIsCapitalisationEven((currentCapitalisationEvenValue) => !currentCapitalisationEvenValue);
    }

    function handleCapitalisationRandom() {
        setIsCapitalisationRandom((currentCapitalisationRandomValue) => !currentCapitalisationRandomValue);
    }

    function handleCamelCase() {
        setIsCamelCase((currentCamelCaseValue) => !currentCamelCaseValue);
    }

    function handlePascalCase() {
        setIsPascalCase((currentPascalCaseValue) => !currentPascalCaseValue);
    }

    function handleURLFriendly() {
        setIsURLFriendly((currentURLFriendlyValue) => !currentURLFriendlyValue);
    }

    if (!fonts) {
        return null;
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

                        <fieldset>
                            <legend>Options:</legend>
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
                                        disabled={
                                            isLowercase ||
                                            isCapitalisation ||
                                            isCapitalisationOdd ||
                                            isCapitalisationEven ||
                                            isCapitalisationRandom ||
                                            isCamelCase ||
                                            isPascalCase ||
                                            isURLFriendly
                                        }
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
                                        disabled={
                                            isUppercase ||
                                            isCapitalisation ||
                                            isCapitalisationOdd ||
                                            isCapitalisationEven ||
                                            isCapitalisationRandom ||
                                            isCamelCase ||
                                            isPascalCase ||
                                            isURLFriendly
                                        }
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
                                        disabled={
                                            isUppercase ||
                                            isLowercase ||
                                            isCapitalisationOdd ||
                                            isCapitalisationEven ||
                                            isCapitalisationRandom ||
                                            isCamelCase ||
                                            isPascalCase ||
                                            isURLFriendly
                                        }
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
                                        disabled={
                                            isUppercase ||
                                            isLowercase ||
                                            isCapitalisation ||
                                            isCapitalisationEven ||
                                            isCapitalisationRandom ||
                                            isCamelCase ||
                                            isPascalCase ||
                                            isURLFriendly
                                        }
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
                                        disabled={
                                            isUppercase ||
                                            isLowercase ||
                                            isCapitalisation ||
                                            isCapitalisationOdd ||
                                            isCapitalisationRandom ||
                                            isCamelCase ||
                                            isPascalCase ||
                                            isURLFriendly
                                        }
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
                                        disabled={
                                            isUppercase ||
                                            isLowercase ||
                                            isCapitalisation ||
                                            isCapitalisationOdd ||
                                            isCapitalisationEven ||
                                            isCamelCase ||
                                            isPascalCase ||
                                            isURLFriendly
                                        }
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
                                        disabled={
                                            isUppercase ||
                                            isLowercase ||
                                            isCapitalisation ||
                                            isCapitalisationOdd ||
                                            isCapitalisationEven ||
                                            isCapitalisationRandom ||
                                            isPascalCase ||
                                            isURLFriendly
                                        }
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
                                        disabled={
                                            isUppercase ||
                                            isLowercase ||
                                            isCapitalisation ||
                                            isCapitalisationOdd ||
                                            isCapitalisationEven ||
                                            isCapitalisationRandom ||
                                            isCamelCase ||
                                            isURLFriendly
                                        }
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
                                        disabled={
                                            isUppercase ||
                                            isLowercase ||
                                            isCapitalisation ||
                                            isCapitalisationOdd ||
                                            isCapitalisationEven ||
                                            isCapitalisationRandom ||
                                            isCamelCase ||
                                            isPascalCase
                                        }
                                    />
                                    <label htmlFor="url-friendly">URL Friendly</label>
                                </div>
                            </div>
                        </fieldset>

                        <div>
                            <button
                                type="button"
                                onClick={handleClearTextButton}
                            >Clear Text</button>
                        </div>
                    </form>
                </section>
                
                <section>
                    <h2>Fonts</h2>
                    <div id="output-fonts-wrapper">
                        {fonts.map((font, index) => {
                            return (
                                <div key={index}>
                                    <div>{font.name}</div>

                                    <div
                                        className="font-text"
                                    >{font.text}</div>

                                    <button
                                        onClick={() => copyToClipboard(index, font.text)}
                                    >{buttonNumberClicked === index ? copyButtonText : "Copy"}</button>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </main>
        </div>
    )
}