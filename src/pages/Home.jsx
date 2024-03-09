import { Helmet } from "react-helmet";
import { useState } from "react";

export default function Home() {
    const [ inputText, setInputText ] = useState("");

    function handleInputText(event) {
        setInputText(event.target.value);
    }

    function handleClearTextButton() {
        setInputText("");
    }

    console.log(inputText, "<------- inputText")

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
                <form>
                    <label htmlFor="input-text">Input your text:</label>
                    <textarea
                        id="input-text"
                        name="input-text"
                        value={inputText}
                        onChange={handleInputText}
                    ></textarea>
                    <div>
                        <button
                            type="button"
                            onClick={handleClearTextButton}
                        >Clear Text</button>
                    </div>
                </form>
            </main>
        </div>
    )
}