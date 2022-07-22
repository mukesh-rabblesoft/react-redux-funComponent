import React, { Fragment, useState } from "react";

const TextForm = (props) => {

const [text, setText] = useState();

const handleOnChange=(e)=>{
    
    setText(e.target.value);
}

const handleUpClick=()=>{

let txt = text.toUpperCase();

    setText(txt);
}



  return (
    <Fragment>
<h2 className="mt-4">{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="5"
        ></textarea>
        <button className="btn btn-primary mt-2" onClick={handleUpClick}>Text Uppercase</button>
      </div>
      

<div className="textarea">
    <p>Count text : {text}</p>
</div>

    </Fragment>
  );
};

export default TextForm;
