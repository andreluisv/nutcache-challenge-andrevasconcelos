import { Request, Response } from 'express'
import { insertOne, deleteOne, updateOne, getAll } from '../repositories/employee.repository'

const listEmployees = (req: Request, res: Response) => {
  return res.send('listEmployees')
}

const createNewEmployee = (req: Request, res: Response) => {
  return res.send('createNewEmployee')
}

const deleteByCpf = (req: Request, res: Response) => {
  return res.send('deleteByCpf')
}

const updateByCpf = (req: Request, res: Response) => {
  return res.send('updateByCpf')
}

export { listEmployees, createNewEmployee, deleteByCpf, updateByCpf }