let getMyGrade = function(currentMarks, totalMarks) {
  if (currentMarks >= 0 && totalMarks > 0 && currentMarks <= totalMarks) {
    let myPercent = (currentMarks / totalMarks) * 100;
    let myGrade = "";
    if (myPercent >= 90) {
      myGrade = "A";
    } else if (myPercent >= 80) {
      myGrade = "B";
    } else if (myPercent >= 70) {
      myGrade = "C";
    } else if (myPercent >= 60) {
      myGrade = "D";
    } else {
      myGrade = "F";
    }
    return `Your grade is ${myGrade} and percentage is ${myPercent}`;
  } else {
    return `Enter proper value`;
  }
};
let yourResult = getMyGrade(400, 500);
console.log(yourResult);
