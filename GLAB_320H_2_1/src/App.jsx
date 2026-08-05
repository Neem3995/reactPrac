import "./App.css";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <Content
        text="This is my simple React application."
        color="deepskyblue"
      />
      <Content
        text="I am practicing components and props."
        color="mediumseagreen"
      />
      <Content
        text="React is starting to make more sense."
        color="orange"
      />
      <Footer />
    </div>
  );
}

export default App;
