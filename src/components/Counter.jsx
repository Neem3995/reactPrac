import React, { useState } from "react";
// console.log("This is react: ", React)
// object destructuring 
// used to extract properties from an object
// unpack them directly into distinct variables
function Counter() {
    // example of state 
    // const [name, setName]= useState("Player 1")
    // const [health, setHealth]= useState(!00);
    // const [article, setArticle]= useState("Article");

    // state variable
    const [count, setCount] = useState (0);

    //click events 
    const add = () =>{
        setCount(count + 1)
    }

    const sub = () =>{
        setCount(count - 1)
    }

  return(
  <>
    <span>Current Count: {count} </span>
    <section>
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
    </section>
  </>
  )
}

export default Counter;

// had to make sure when calling the hook 
// we place the variable in curly brackets

// pass by value: react and js sends a copy of a variable to a component or function 
// pass by reference: sharing the memory address of an array 