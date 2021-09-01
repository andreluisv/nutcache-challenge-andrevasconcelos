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

const insertOne = () => {

}

const deleteOne = () => {

}

const updateOne = () => {

}

const getAll = () => {
  return list;
}

export { insertOne, deleteOne, updateOne, getAll }