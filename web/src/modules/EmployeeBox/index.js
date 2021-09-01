import './Employee.css'

function Employee({ name, email, startDate, team, index }) {

  const formatDate = (date) => {
    const d = new Date(date);
    const monthNames =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep", "Oct","Nov","Dec"];
    return `${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
  }

  return (
    <div className="employee-box">
      <div>
        <p className="name">{name}</p>
        <p>Email: {email}</p>
        <p>Start Date: {formatDate(startDate)}</p>
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
