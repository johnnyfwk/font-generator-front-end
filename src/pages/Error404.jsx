import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Error404() {
    return (
        <div>
            <Helmet>
                <meta name="robots" content="noindex, nofollow" />
                <link rel="canonical" href="https://fontgenerator.co.uk/" />
                <title>404 • FontGenerator.co.uk</title>
                <meta name="description" content="This page does not exist." />
            </Helmet>

            <header>
                <h1>404</h1>
            </header>

            <main>
                <p>This is page does not exist. Visit one of the pages below:</p>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </main>
        </div>
    )
}