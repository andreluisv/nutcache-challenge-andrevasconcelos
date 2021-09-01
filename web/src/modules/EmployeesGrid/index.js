import './EmployeesGrid.css'
import Employee from '../EmployeeBox';

function EmployeesGrid() {
  return (
    <div className="employees-grid">
      <Employee name="Andre Vasconcelos" email="alpvj@cin.ufpe.br" startDate="09-01-2021" team="Backend"/>
    </div>
  );
}

export default EmployeesGrid;
