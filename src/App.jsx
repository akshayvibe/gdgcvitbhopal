import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import SplashScreen from "./Components/SplashScreen/SplashScreen";
import Footer from "./Components/Footer/Footer";
import { useScrollContext } from "./context/ScrollContext";
import AdvityaPopup from "./AdvityaPopup/AdvityaPopup";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showPopup, setShowPopup] = useState(true);
  const { footerRef } = useScrollContext();

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <>
      {showPopup && (
        <AdvityaPopup onClose={() => setShowPopup(false)} />
      )}

      <NavBar />
      <main>
        <Outlet />
      </main>
      <div ref={footerRef} id="footer">
        <Footer />
      </div>
    </>
  );
}
export default App;