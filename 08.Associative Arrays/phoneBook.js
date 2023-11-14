function phoneBook(input) {

    let phone = {};

    for (let i = 0; i < input.length; i++) {
        let [name, number] = input[i].split(" ");
        phone[name] = number;
    }

    let entries = Object.entries(phone);

    for (let [name, number] of entries) {
        console.log(`${name} -> ${number}`);
    }
}

// phoneBook([
//     'Tim 0834212554',
//     'Peter 0877547887',
//     'Bill 0896543112',
//     'Tim 0876566344']);

phoneBook(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']
);