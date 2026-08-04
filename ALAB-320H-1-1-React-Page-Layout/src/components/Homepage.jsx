import Header from "./Header.jsx";
import SearchBar from "./SearchBar.jsx";
import EmployeeList from "./EmployeeList.jsx";

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
