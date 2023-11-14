function schoolGrades(arr) {

    let gradeRegister = {};

    for (let each of arr) {
        let grades = each.split(" ");
        let name = grades.shift();
        if (name in gradeRegister) {
            gradeRegister[name].push(...grades);
            continue;
        }
        gradeRegister[name] = grades;
    }

    let entries = Object.entries(gradeRegister).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, grades] of entries) {
        let avgGrade = 0;
        let sum = 0;

        for (let grade of grades) {
            grade = Number(grade);
            sum += grade;
        }
        avgGrade = (sum / grades.length).toFixed(2);
        console.log(`${name}: ${avgGrade}`);
    }
}

schoolGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])

// schoolGrades([
//     'Steven 3 5 6 4',
//     'George 4 6',
//     'Tammy 2 5 3',
//     'Steven 6 3'])
