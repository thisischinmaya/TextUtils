import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    //Without arrow function
    /* function handleUpClick()
    {
        console.log("Uppercase was clicked")
    } */


    //with arrow function
    let handleUpClick = () => {
        console.log("Uppercase was Clicked" + text);
        let n = text.toUpperCase();
        setText(n);
        // setText("You have clicked on handleUpClick !")
        props.ShowAlert("Converted to uppercase!","success");
    }

    let handleLowClick = () => {
        let n = text.toLocaleLowerCase();
        setText(n);
        props.ShowAlert("Converted to Lowercase!","success");
    }

    let handleClearClick = () => {
        let n = "";
        setText(n);
        props.ShowAlert("Textarea is Cleared!","success");

    }

    function handleInverseClick() {
        let n = text.length;
        let p = "";
        for (let i = n - 1; i >= 0; i--) {
            p = p + text.charAt(i);
        }
        setText(p);
        props.ShowAlert("Convert to its Inverse!","success");

    }

    let handleCopyClick = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.ShowAlert("Copied to Clipboard!","success");

    }

    let handleOnChange = (event) => {
        console.log("On chnage")
        setText(event.target.value);
    }


    const [text, setText] = useState("");

    // text="new State"  // Wrongway to change the state 
    // setText("new state");    //Correct way to change the state



    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <div className='container'>
                    <h2>{props.heading}</h2>
                    <div className="mb-3">
                        <textarea className="form-control" id="myBox" value={text} rows="8" onChange={handleOnChange} style={{ background: props.mode === 'dark' ? 'lightslategray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                    </div>
                    <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button type="button" className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                    <button type="button" className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                    <button type="button" className="btn btn-primary mx-1" onClick={handleInverseClick}>Inverse</button>
                    <button type="button" className="btn btn-primary mx-1" onClick={handleCopyClick}>CopyText</button>
                </div>
                <div className="container my-2">
                    <h1>Your Text summary is :</h1>
                    <p>{text.split(" ").length} words and {text.length} charcters</p>
                    <p>{0.008 * text.split(" ").length} Minutes read</p>
                    <h3>Preview</h3>
                    <p>{text.length > 0 ? text : "Enter something in the above textbox to preview it here"}</p>
                </div>
            </div>
        </>
    )
}
