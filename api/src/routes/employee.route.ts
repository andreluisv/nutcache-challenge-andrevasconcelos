import { Router } from 'express'
import { listEmployees, createNewEmployee, deleteByCpf, updateByCpf } from '../controllers/employee.controller'

const Routes: Router = Router();

Routes.get('/', listEmployees)
Routes.post('/', createNewEmployee)
Routes.delete('/', deleteByCpf)
Routes.put('/', updateByCpf)

export default Routes;