import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";

function App() {
   return (
      <>
         <GlobalStyles />
         <Navbar />
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/reviews" element={<Reviews />} />
         </Routes>
      </>
   );
}

export default App;
