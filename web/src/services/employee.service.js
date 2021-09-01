import request from 'axios'

const BASE_URL = 'http://localhost:3333/api/employee/'

const getEmployeeList = async () => {
  const req = await request.get(BASE_URL);
  return req.data || []
}

export { getEmployeeList }
