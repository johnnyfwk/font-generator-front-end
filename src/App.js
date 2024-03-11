import { Routes, Route } from "react-router-dom";
import Logo from "./components/Logo";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import TermsAndConditions from "./pages/TermsAndConditions";
import Error404 from "./pages/Error404";

function App() {
    return (
        <div className="App">
            <Logo />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
