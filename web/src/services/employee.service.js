import request from 'axios'

const BASE_URL = 'http://localhost:3333/api/employee/'

const getEmployeeList = async () => {
  const req = await request.get(BASE_URL);
  return req.data || []
}

const createNewEmployee = async (employee) => {
  var status = 0;
  const req = await request.post(BASE_URL, { ...employee }).catch((error) => {
    status = -1
    if (error && error.response)
      status = error.response.status
  });
  if (req && req.status) return req.status
  return status
}

const deleteEmployee = async (cpf) => {
  var status = 0;
  const req = await request.delete(BASE_URL+'?cpf='+cpf).catch((error) => {
    status = -1
    if (error && error.response)
      status = error.response.status
  });
  if (req && req.status) return req.status
  return status
}

export { getEmployeeList, createNewEmployee, deleteEmployee }
