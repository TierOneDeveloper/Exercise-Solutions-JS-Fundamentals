function schoolRegister(arr) {
    let register = {};

    for (let i = 0; i < arr.length; i++) {
        let studentData = arr[i].split(", ");
        let studentName = studentData.shift().split(": ").pop();
        let studentGrade = Number(studentData.shift().split(": ").pop());
        let studentScore = Number(studentData.shift().split(": ").pop());

        if (studentScore >= 3) {
            if (studentGrade + 1 in register) {
                register[studentGrade + 1]["studentList"].push(studentName);
                register[studentGrade + 1]["sumScore"] += studentScore;
            } else {
                register[studentGrade + 1] = { studentList: [studentName], sumScore: studentScore };
            }
        }
    }

    let result = [];

    for (let i in register) {
        result.push({ [i]: register[i] });
    }

    for (let i = 0; i < result.length; i++) {
        let obj = Object.keys(result[i]);
        let listLength = result[i][obj]["studentList"].length;
        let sum = result[i][obj]["sumScore"];
        console.log(`${obj} Grade \nList of students: ${result[i][obj]["studentList"].join(", ")} \nAverage annual score from last year: ${(sum / listLength).toFixed(2)}`);
        console.log("");
    }
}



// schoolRegister([
//     'Student name: George, Grade: 5, Graduated with an average score: 2.75',
//     'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
//     'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
//     'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
//     'Student name: John, Grade: 9, Graduated with an average score: 2.90',
//     'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
//     'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
// ])

schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
])
