function softUniReception(arr) {
    let neededTime = 0;
    let totalAnswersPerHour = 0;
    let breakTime = 0;
    let studentsCount = Number(arr[3]);

    for (let i = 0; i < arr.length - 1; i++) {
        totalAnswersPerHour += Number(arr[i]);
    }

    while (studentsCount > 0) {
        studentsCount -= totalAnswersPerHour;
        neededTime++;

        if (studentsCount == 0) {
            break;
        }

        if (neededTime % 3 === 0) {
            breakTime++;
        }
    }
    console.log(`Time needed: ${neededTime + breakTime}h.`);
}

softUniReception(['5', '6', '4', '20'])
// softUniReception(['1', '2', '3', '45'])
// softUniReception(['3', '2', '5', '40'])
