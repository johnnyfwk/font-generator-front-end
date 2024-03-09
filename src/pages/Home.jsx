import { Helmet } from "react-helmet";

export default function Home() {
    return (
        <div>
            <Helmet>
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://fontgenerator.co.uk/" />
                <title>Font Generator • FontGenerator.co.uk</title>
                <meta name="description" content="Copy and paste hundreds of fonts." />
            </Helmet>

            <header>
                <h1>Font Generator</h1>
                <p>This is some text in the header tag.</p>
            </header>

            <main>
                <h2>Sub-heading</h2>
                <p>This is some text in the main tag.</p>
            </main>
        </div>
    )
}