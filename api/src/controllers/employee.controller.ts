import { Request, Response } from 'express'
import { insertOne, deleteOne, updateOne, getAll } from '../repositories/employee.repository'

const listEmployees = (req: Request, res: Response) => {
  return res.send(getAll())
}

const createNewEmployee = (req: Request, res: Response) => {
  var { name, birth_date, gender, email, cpf, start_date, team } = req.body;

  const isComplete = ![name, birth_date, gender, email, cpf, start_date, team].map(val => val === undefined).includes(true);
  if (!isComplete) {
    return res.sendStatus(400)
  }

  birth_date = new Date(birth_date);
  start_date = new Date(start_date);
  gender = (gender === 0) ? 'male' : ((gender === 1) ? 'female' : 'other');

  const isSuccessful = insertOne({ name, birth_date, gender, email, cpf, start_date, team });

  if (isSuccessful) {
    return res.sendStatus(201)
  }

  return res.sendStatus(304)
}

const deleteByCpf = (req: Request, res: Response) => {
  var { cpf } = req.body;

  const isComplete = cpf !== undefined;
  if (!isComplete) {
    return res.sendStatus(400)
  }

  const isSuccessful = deleteOne(cpf);

  if (isSuccessful) {
    return res.sendStatus(200)
  }

  return res.sendStatus(404)
}

const updateByCpf = (req: Request, res: Response) => {
  var { name, birth_date, gender, email, cpf, start_date, team } = req.body;

  const isComplete = cpf !== undefined;
  if (!isComplete) {
    return res.sendStatus(400)
  }

  if (birth_date !== undefined) birth_date = new Date(birth_date);
  if (start_date !== undefined) start_date = new Date(start_date);
  if (gender !== undefined) gender = (gender === 0) ? 'male' : ((gender === 1) ? 'female' : 'other');

  const isSuccessful = updateOne({ name, birth_date, gender, email, cpf, start_date, team });

  if (isSuccessful) {
    return res.sendStatus(200)
  }

  return res.sendStatus(404)
}

export { listEmployees, createNewEmployee, deleteByCpf, updateByCpf }