import React from 'react';
const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,}$/;


export default function Validation(formValue, setFormValue) {

  const [formErrors, setFormErrors] = React.useState({});
  const [isValidForm, setIsValidForm] = React.useState(false);

  const handleChange = (evt) => {
    const input = evt.target;
    const value = input.value;
    const name = input.name;

    setFormValue({ ...formValue, [name]: value });

    if (input.name === 'email') {
        if ((regexEmail.test((value)) !== true)) {
          setFormErrors({ ...formErrors, [name]: 'Проверьте адрес почты' });
          setIsValidForm(false);
        } else {
            setFormErrors({ ...formErrors, [name]: input.validationMessage });
            setIsValidForm(input.closest('form').checkValidity());
        }
  
    } else {
        setFormErrors({ ...formErrors   , [name]: input.validationMessage });
        setIsValidForm(input.closest('form').checkValidity());
    }
    
  };

  const resetForm = React.useCallback(
    (newValue = {}, newErrors = {}, newIsValid = false) => {
      setFormValue(newValue);
      setFormErrors(newErrors);
      setIsValidForm(newIsValid);
    },
    [setFormValue, setFormErrors, setIsValidForm]
  );

  return { formErrors, isValidForm, handleChange, resetForm };
}