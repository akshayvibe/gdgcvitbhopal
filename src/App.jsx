import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import Tech from "./pages/Tech";
import Home from "./pages/Home";
import WebDTeam from "./pages/WebDTeam";

function App() {
    return (
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-8 lg:px-12 box-border overflow-x-hidden">
            <NavBar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tech" element={<Tech />} />
                    <Route path="/teams/tech/webDTeam" element={<WebDTeam />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
