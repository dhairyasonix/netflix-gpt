
export const cheackValidation = (email, password) => {

    // const isNameValid =/^[a-zA-Z]+ [a-zA-Z]+$/.test(name)
    const isEmailValid = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);


    if (!isEmailValid) return "Email Id is not valid!"
    // if(!isNameValid) return "Please enter first and last name"
    if (!isPasswordValid) return "Password not valid"

    return null;

}