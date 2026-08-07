import "./App.css";
import Header from "./components/Header.jsx";
import Player from "./components/Player.jsx";
import Board from "./components/Board.jsx";

function App() {
  return (
    <>
      <Header />
      <Player whichPlayer="X" />
      <Player whichPlayer="O" />
      <Board />
    </>
  );
}

export default App;
