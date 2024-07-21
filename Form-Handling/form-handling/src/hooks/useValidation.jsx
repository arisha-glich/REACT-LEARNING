import { useState } from 'react';

const useValidation = (formData) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.name) {
      newErrors.name = 'Name is required';
      alert(newErrors.name)
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
      alert(newErrors.email)
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      alert(newErrors.email)
      isValid = false;
    }
    if (!formData.dob) {
      newErrors.dob = 'Date of Birth is required';
      alert(newErrors.dob)
      isValid = false;
    }
    if (!formData.role) {
      newErrors.role = 'Role is required';
      alert(newErrors.role)
      isValid = false;
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
      alert(newErrors.password)
      isValid = false;
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      alert(newErrors.confirmPassword)
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return {
    errors,
    validate,
  };
};

export default useValidation;
