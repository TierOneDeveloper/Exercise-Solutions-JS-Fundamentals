function echoType(param) {
    let type = typeof param;
    console.log(type);

    if (type === "number" || type === "string") {
        console.log(`${param}`);
    } else {
        console.log("Parameter is not suitable for printing");
    }
}

echoType(12)
echoType("dsada")
echoType(null)