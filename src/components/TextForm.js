
import React,{useState} from "react"
import './TextForm.css'
function TextForm(){

     let [text,setText]=useState('')



     function onclickhandler(){

        console.log("button clicked")
        let nn=text.toUpperCase();

        setText(nn); 
   
     }

    function onchangehandler(event){
        
        setText(event.target.value);
    }


    function onclicklower(){
      let tt=text.toLowerCase();
      setText(tt)
    }


    function countword(text){
      let trimmed=text.trim();
      if(trimmed ===''){
        return 0;
      }

      return trimmed.split(/\s+/).length;
    }


return(

<>
<div className="container">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" onChange={onchangehandler} value={text}></textarea>


  <button type="button" className="btn btn-primary my-4"  onClick={onclickhandler}>convert to uppercase</button>
  <button type="button" className="btn btn-primary my-4"  onClick={onclicklower}>convert to lowercase</button>

</div>

<div className="container">
  <h2>Your text summery</h2>
  <p>number of words:{countword(text)}</p>
  <p>number of Character:{text.length}</p>
  <p>time:{0.008*countword(text)}</p>


  <h3>Text Preview</h3>
  <p className="container">{text}</p>
</div>
</>




)

}


export default TextForm