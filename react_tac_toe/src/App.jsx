import "./App.css";
import Header from "./components/Header.jsx";
import Player from "./components/Player.jsx";
import Board from "./components/Board.jsx";

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <div className="players">
          <Player whichPlayer="X" wins="0" />
          <Player whichPlayer="O" wins="0" />
        </div>

        <Board />
      </main>
    </>
  );
}

export default App;
