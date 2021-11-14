
// Type rfc => for react function based component //


import React,{useState}  from 'react'
// const [count,setCount]=useState(0);      //react hooks 

export default function Textfm(props) {


    const clickspUp=()=>
    {
          console.log("Uppercase here\n" + text);
          setText("you have clicked on function upper\n")
          let newT=text.toUpperCase();
          setText(newT);
    }


    const clickspLw=()=>
    {
          console.log("Uppercase here\n" + text);
          setText("you have clicked on function upper\n")
          let newT=text.toLowerCase();
          setText(newT);
    }


    const clickMax=()=>
    {
      if(text.length===0)
      {
        setText("not defined");

      }
      else{
        let str=text;
        let ASCII_SIZE = 256;
        let count = new Array(ASCII_SIZE);
        for (let i = 0; i < ASCII_SIZE; i++)
        {
            count[i] = 0;
        }
         
        // Construct character count array from the input
        // string.
        let len = str.length;
        for (let i = 0; i < len; i++)
        {
            count[str[i].charCodeAt(0)] += 1;
        }
        let max = -1;   // Initialize max count
        let result = ' ';   // Initialize result
         
        // Traversing through the string and maintaining
        // the count of each character
        for (let i = 0; i < len; i++)
        {
            if (max < count[str[i].charCodeAt(0)])
            {
                max = count[str[i].charCodeAt(0)];
                result = str[i];
            }
        }
        setText(result);
      }
    }

    const clickMaxW=()=>
    {
        let str=text;
        let words = str.match(/\w+/g); // splitting words
  let occurances = {}; 
  for (let word of words) { 
    if (occurances[word]) { 
      occurances[word]++; 
    } 
    else { 
      occurances[word] = 1; 
    } 
  } 
  // Here occurances will give count of each word
  let max = 0; 
  let mostRepeatedWord = ''; 
  for (let word of words) { 
    if (occurances[word] > max) 
    { 
      max = occurances[word]; mostRepeatedWord = word; 
    } 
  } 

  setText(mostRepeatedWord);
        
    }
    const clickClear=()=>
    {
        console.log("Clear") ;
        setText("");
    }
    
    const clickCopy=()=>
    {
      console.log('click Copy');
      var text=document.getElementById("exampleFormControlTextarea1");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const clickSpace=()=>
    {
        console.log("handling space") ;
        let str=text.split(/[ ]+/);
        setText(str.join(" "));
    }


    const handleOnChange=(event)=>
    {
        console.log("Changed") ;
        setText(event.target.value)
    }

    const [text,setText]=useState('Enter the text');

    return (

        <div>

 <div className="container mt-5">
     {/*
    <h1>{props.heading}</h1>
    <div className="mb-3">
<label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name"/>
</div>
 <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>  */}

<div className=" container mb-3">
  <label htmlFor="exampleFormControlTextarea1"  className="form-label"><h1>ALPHABET_CONVERTERS</h1></label>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
</div>


<button className="btn btn-primary mx-2" onClick={clickspUp}>
Convert Upper from lower
</button>

<button className="btn btn-secondary mx-2" onClick={clickspLw}>
Convert Lower from Upper
</button>

<button className="btn btn-info mx-2" onClick={clickMax}>
Max repeated char
</button>

<button className="btn btn-success mx-2" onClick={clickMaxW}>
Max repeated word
</button>

<button className="btn btn-warning mx-2" onClick={clickCopy}>
 Copy_Text
</button>

<button className="btn btn-success mx-2" onClick={clickSpace}>
Manage Space
</button>

<button className="btn btn-info mx-2" onClick={clickClear}>
Clear Terminal
</button>

</div>
<div className="container mt-5">
<hr/>
<h1>Overall Summary</h1>
<p>Letters == {text.length}</p>
<p>Words == {text.split(" ").length}</p>
<p>Time == {0.008*text.split(" ").length}</p>
<p>Current string == {text}</p>

<hr/>

</div>
        </div>
    )
}

