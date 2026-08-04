import EmployeeListItem from "./EmployeeListItem.jsx";

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
