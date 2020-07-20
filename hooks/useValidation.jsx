import React, { useState, useEffect } from 'react'

const useValidation = (initialState, validationRules, handleSuccessValidations) => {

    const [valuesSaved, setValuesSaved] = useState(initialState);
    const [errorsValidation, setErrorsValidation] = useState([]);
    const [submitForm, setSubmitForm] = useState(false);

    useEffect(() => {
        if (!!submitForm && !Object.keys(errorsValidation).length) {
            handleSuccessValidations();
            setSubmitForm(false);
        }
    }, [errorsValidation])


    const handleChange = (e) => {        
        setValuesSaved({
            ...valuesSaved,
            [e.target.name]:  e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleValidate()
        setSubmitForm(true)
    }
    
    const handleValidate = () => {
        const errors = validationRules(valuesSaved);
        setErrorsValidation(errors);
    }

    return {
        valuesSaved,
        errorsValidation,
        handleSubmit,
        handleChange,
        handleValidate,
    };
}
 
export default useValidation;