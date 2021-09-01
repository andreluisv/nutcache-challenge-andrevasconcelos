import React from 'react';

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input className="form-control" id="name" />
      </div>

      <div className="form-group">
        <label htmlFor="birth_date">Birth Date</label>
        <input className="form-control" id="birth_date" type="date" />
      </div>

      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <select className="form-control" id="gender" >
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
        />
      </div>

      <div className="form-group">
        <label htmlFor="cpf">CPF</label>
        <input className="form-control" id="cpf"/>
      </div>

      <div className="form-group">
        <label htmlFor="start_date">Start Date</label>
        <input className="form-control" id="start_date" type="month" />
      </div>

      <div className="form-group">
        <label htmlFor="team">Team</label>
        <select className="form-control" id="team" >
          <option ></option>
          <option value={'Mobile'}>Mobile</option>
          <option value={'Frontend'}>Frontend</option>
          <option value={'Backend'}>Backend</option>
        </select>
      </div>

      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Register
        </button>
      </div>
    </form>
  );
};
export default Form;
