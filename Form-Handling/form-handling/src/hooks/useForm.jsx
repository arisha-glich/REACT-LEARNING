import { useState } from 'react';

const useForm = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const resetForm = () => {
    setFormData(initialValues);
    setErrors({});
  };

  const setFieldValue = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return {
    formData,
    errors,
    handleChange,
    setFieldValue,
    setErrors,
    resetForm,
  };
};

export default useForm;
