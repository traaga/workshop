export const validateName = (type: string, name: string) => {
    return name.length ? "" : type + " ei tohi tühi olla";
}


export const validateEmail = (email: string) => {
    //const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const emailRegExp = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;

    const validEmail = emailRegExp.test(email);

    let errMsg = "Email pole korrektne";

    if (email.length && validEmail) {
        errMsg = "";
    }

    return errMsg;
};

export const validatePhone = (phone: string) => {
    //const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    const phoneRegExp = /^[0-9]{7,12}$/;

    const validPhone = phoneRegExp.test(phone);

    let errMsg = "Telefoninumber pole korrektne";

    if (phone.length && validPhone) {
        errMsg = "";
    }

    return errMsg;
};

export const validatePassword = (password: string) => {

    const uppercaseRegExp = /(?=.*?[A-Z])/;
    const lowercaseRegExp = /(?=.*?[a-z])/;
    const digitsRegExp = /(?=.*?[0-9])/;
    //const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    const minLengthRegExp = /.{6,}/;

    const passwordLength = password.length;
    const uppercasePassword = uppercaseRegExp.test(password);
    const lowercasePassword = lowercaseRegExp.test(password);
    const digitsPassword = digitsRegExp.test(password);
    //const specialCharPassword = specialCharRegExp.test(password);
    const minLengthPassword = minLengthRegExp.test(password);

    let errMsg;

    if (passwordLength === 0) {
        errMsg = "Parool ei tohi olla tühi";
    } else if (!uppercasePassword) {
        errMsg = "Parool peab sisaldama vähemalt ühte suurt tähte";
    } else if (!lowercasePassword) {
        errMsg = "Parool peab sisaldama vähemalt ühte väikest tähte";
    } else if (!digitsPassword) {
        errMsg = "Parool peab sisaldama vähemalt ühte numbrit";
        //} else if (!specialCharPassword) {
        //    errMsg = "At least one Special Characters";
    } else if (!minLengthPassword) {
        errMsg = "Parool on liiga lühike";
    } else {
        errMsg = "";
    }

    return errMsg;
}

export const validatePasswordConfirm = (password: string, password2: string) => {

    let errMsg = "Paroolid ei kattu"

    if (password === password2) {
        errMsg = "";
    }

    return errMsg;
}
