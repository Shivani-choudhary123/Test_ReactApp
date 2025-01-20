import React,{useState} from 'react'

export default function TextForm() {
  const handleOnClickUC = () => {
     //console.log('UpperCase button is clicked..');
     let upperText = text.toUpperCase();
     setText(upperText);
  }
  const handleOnClickLC = () => {
    //console.log('LowerCase button is clicked..');
    let lowerText = text.toLocaleLowerCase();
    setText(lowerText);
 }
  const handleOnChange = (event) => {
    //console.log('On Change');
    setText(event.target.value);
 }
  const [text, setText] = useState('');
  return (
    <>
    <div>
      <div className="mb-3">
      <label htmlFor="textArea" className="form-label"><strong>Enter your text below</strong></label>
      <textarea className="form-control form-control-lg" id="textBox1" rows="3" onChange={handleOnChange} value={text}></textarea>
      <button type="button" className="btn btn-primary my-3" onClick={handleOnClickUC}>Convert to UppperCase</button>
      <button type="button" className="btn btn-primary my-3 mx-3" onClick={handleOnClickLC}>Convert to LowerCase</button>
      </div>
    </div>
    <div className="constainer my-2">
      <h5>Word Count Summary</h5>
      <p>{text.split(" ").filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters</p>
    </div>
    </>
  )
}

