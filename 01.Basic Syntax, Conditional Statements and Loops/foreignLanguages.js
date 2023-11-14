function foreignLanguages(language) {
    switch (language) {
        case "England":
        case "USA":
            console.log("English");
            break;
        case "Spain":
        case "Argentina":
        case "Mexico":
            console.log("Spanish");
            break;
        default:
            console.log("unknown");
            break;
    }
}

foreignLanguages("England")
foreignLanguages("Spain")
foreignLanguages("Bulgaria")
foreignLanguages("Mexico")
foreignLanguages("Germany")
foreignLanguages("USA")
foreignLanguages("Argentina")

