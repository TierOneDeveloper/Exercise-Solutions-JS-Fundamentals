function login(input) {
    let index = 0;
    let username = input[index];
    index++;
    let correctPass = "";
    let logginAttempts = 0;
    for (i = username.length - 1; i >= 0; i--) {
        correctPass += username[i];
    }
    let currentPass = input[index];
    while (currentPass != correctPass) {
        logginAttempts++;
        if (logginAttempts == 4) {
            console.log(`User ${username} blocked!`);
            return;
        }
        console.log("Incorrect password. Try again.");
        index++;
        currentPass = input[index];
    }
    console.log(`User ${username} logged in.`)
}

login(['Acer', 'login', 'go', 'let me in', 'recA'])