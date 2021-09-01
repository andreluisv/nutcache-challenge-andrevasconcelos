import './Employee.css'

function Employee({ name, email, startDate, team }) {
  return (
    <div className="employee-box">
      <div>
        <p className="name">{name}</p>
        <p>Email: {email}</p>
        <p>Start Date: {startDate}</p>
        <p>Team: {team}</p>
      </div>
      <div className="employee-box-buttons">
        <button className="edit-button">
          Edit
        </button>
        <button className="delete-button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Employee;
