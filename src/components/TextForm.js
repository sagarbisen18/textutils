import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpClick = ()=> {
        console.log("Upper Case was clicked");
        let newText = text.toUpperCase();
        props.showAlert("Convert to Upper case", "success");
        setText(newText);
        // setInterval(()=> {
        //     document.title = 'Install TextUtils Now';
        // }, 2000)
        // setInterval(()=> {
        //     document.title = 'New Ad';
        // }, 1500)
    }
    const handleClearClick = ()=> {
        let newText = '';
        props.showAlert("Clear text", "success");
        setText(newText);
    }
    const handleOnChange = (event)=> {
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState("yo yo");
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value ={text} onChange = {handleOnChange} id="myBox" rows={8} />
            </div>
            <button className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear text</button>
        </div>
         <div className='container my-3'>
            <h1>Your text summary</h1>
            <p>{text.split(' ').length -1} words, {text.length} chars</p>
         </div>
         </>
    )
}
