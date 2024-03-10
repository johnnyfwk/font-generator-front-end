import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { allFonts } from "../content/fonts";

export default function Home() {
    const placeholderText = "Enter your text to see it in different fonts";

    const [ inputText, setInputText ] = useState("");
    const [ fonts, setFonts ] = useState([]);
    const [ copyButtonText, setCopyButtonText ] = useState("Copy");
    const [ buttonNumberClicked, setButtonNumberClicked ] = useState(null);
    const [ isReverseTextCheckBoxChecked, setIsReverseTextCheckBoxChecked ] = useState(false);

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

            let textReversed;
            if (isReverseTextCheckBoxChecked) {
                textReversed = text.split('').reverse().join('');
            } else {
                textReversed = text;
            }

            const convertedText = convertText(textReversed, font.characters);
            fontCopy.text = convertedText;            
            fontsToDisplay.push(fontCopy);
        })
        setFonts(fontsToDisplay);
    }, [inputText, isReverseTextCheckBoxChecked])

    function handleInputText(event) {
        setInputText(event.target.value);
        if (!event.target.value) {
            setIsReverseTextCheckBoxChecked(false);
        }
    }

    function handleClearTextButton() {
        setInputText("");
        setIsReverseTextCheckBoxChecked(false);
    }

    function convertText(text, characters) {
        let convertedText = "";
        for (let character of text) {
            convertedText += characters[character] || character;
        }
        return convertedText;
    }

    function copyToClipboard(buttonNumber, text) {
        setButtonNumberClicked(buttonNumber);
        navigator.clipboard.writeText(text);
        setCopyButtonText("Copied");
        setTimeout(() => setCopyButtonText("Copy"), 2000);
    };

    function handleReverseTextCheckBox() {
        setIsReverseTextCheckBoxChecked((currentTextReversedValue) => !currentTextReversedValue);
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
                <meta name="description" content="Copy and paste hundreds of fonts with our font generator." />
            </Helmet>

            <header>
                <h1>Font Generator</h1>
                <p>Copy and paste hundreds of fonts with our font generator.</p>
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
                            <input
                                type="checkbox"
                                id="reverse-text"
                                name="reverse-text"
                                value="Reverse Text"
                                onChange={handleReverseTextCheckBox}
                                checked={isReverseTextCheckBoxChecked}
                            />
                            <label htmlFor="vehicle1">Reverse Text</label>
                        </div>
                        

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
                                        style={{fontFamily: font.name}}
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