import { Outlet, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import DetailPage from "./pages/DetailPage";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import { IsLoginProvider } from "./api/IsLoginContext";
const Layout = () => {
    return (
        <div>
            <Nav />

            <Outlet />

            <Footer />
        </div>
    );
};

function App() {
    return (
        <IsLoginProvider>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<MainPage />} />
                        <Route path=":movieId" element={<DetailPage />} />
                        <Route path="search" element={<SearchPage />} />
                    </Route>
                </Routes>
            </div>
        </IsLoginProvider>
    );
}

export default App;
