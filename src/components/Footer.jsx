import { Link } from "react-router-dom";

export default function Footer() {
    function handleFooterLinks() {
        window.scrollTo(0, 0);
    }

    return (
        <div id="footer-wrapper">
            <footer>
                <div id="footer-links-wrapper">
                    <div className="footer-links" onClick={handleFooterLinks}>
                        <Link to="/">Home</Link>
                        <Link to="/terms-and-conditions">Terms & Conditions</Link>
                    </div>
                </div>
                <div id="copyright">Copyright &copy; {new Date().getFullYear()} FontGenerator.co.uk. All Rights Reserved.</div>
            </footer>
        </div>
    )
}