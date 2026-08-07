function Square(props) {
  return (
    <div>
      <h4>{props.value}</h4>
    </div>
  );
}
export default Square;


// we'll be changing the h4 line and placing it with a prop line 
// this is connected since in board.jsx the prop name is value
// so we're making that call here 