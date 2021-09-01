export default interface Employee {
  name: String,
  birth_date: Date,
  gender: 'male' | 'female' | 'other',
  email: String,
  cpf: String,
  start_date: Date,
  team?: 'Mobile' | 'Frontend' | 'Backend'
}