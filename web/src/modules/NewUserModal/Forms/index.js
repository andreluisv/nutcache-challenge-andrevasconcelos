import React from 'react';

export const Form = ({ onSubmit, defaultValues }) => {

  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}-${('0' + (d.getMonth() + 1)).slice(-2)}-${('0' + d.getDate()).slice(-2)}`
  }

  const formatMonth = (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}-${('0' + (d.getMonth() + 1)).slice(-2)}`
  }

  const genderToNumber = (gender) => {
    return gender === 'male' ? 0 : (gender === 'female' ? 1 : 0)
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input className="form-control" id="name" defaultValue={defaultValues ? defaultValues.name : null} />
      </div>

      <div className="form-group">
        <label htmlFor="birth_date">Birth Date</label>
        <input className="form-control" id="birth_date"
          type="date"
          defaultValue={defaultValues ? formatDate(defaultValues.birth_date) : null} />
      </div>

      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <select className="form-control" id="gender" defaultValue={defaultValues ? genderToNumber(defaultValues.gender) : null}>
          <option value={0}>Male</option>
          <option value={1}>Female</option>
          <option value={2}>Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          defaultValue={defaultValues ? defaultValues.email : null}
        />
      </div>

      <div className="form-group">
        <label htmlFor="cpf">CPF</label>
        <input className="form-control" id="cpf"
          defaultValue={defaultValues ? defaultValues.cpf : null}
          disabled={defaultValues} />
      </div>

      <div className="form-group">
        <label htmlFor="start_date">Start Date</label>
        <input className="form-control" id="start_date"
          type="month"
          defaultValue={defaultValues ? formatMonth(defaultValues.startDate) : null} />
      </div>

      <div className="form-group">
        <label htmlFor="team">Team</label>
        <select className="form-control" id="team" defaultValue={defaultValues ? defaultValues.team : null}>
          <option ></option>
          <option value={'Mobile'}>Mobile</option>
          <option value={'Frontend'}>Frontend</option>
          <option value={'Backend'}>Backend</option>
        </select>
      </div>

      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          {defaultValues ? 'Update' : 'Register'}
        </button>
      </div>
    </form>
  );
};
export default Form;
