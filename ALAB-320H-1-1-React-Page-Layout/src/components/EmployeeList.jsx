import EmployeeListItem from "./EmployeeListItem.jsx";

// each employee uses the same component so every row keeps the same layout
// i wrote out all six so i could clearly see the props being passed in
function EmployeeList() {
  return (
    <div className="employeeList">
      <EmployeeListItem
        employeeName="James King"
        jobTitle="President and CEO"
      />
      <EmployeeListItem
        employeeName="Julie Taylor"
        jobTitle="VP of Marketing"
      />
      <EmployeeListItem employeeName="Eugene Lee" jobTitle="CFO" />
      <EmployeeListItem
        employeeName="John Williams"
        jobTitle="VP of Engineering"
      />
      <EmployeeListItem employeeName="Ray Moore" jobTitle="VP of Sales" />
      <EmployeeListItem employeeName="Paul Jones" jobTitle="QA Manager" />
    </div>
  );
}

export default EmployeeList;
