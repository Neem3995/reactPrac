
import './App.css'
import Header from './Header';
import Contact from './Contact';


function App() {
  Contact("Call office", "111-111-1111"); 
  let el = <h1>React yay</h1>;
  return (
    <div>
      <Header card = {"Employee Directory"} />
      <Contact hName = {"Call Office"} pName={"111-111-1111"} />
    </div>
    
  )
}

export default App;
