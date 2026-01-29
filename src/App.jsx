import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import SplashScreen from "./Components/SplashScreen/SplashScreen";
import Footer from "./Components/Footer/Footer";
import { useScrollContext } from "./context/ScrollContext";

function App() {
    const [showSplash, setShowSplash] = useState(true);
    const { footerRef } = useScrollContext();

    if (showSplash) {
        return <SplashScreen onFinish={() => setShowSplash(false)} />;
    }

    return (
        <>
            <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-8 lg:px-12 box-border overflow-x-hidden">
                <NavBar />
                <main>
                    <Outlet />
                </main>
            </div>
            <div ref={footerRef} id="footer">
                <Footer />
            </div>
        </>
    );
}

export default App;
