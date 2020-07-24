const signupValidations = (values) => {
    let errors = {};
    const PRODUCT_NAME = values.product_name.trim();
    const BUSINESS_NAME = values.business_name.trim();
    const URL = values.url.trim();
    const DESCRIPTION = values.description.trim();

    
    //PRODUCT_NAME validations
    if (!PRODUCT_NAME) {errors.product_name = 'Product name is required.'}
    
    //BUSINESS_NAME validations
    if (!BUSINESS_NAME) {errors.business_name = 'Business name is required.'}
    
    //URL validations
    if (!URL) {errors.url = 'Product url is required.'}
    if(!!URL && !/^(ftp|http|https):\/\/[^ "]+$/.test(URL) ) {
        errors.url = "Invalid url."
    }
    
    //DESCRIPTION validations
    if (!DESCRIPTION) {errors.description = 'Description is required.'}
    
    
    return errors
}

export default signupValidations