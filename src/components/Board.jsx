import Square from './Square.jsx';
import { useState } from "react";
// need to import useState since it doesn't automatically exist inside board.jsx


// adding some functionality to the board 
// const [squares, setSquares] = useState([
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     // each null represents one square 
//     // so the const is describing a square spot 
// ]);

// adding a click function for the board 

// function handleSquareClick(index){
//     const nextSquares = [...squares];

//     nextSquares[index] = "X";

//     setSquares(nextSquares);
// }

// add a function to recieve said click 
// function handleSquareClick(index){

// }
function Board (props){
    const [squares, setSquares] = useState(Array(9).fill(null));
    function handleClick(){
        const nextSquares = [...squares];
        nextSquares[0] = "X";
        setSquares(nextSquares);
    }
    
    return (
        <div className="board">
            <Square 
            value={squares[0]} 
            handleClick={handleClick}/>
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
        </div>
    );  
}

export default Board;

// adding a value to my square component 
// simply gives that square some info  
// with value= being the name of the prop 

// the board still renders the 9 squares
// the const line gives it memory
// react can update so it's ok to use const instead of let 
// so the values inside []
// squares is react giving us the current board
// setSquares is asking react to replace the board 

// created the function for when a square is clicked 
// the click will update the board 

// the handleClick={} means that we are giving the square function to run later
// if we were to put parentheses it'd run the function immediately while react would be running 
// the function will wait until the user clicks which is the goal 