import Employee from '../models/employee.model'

const list: Employee[] = [
  { //  Mock Example
    name: 'Andre Vasconcelos',
    birth_date: new Date('03/05/1999'),
    gender: 'male',
    email: 'alpvj@cin.ufpe.br',
    cpf: '00000000000',
    start_date: new Date('09/01/2021'),
    team: 'Backend',
  },
];

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

const updateOne = () => {

}

const getAll = () => {
  return list;
}

export { insertOne, deleteOne, updateOne, getAll }