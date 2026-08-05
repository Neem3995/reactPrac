function Player (props, color, name){
    return (
        <div>
            <h2>Player {props.whichPlayer}</h2>
            <h3>Wins: {props.wins}</h3>
        </div>
    );
}
// const element = <Player whichPlayer="1" name="Joseph" style={{ color: "red" }} wins="infinite" />;
export default Player;

// function Welcome(props) {
//   return <h1 style={props.style}>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Sara" style={{ color: "red" }} />;