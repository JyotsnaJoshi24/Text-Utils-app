import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick =()=>{
      // console.log("Uppercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
  }
  
  const handleClearClick = () => {
    let newText ='';
    setText(newText);
  }


    const handleOnChange =(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const handleExtraSpaces =() => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3 ">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}id="mybox" rows="8"></textarea>
        </div> 
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}> Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}> Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}> Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}> Remove Extra Spaces</button>
    </div>
    <div className="container my-4"style={{color: props.mode==='dark'?'white':'black'}}>
     <h2>Your text summary</h2>
     <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
     <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes Read</p>
     <p><strong>Preview</strong></p>
     <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
