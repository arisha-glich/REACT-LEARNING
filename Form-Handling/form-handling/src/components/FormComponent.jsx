import React from 'react';
import useValidation from '../hooks/useValidation';
import useForm from '../hooks/useForm';
import '../styles/FormComponet.css';

const FormComponent = () => {
  const initialFormValues = {
    name: '',
    email: '',
    dob: '',
    role: '',
    password: '',
    confirmPassword: '',
  };

  const { formData, errors, handleChange, resetForm} = useForm(initialFormValues);
  const { validate } = useValidation(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Name: ${formData.name}\nEmail: ${formData.email}\nDOB: ${formData.dob}\nRole: ${formData.role}`);
      resetForm();
    }
  };

  const roles = ['Admin', 'User', 'Guest']; // Example roles

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="dob">Date of Birth:</label>
        <input
          id="dob"
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
        {errors.dob && <p>{errors.dob}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="role">Role:</label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="">Select a role</option>
          {roles.map((role) => (
            <option key={role} value={role}>{role}</option>
          ))}
        </select>
        {errors.role && <p>{errors.role}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
      </div>

      <button type="submit" className="submit-button">Submit</button>
      <button type="reset" className="submit-button" onClick={resetForm}>Reset</button>
    </form>
  );
};

export default FormComponent;
