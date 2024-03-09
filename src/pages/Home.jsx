import { Helmet } from "react-helmet";
import { useState } from "react";
import { allFonts } from "../content/fonts";

export default function Home() {
    const placeholderText = "Enter your text to see it in different fonts";

    const [ inputText, setInputText ] = useState("");
    const [ copyButtonText, setCopyButtonText ] = useState("Copy");
    const [ buttonNumberClicked, setButtonNumberClicked ] = useState(null);

    function handleInputText(event) {
        setInputText(event.target.value);
    }

    function handleClearTextButton() {
        setInputText("");
    }

    function convertText(text, characters) {
        let convertedText = '';
        for (let character of text) {
            convertedText += characters[character] || character;
        }
        return convertedText;
    }

    function copyToClipboard(buttonNumber, text, characters) {
        setButtonNumberClicked(buttonNumber);
        navigator.clipboard.writeText(convertText(text, characters));
        setCopyButtonText("Copied");
        setTimeout(() => setCopyButtonText("Copy"), 2000);
    };

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
                        {allFonts.map((font, index) => {
                            return (
                                <div key={index}>
                                    <div>{font.name}</div>
                                    <div
                                        style={{fontFamily: font.name}}
                                        className="font-text"
                                    >{convertText(inputText || placeholderText, font.characters)}</div>

                                    <button
                                        onClick={() => copyToClipboard(index, inputText || placeholderText, font.characters)}
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