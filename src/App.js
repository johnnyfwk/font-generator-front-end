import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Error404 from "./pages/Error404";

function App() {
    return (
        <div className="App">
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
