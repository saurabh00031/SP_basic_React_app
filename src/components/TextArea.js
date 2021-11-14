import React, { useState } from "react";

const TextArea = () => {

    
    const [characterCount, setCharacterCount] = useState(0);
    return (
        <>
        
      <div className="container mt-5">
      <h1>Counting_Words</h1>
        <textarea className="form-control"
          placeholder="Enter you data here!" rows="5" col="10"
          onChange={(e) => setCharacterCount(e.target.value.length)}
        ></textarea>
        <p>Total Number of characters: {characterCount}</p>
      </div>
      </>
    );
  };

  export default TextArea;  