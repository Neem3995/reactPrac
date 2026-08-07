function Square(props) {
  return (
    <div className="square" onClick={props.handleClick}>
      {/* board sends this square its value and the value is X, O, or nothing */}
      <h4 className={props.value}>{props.value}</h4>
    </div>
  );
}
export default Square;
