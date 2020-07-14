let getMyGrade = function(currentMarks, totalMarks) {
    let myPercent = (currentMarks/totalMarks) * 100

    let myGrade = ''

    if(myPercent >= 90) {
        myGrade = 'A'
    } else if(yPercent >= 80) {
        myGrade = 'B'
    } else if(yPercent >= 70) {
        myGrade = 'C'
    } else {
        myGrade = 'F'
    }

    return `Your grade is ${myGrade} and percentage is ${myPercent}`

    
}

let yourResult = getMyGrade(92, 100);
console.log(yourResult);

