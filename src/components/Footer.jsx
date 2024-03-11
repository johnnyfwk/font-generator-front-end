import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div id="footer-links-wrapper">
                <div className="footer-links">
                    <Link to="/">Home</Link>
                    <Link to="/terms-and-conditions">Terms & Conditions</Link>
                </div>
            </div>
            <div id="copyright">Copyright &copy; {new Date().getFullYear()} FontGenerator.co.uk. All Rights Reserved.</div>
        </footer>
    )
}