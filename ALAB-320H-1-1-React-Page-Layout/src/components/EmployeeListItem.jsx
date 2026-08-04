// props let this one component show different information for each employee
function EmployeeListItem(props) {
  return (
    <div className="employeeListItem">
      {/* the icon is just a basic placeholder because images are optional */}
      <div className="employeeIcon">👤</div>
      <div className="employeeInfo">
        <h2 className="employeeName">{props.employeeName}</h2>
        <p className="jobTitle">{props.jobTitle}</p>
      </div>
    </div>
  );
}

export default EmployeeListItem;
