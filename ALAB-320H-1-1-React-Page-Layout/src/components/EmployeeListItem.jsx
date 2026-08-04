function EmployeeListItem(props) {
  return (
    <div className="employeeListItem">
      <h2 className="employeeName">{props.employeeName}</h2>
      <p className="jobTitle">{props.jobTitle}</p>
    </div>
  );
}

export default EmployeeListItem;
