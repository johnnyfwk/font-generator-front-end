import { Helmet } from "react-helmet";
import { useState } from "react";
import { allFonts } from "../content/fonts";

export default function Home() {
    const placeholderText = "Enter your text to see it in different fonts.";
    const [ inputText, setInputText ] = useState("");
    const [ outputFontPlaceHolderText, setOutputFontPlaceHolderText ] = useState(placeholderText);

    function handleInputText(event) {
        setInputText(event.target.value);
        setOutputFontPlaceHolderText(event.target.value);
    }

    function handleClearTextButton() {
        setInputText("");
        setOutputFontPlaceHolderText(placeholderText);
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
                            placeholder={outputFontPlaceHolderText}
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
                                    <div style={{fontFamily: font.name}}>{font.name}</div>
                                    <div style={{fontFamily: font.name}}>{outputFontPlaceHolderText}</div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </main>
        </div>
    )
}