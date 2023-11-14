function passwordValidator(pass) {
    let digitsCounter = 0;
    let passArr = pass.split();
    let currentChar = passArr[0].split("");

    function checkValidPassLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }

    function checkOnlyLettersOrDigits(pass) {
        for (let currentChar of pass) {
            let currentCharCode = currentChar.charCodeAt();

            if (
                !((currentCharCode >= 48 && currentCharCode <= 57) ||
                    (currentCharCode >= 65 && currentCharCode <= 90) ||
                    (currentCharCode >= 97 && currentCharCode <= 122))
            ) {
                console.log("Password must consist only of letters and digits");
                return false;
            }
        }
        return true;
    }

    function checkPassForTwoDigits(pass) {
        for (let currentChar of pass) {
            let currentCharCode = currentChar.charCodeAt();
            if (currentCharCode >= 48 && currentCharCode <= 57) {
                digitsCounter++;
            }
        }
        if (digitsCounter >= 2) {
            return true;
        } else {
            console.log("Password must have at least 2 digits");
            return false;
        }
    }

    let isValidLength = checkValidPassLength(pass);
    let isOnlyLettersOrDigits = checkOnlyLettersOrDigits(pass);
    let isTwoDigits = checkPassForTwoDigits(pass);

    if (isValidLength && isOnlyLettersOrDigits && isTwoDigits) {
        console.log("Password is valid");
    }
}

// passwordValidator('logIn')
// passwordValidator('MyPass123')
passwordValidator('Pa$s$s')
