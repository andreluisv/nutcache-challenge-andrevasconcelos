import './EmployeesGrid.css'
import { useEffect, useState } from 'react'
import Employee from '../EmployeeBox';
import Container from '../AddButtonContainer';
import { getEmployeeList, createNewEmployee, deleteEmployee, updateEmployee } from '../../services/employee.service'

function EmployeesGrid() {

  const [employees, setEmployeesArray] = useState([])

  const fetchData = async () => {
    const list = await getEmployeeList();
    setEmployeesArray(list);
  }

  useEffect(() => {
    fetchData();
  }, [])

  const renderEmployees = () => {
    return employees.map((employee, idx) => <Employee
      key={"cpfkey" + employee.cpf}
      name={employee.name}
      birth_date={employee.birth_date}
      gender={employee.gender}
      email={employee.email}
      cpf={employee.cpf}
      startDate={employee.start_date}
      team={employee.team}
      index={idx}
      deleteEmployee={onDeleteEmployee}
      onUpdateEmployee={onUpdateEmployee}
    />)
  }

  const onSubmitNewUser = async (event, closeModal) => {
    event.preventDefault(event);
    var { name, birth_date, gender, email, cpf, start_date, team } = event.target;
    const status = await createNewEmployee({
      name: name.value,
      birth_date: birth_date.value ? new Date((new Date(birth_date.value)).getTime() + (1000*60*60*24)) : undefined,
      gender: gender.value,
      email: email.value,
      cpf: cpf.value || undefined,
      start_date: start_date.value ? new Date((new Date(start_date.value + '-01')).getTime() + (1000*60*60*24)) : undefined,
      team: team.value
    });
    if (status === 201) {
      fetchData();
      closeModal();
    } else {
      alert(`Error: ${status === 304 ? 'Duplicated CPF' : 'Please fill all fields'}`);
    }
  }

  const onDeleteEmployee = async (idx) => {
    const status = await deleteEmployee(employees[idx].cpf);

    if (status === 200) {
      fetchData();
    } else {
      alert(`Error: ${status === 404 ? 'Employee not found!' : 'Bad Request'}`);
    }
  }

  const onUpdateEmployee = async (event, closeModal) => {
    event.preventDefault(event);
    var { name, birth_date, gender, email, cpf, start_date, team } = event.target;
    const status = await updateEmployee({
      name: name.value,
      birth_date: birth_date.value ? new Date((new Date(birth_date.value)).getTime() + (1000*60*60*24)) : undefined,
      gender: gender.value,
      email: email.value,
      cpf: cpf.value || undefined,
      start_date: start_date.value ? new Date((new Date(start_date.value + '-01')).getTime() + (1000*60*60*24)) : undefined,
      team: team.value || undefined
    });
    if (status === 200) {
      fetchData();
      closeModal();
    } else {
      console.log(status)
      alert(`Error: ${status === 404 ? 'Employee not found' : 'Please fill all fields'}`);
    }
  }

  return (
    <div className="employees-grid">
      {renderEmployees()}
      <Container onSubmit={onSubmitNewUser} />
    </div>
  );
}

export default EmployeesGrid;
