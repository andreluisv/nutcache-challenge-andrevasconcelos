import './EmployeesGrid.css'
import { useEffect, useState } from 'react'
import Employee from '../EmployeeBox';
import { getEmployeeList } from '../../services/employee.service'

function EmployeesGrid() {

  const [employees, setEmployeesArray] = useState([])

  useEffect(async () => {
    const list = await getEmployeeList();
    setEmployeesArray(list);
    console.log(list)
  }, [])

  const renderEmployees = () => {
    return employees.map((employee, idx) => <Employee
      key={"cpfkey" + employee.cpf}
      name={employee.name}
      email={employee.email}
      startDate={employee.start_date}
      team={employee.team}
      index={idx}
    />)
  }

  return (
    <div className="employees-grid">
      {renderEmployees()}
    </div>
  );
}

export default EmployeesGrid;
