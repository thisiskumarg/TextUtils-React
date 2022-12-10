import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    const [modeName, setModeName] = useState("Dark");
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            message: message,
            type: type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    };

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
            showAlert("Dark Mode has been enabled.", "success");
            document.title = "TextUtils - Dark Mode";
            // setInterval(() => {
            //     document.title = "TextUtils is amazing";
            // }, 2000);

            // setInterval(() => {
            //     document.title = "Install TextUtils Now";
            // }, 1500);
        } else {
            setMode({
                color: "light",
                backgroundColor: "#02244b",
            });
            document.body.style.backgroundColor = "white";
            setModeName("Dark");
            showAlert("Light Mode has been enabled.", "success");
            document.title = "TextUtils - Light Mode";
        }
    };

    return (
        <>
            <Router>
                {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
                {/* <Navbar /> */}
                <Navbar
                    title="TextUtils"
                    mode={mode}
                    modeName={modeName}
                    handleMode={handleMode}
                />
                <Alert alert={alert} />
                <div className="container my-3">
                    <Routes>
                        <Route exact path="/about" element={<About />} />
                        <Route
                            exact
                            path="/"
                            element={
                                <TextForm
                                    showAlert={showAlert}
                                    heading="Enter the text to analyze below"
                                    mode={mode}
                                />
                            }
                        />
                    </Routes>
                    {/* <About /> */}
                </div>
            </Router>
        </>
    );
}

export default App;
