function Nav(){
    return (
        <nav id="navbar">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Register</li>
            </ul>
        </nav>
    );
}

export default Nav;

// so when making a new component we need to return it once its a function 
// in order to add the nav bar we need to export and import 
// we export it from the navbar.jsx file
// we import it to the app.jsx file 