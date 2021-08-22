import React, {useState} from 'react'

export default function TextFrom(props) {
        const handleUpper = ()=>{
        // console.log("UpperCase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
        }

        const handleLower = ()=>{
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to LowerCase!", "success");
            }

        const handleClear = ()=>{
            let newText = '';
            setText(newText);
            props.showAlert("Text Cleared!", "success");
            }
    
            // to capitalize the first character of any string
        const capitalize = () => {
            let myArray = text.split(' ');
            console.log(myArray.length);
            let newArray = [];
            console.log(myArray);
            for (let i = 0; i < myArray.length; i++) {
                let firstCap = myArray[i].charAt(0).toUpperCase();
                newArray[i] = firstCap + myArray[i].slice(1);
                }
            let firstCapText = newArray.toString();
            let finalText = firstCapText.replace(/,/g, " ");
            console.log(newArray);
            setText(finalText);    
            props.showAlert("First letters capitalised!", "success");

            }
            
        const handleCopy = () => {
            let text = document.getElementById("mybox");
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("Text Copied!", "success");
        }

        const handleExtraSpaces = () => {
            let newText= text.split(/[ ]+/);
            setText(newText.join(" "))
            props.showAlert("Extra spaces removed!", "success");
        }

    
        const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
        
        }

        const counter = () => {
        // Initialize the word counter
        let count = 0;
  
        // Split the words on each
        // space character 
        let split = text.split(/\n| /);

        // Loop through the words and 
        // increase the counter when 
        // each split word is not empty
        for (let i = 0; i < split.length; i++) {
            if (split[i] !== "") {
                count += 1;
            }
            // console.log("hi" + text.split(/\n| /));
        }

        // Display it as output
        return count;       
        }

        // const [wordCount, setWordCount] = useState(0)
        

        const [text, setText] = useState("");
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="mybox" rows="10" style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} value={text} onChange={handleOnChange}></textarea>
            </div>
            <button id="btn11" className="btn btn-primary mx-2" onClick={handleUpper}>Convert to Uppercase</button>
            <button id="btn12" className="btn btn-primary mx-2" onClick={handleLower}>Convert to Lowercase</button>
            <button id="btn13" className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
            <button id="btn14" className="btn btn-primary mx-2" onClick={capitalize}>Capital First Letter</button>
            <button id="btn15" className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button id="btn16" className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            
        </div>
        <div className="container my-3"  style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>Words and Characters in your text</h2>
            <p>{text.split(/\n| /).filter(function(n) { return n !== ''}).length} words {text.length} character</p>
            {/* {text.length === 0 ? 0 : text.trim().split(/\n| /).length} */}
            {/* this also works */}
            <p>{0.008 * counter()} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter some text in the TextBox to preview it here"}</p>
        </div>
        </>
    )
}
