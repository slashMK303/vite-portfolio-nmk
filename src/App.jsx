// import { useState } from "react";
import "./App.css";
import About from "./components/AboutMe";
import Home from "./components/Home";
import Project from "./components/Project";

function App() {
    return (
        <>
            <Home />
            <About />
            <Project />

            <footer>Build by Nanang Marvin Kurniawan.</footer>
        </>
    );
}

export default App;
