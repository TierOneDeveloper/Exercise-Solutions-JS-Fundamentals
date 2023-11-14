function vacation(number, type, day) {
    let singlePrice = 0;
    let totalPrice = 0;
    switch (type) {
        case "Students":
            if (day == "Friday") {
                singlePrice += 8.45;
            } else if (day == "Saturday") {
                singlePrice += 9.80;
            } else if (day == "Sunday") {
                singlePrice += 10.46;
            }
            break;
        case "Business":
            if (day == "Friday") {
                singlePrice += 10.90;
            } else if (day == "Saturday") {
                singlePrice += 15.60;
            } else if (day == "Sunday") {
                singlePrice += 16;
            }
            break;
        case "Regular":
            if (day == "Friday") {
                singlePrice += 15;
            } else if (day == "Saturday") {
                singlePrice += 20;
            } else if (day == "Sunday") {
                singlePrice += 22.50;
            }
            break;
    }

    totalPrice = number * singlePrice;

    if (type == "Students" && number >= 30) {
        totalPrice *= 0.85;
    } else if (type == "Business" && number >= 100) {
        totalPrice = (number - 10) * singlePrice;
    } else if (type == "Regular" && (number >= 10 && number <= 20)) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation
    (
        30,
        "Students",
        "Sunday"
    )