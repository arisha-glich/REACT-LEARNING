import { useState } from 'react';

const useForm = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;//represent the name of the input field and its current value
    setFormData(prevState => ({
      ...prevState,
      [name]: value,//name is used to identify which input field's value should be updated
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
