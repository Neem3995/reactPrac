import "./App.css";
import Nav from "./components/Nav.jsx";
import Article from "./components/Article.jsx";
// jsx files can not return more than one element, so we wrap the elements in a fragment
// the one element can have multiple elements inside of it, but the one element is what is returned
// in order to style this page we need to make a div tag

function App() {

  const firstName = "Joseph";

  return (
    <div id="appBody">

      <Nav />
      <Article />

      <h1>Hola Mundo</h1>
      <h2>My name is {firstName}!</h2>
      <p>my true age is {30 - 5}</p>
    </div>
  );
}

export default App
