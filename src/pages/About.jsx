import { Helmet } from "react-helmet";

export default function About() {
    return (
        <div>
            <Helmet>
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://fontgenerator.co.uk/about" />
                <title>About • FontGenerator.co.uk</title>
                <meta name="description" content="Learn more about FontGenerator.co.uk." />
            </Helmet>

            <header>
                <h1>About</h1>
                <p>This is some text in the header tag.</p>
            </header>

            <main>
                <h2>Sub-heading</h2>
                <p>This is some text in the main tag.</p>
            </main>
        </div>
    )
}