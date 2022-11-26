import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
    const [modeName, setModeName] = useState("Dark");

    const [mode, setMode] = useState({
        color: "light",
        backgroundColor: "#02244b",
    });

    const handleMode = () => {
        if (mode.color === "light") {
            setMode({
                color: "#02244b",
                backgroundColor: "light",
            });
            setModeName("Light");
            document.body.style.backgroundColor = "#043165";
        } else {
            setMode({
                color: "light",
                backgroundColor: "#02244b",
            });
            document.body.style.backgroundColor = "white";
            setModeName("Dark");
        }
    };

    return (
        <>
            {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
            {/* <Navbar /> */}
            <Navbar
                title="TextUtils"
                mode={mode}
                modeName={modeName}
                handleMode={handleMode}
            />
            <div className="container my-3">
                <TextForm
                    heading="Enter the text to analyze below"
                    mode={mode}
                />
                {/* <About /> */}
            </div>
        </>
    );
}

export default App;
