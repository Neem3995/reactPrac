import User from "./User";
import Admin from "./Admin";

function App2(){
    let isAdmin = false;
    if (isAdmin) {
        return <Admin />;
    } else {
        return <User />;
    }
}
export default App2;