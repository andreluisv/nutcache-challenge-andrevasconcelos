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
  { //  Mock Example
    name: 'Sarah Wilson',
    birth_date: new Date('11/23/2001'),
    gender: 'female',
    email: 'sarah9@gmail.com',
    cpf: '00000000001',
    start_date: new Date('06/13/2020'),
    team: 'Mobile',
  },
  { //  Mock Example
    name: 'Chris Taylor',
    birth_date: new Date('07/15/1996'),
    gender: 'male',
    email: 'tachris@outlook.com',
    cpf: '00000000002',
    start_date: new Date('08/15/2021'),
    team: 'Frontend',
  },
  { //  Mock Example
    name: 'Jonnathan Smith',
    birth_date: new Date('01/29/2002'),
    gender: 'other',
    email: 'jojoas@hotmail.com',
    cpf: '00000000003',
    start_date: new Date('03/07/2021'),
    team: 'Backend',
  }
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