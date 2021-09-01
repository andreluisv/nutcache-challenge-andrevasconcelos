import { Router } from 'express'
import employeeRoutes from './employee.route'

const Routes: Router = Router();

Routes.use('/employee', employeeRoutes)
Routes.get('/', (_, res) => res.sendStatus(200))

export default Routes