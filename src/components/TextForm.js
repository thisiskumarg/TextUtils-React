import React, { useState } from "react";

export default function TextForm(props) {
    const handleOnClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleOnChange = (event) => {
        // console.log("On Change triggered.");
        setText(event.target.value);
    };

    const [text, setText] = useState("Enter text here - ");
    return (
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    value={text}
                    onChange={handleOnChange}
                    id="mybox"
                    rows="8"
                ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleOnClick}>
                Convert to UPPERCASE
            </button>
        </div>
    );
}
