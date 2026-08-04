function EmployeeListItem(props) {
  return (
    <div className="employeeListItem">
      <div className="employeeIcon">👤</div>
      <div className="employeeInfo">
        <h2 className="employeeName">{props.employeeName}</h2>
        <p className="jobTitle">{props.jobTitle}</p>
      </div>
    </div>
  );
}

export default EmployeeListItem;
