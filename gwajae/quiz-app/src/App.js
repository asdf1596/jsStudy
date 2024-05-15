import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
} from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Question from "./pages/Question";
import State from "./pages/State";
import Quiz from "./pages/Quiz";
import Footer from "./components/Footer";
const Layout = () => {
    return (
        <div className="fullmain">
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
};

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="Question" element={<Question />} />
                        <Route path="State" element={<State />} />
                        <Route path="Quiz" element={<Quiz />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
