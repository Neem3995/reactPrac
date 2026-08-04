import Header from "./Header.jsx";
import SearchBar from "./SearchBar.jsx";
import EmployeeList from "./EmployeeList.jsx";

// this puts the three main parts in the same order as the mockup
function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}

export default Homepage;
