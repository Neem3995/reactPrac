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

// this function checks the board to see if somebody has three matching squares
function calculateWinner(squares) {
    // each smaller array is one possible winning row, column, or diagonal
    // the numbers are the indexes for the nine spots inside the squares array
    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < winningLines.length; i++) {
        const line = winningLines[i];
        const firstSquare = line[0];
        const secondSquare = line[1];
        const thirdSquare = line[2];

        if (
            squares[firstSquare] &&
            squares[firstSquare] === squares[secondSquare] &&
            squares[firstSquare] === squares[thirdSquare]
        ) {
            return squares[firstSquare];
        }
    }

    return null;
}

function Board (){
    // squares remembers all nine spots and null means that a spot is still empty
    const [squares, setSquares] = useState(Array(9).fill(null));

    // this boolean only needs true or false because there are only two possible turns
    // true means X plays next and false means O plays next
    const [xIsNext, setXIsNext] = useState(true);

    const winner = calculateWinner(squares);
    const boardIsFull = !squares.includes(null);

    let status = "Next Player: X";

    if (winner) {
        status = "Winner: " + winner;
    } else if (boardIsFull) {
        status = "Draw";
    } else if (!xIsNext) {
        status = "Next Player: O";
    }

    // index tells this function which one of the nine squares was clicked
    function handleSquareClick(index){
        // returning here keeps an old move from being replaced and stops moves after a win
        if (squares[index] || winner) {
            return;
        }

        // the spread operator makes a copy so we do not change react state directly
        // nextSquares can be updated while the original squares array stays untouched
        const nextSquares = [...squares];

        if (xIsNext) {
            nextSquares[index] = "X";
        } else {
            nextSquares[index] = "O";
        }

        // setSquares asks react to replace the old board with the updated copy
        setSquares(nextSquares);

        // this flips the boolean so the other player gets the next turn
        setXIsNext(!xIsNext);
    }

    function resetGame(){
        // reset makes all nine spots empty again and makes X the first player again
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    }

    return (
        <div className="game">
            <p className="status">{status}</p>

            <div className="board">
                <Square value={squares[0]} handleClick={() => handleSquareClick(0)} />
                <Square value={squares[1]} handleClick={() => handleSquareClick(1)} />
                <Square value={squares[2]} handleClick={() => handleSquareClick(2)} />
                <Square value={squares[3]} handleClick={() => handleSquareClick(3)} />
                <Square value={squares[4]} handleClick={() => handleSquareClick(4)} />
                <Square value={squares[5]} handleClick={() => handleSquareClick(5)} />
                <Square value={squares[6]} handleClick={() => handleSquareClick(6)} />
                <Square value={squares[7]} handleClick={() => handleSquareClick(7)} />
                <Square value={squares[8]} handleClick={() => handleSquareClick(8)} />
            </div>

            <button onClick={resetGame}>Reset Game</button>
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
