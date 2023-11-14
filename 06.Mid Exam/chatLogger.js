function chatLogger(input) {
    let finalChat = [];
    let command = input.shift().split(" ");
    while (command[0] != "end") {
        if (command[0] === "Chat") {
            finalChat.push(command[1]);
        } else if (command[0] === "Delete") {
            if (finalChat.includes(command[1])) {
                let index = finalChat.indexOf(command[1]);
                finalChat.splice(index, 1);
            } else {
                command = input.shift().split(" ");
                continue;
            }
        } else if (command[0] === "Edit") {
            if (finalChat.includes(command[1])) {
                let index = finalChat.indexOf(command[1]);
                finalChat.splice(index, 1, command[2]);
            } else {
                command = input.shift().split(" ");
                continue;
            }
        } else if (command[0] === "Pin") {
            if (finalChat.includes(command[1])) {
                let index = finalChat.indexOf(command[1]);
                let pinnedEl = finalChat.splice(index, 1);
                finalChat.push(pinnedEl[0]);
            } else {
                command = input.shift().split(" ");
                continue;
            }
        } else if (command[0] === "Spam") {
            for (let i = 1; i < command.length; i++) {
                finalChat.push(command[i]);
            }
        }
        command = input.shift().split(" ");
    }
    console.log(finalChat.join("\n"));
}

// chatLogger(["Chat Hello","Chat Hi", "Delete John", "Pin Hi", "end"])
// chatLogger(["Chat Hello", "Chat darling", "Edit darling Darling", "Spam how are you", "Delete Darling", "end"])
// chatLogger(["Chat Hello", "Delete John", "Pin Hi", "end"])
chatLogger(["Chat John", "Spam Let's go to the zoo", "Edit zoo cinema", "Chat tonight", "Pin John", "end"])