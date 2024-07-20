const averageGrade = 91; // Середня оцінка студента

let gradeLevel;

switch (true) {
  case averageGrade < 60:
    gradeLevel = "Незадовільно";
    break;
  case averageGrade <= 70:
    gradeLevel = "Задовільно";
    break;
  case averageGrade <= 80:
    gradeLevel = "Добре";
    break;
  case averageGrade <= 90:
    gradeLevel = "Дуже добре";
    break;
  case averageGrade <= 100:
    gradeLevel = "Відмінно";
    break;
  default:
    gradeLevel = "Недійсна оцінка";
}

console.log(gradeLevel);
