import './Employee.css'
import Container from '../AddButtonContainer';

function Employee({ name, birth_date, gender, cpf, email, startDate, team, index, deleteEmployee, onUpdateEmployee }) {

  const formatDate = (date) => {
    const d = new Date(date);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${monthNames[d.getMonth()]}, ${d.getFullYear()}`
  }

  return (
    <div className="employee-box">
      <div>
        <p className="name">{name}</p>
        <p>Email: {email}</p>
        <p>Start Date: {formatDate(startDate)}</p>
        {team ? <p>Team: {team}</p> : null}
      </div>
      <div className="employee-box-buttons">
        <Container onSubmit={onUpdateEmployee} defaultValues={{ name, birth_date, gender, cpf, email, startDate, team }} />
        <button className="delete-button" onClick={() => { deleteEmployee(index) }}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Employee;
