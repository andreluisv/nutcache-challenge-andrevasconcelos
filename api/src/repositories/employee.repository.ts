import Employee from '../models/employee.model'

const list: Employee[] = [];

const exists = (cpf: String) => {
  return list.map((employee) => cpf === employee.cpf).includes(true);
}

const getEmployeeIndexByCpf = (cpf: String) => {
  return list.findIndex((employee: Employee) => employee.cpf === cpf);
}

const removeIdxFromList = (idx: number) => {
  if (idx < 0 || idx >= list.length) return false;
  return list.splice(idx, 1).length === 1;
}

const insertOne = (employee: Employee) => {
  if (exists(employee.cpf)) {
    return false;
  }
  list.push(employee);
  return true
}

const deleteOne = (cpf: String) => {
  const index = getEmployeeIndexByCpf(cpf);
  return removeIdxFromList(index);
}

const updateOne = ({ name, birth_date, gender, email, cpf, start_date, team }: Employee) => {
  const index = getEmployeeIndexByCpf(cpf);
  if (index === -1) return false;

  const employee = list[index];
  list[index] = {
    name: name || employee.name,
    birth_date: birth_date || employee.birth_date,
    gender: gender || employee.gender,
    email: email || employee.email,
    cpf: employee.cpf,
    start_date: start_date || employee.start_date,
    team: team || employee.team,
  }

  return true;
}

const getAll = () => {
  return list;
}

export { insertOne, deleteOne, updateOne, getAll }