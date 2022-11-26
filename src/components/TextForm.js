import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLoClick = () => {
        // console.log("Lowercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleCopyText = () => {
        let newText = document.getElementById("mybox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
    };

    const handleextraspaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    };

    const handleClear = () => {
        // console.log("Clear text was clicked: " + text);
        let newText = "";
        setText(newText);
    };

    const handleOnChange = (event) => {
        // console.log("On Change triggered.");
        setText(event.target.value);
    };

    const [text, setText] = useState("Enter text here - ");
    return (
        <>
            <div
                className={`container`}
                style={{
                    color: props.mode.color === "light" ? "#02244b" : "white",
                }}
            >
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{
                            backgroundColor:
                                props.mode.color === "#02244b"
                                    ? "#043165"
                                    : "white",
                            color:
                                props.mode.color === "#02244b"
                                    ? "white"
                                    : "black",
                        }}
                        id="mybox"
                        rows="8"
                    ></textarea>
                </div>
                <button
                    className="btn btn-primary mx-1"
                    onClick={handleUpClick}
                >
                    Convert to 'UPPERCASE'
                </button>
                <button
                    className="btn btn-primary mx-1"
                    onClick={handleLoClick}
                >
                    Convert to 'lowercase'
                </button>
                <button
                    className="btn btn-primary mx-1"
                    onClick={handleCopyText}
                >
                    Copy Text
                </button>
                <button
                    className="btn btn-primary mx-1"
                    onClick={handleextraspaces}
                >
                    Remove Extra Spaces
                </button>
                <button className="btn btn-primary mx-1" onClick={handleClear}>
                    Clear Text
                </button>
            </div>
            <div
                className={`container my-3`}
                style={{
                    color: props.mode.color === "light" ? "#02244b" : "white",
                }}
            >
                <h2>Your Text Summary</h2>
                <p>{0.008 * (text.split(" ").length - 1)} Minutes read.</p>
                <p>Number of Words: {text.split(" ").length - 1}</p>
                <p>Number of characters: {text.length} </p>
                <p>Number of sentences: {text.split(".").length - 1} </p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    );
}
