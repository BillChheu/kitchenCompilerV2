module.exports.validateUserRegistration = (username, email, password, confirmPassword) => {
    const errors = {}
    if (username.trim() === "") {
        errors.username = "Username must not be empty!"
    } 
    if (email.trim() === "") {
        errors.email = "Email must not be empty!"
    } else {
        const emailRegEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
        if (!email.match(emailRegEx)) {
            errors.email = "Not a valid email address!"
        }
    }
    if (password === "") {
        errors.password = "Password must not be empty!"
    } else if (password !== confirmPassword) {
        errors.password = "Passwords must match!"
    }

    return {
        errors,
        valid: (Object.keys(errors).length < 1)
    }
}