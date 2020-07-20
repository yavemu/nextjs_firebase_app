const signupValidations = (values) => {
    let errors = {};
    const NAME = values.name.trim();
    const PASSWORD = values.password.trim();
    const EMAIL = values.email.trim();

    //NAME validations
    if (!NAME) {errors.name = 'Name is required.'}
    
    //EMAIL validations
    if (!EMAIL) {errors.email = 'Email is required.'}
    if(!!EMAIL && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(EMAIL) ) {
        errors.email = "Invalid email."
    }
    
    //PASSWORD validations
    if (!PASSWORD) {errors.password = 'Password is required.'}
    if (!!PASSWORD && PASSWORD.length <= 6) {
        errors.password = 'The password must be greater than 6 characters.'
    }
    
    return errors
}

export default signupValidations