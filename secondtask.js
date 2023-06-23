const students = [
  { name: "Leo Messi", chemistryMarks: 91, biologyMarks: 95, dob: "31-12-1995", },
  { name: "Cristiano Ronaldo", chemistryMarks: 90, biologyMarks: 81, dob: "31-05-1992",},
  { name: "Virat Kohli", chemistryMarks: 95, biologyMarks: 96, dob: "31-12-1995" },
 { name:"Rohit Sharma",chemistrymarks:85, biologymarks:86, dob:"31-12-1995",},
 { name:"Viswanathan Anand",chemistrymarks:99, biologymarks:10, dob:"12-12-1994",}
];

const compareStudents = (a, b) => {
    //total marks
  if (a.chemistryMarks + a.biologyMarks > b.chemistryMarks + b.biologyMarks) {
    return -1;
  }
  if (a.chemistryMarks + a.biologyMarks < b.chemistryMarks + b.biologyMarks) {
    return 1;
  }
  //marks in biology
  if (a.biologyMarks > b.biologyMarks) {
    return -1;
  }
  if (a.biologyMarks < b.biologyMarks) {
    return 1;
  }
  const [dayA, monthA, yearA] = a.dob.split("-").map(Number);
  const [dayB, monthB, yearB] = b.dob.split("-").map(Number);

  if (yearA < yearB) {
    return -1;
  }
  if (yearA > yearB) {
    return 1;
  }
  if (monthA < monthB) {
    return -1;
  }
  if (monthA > monthB) {
    return 1;
  }
  if (dayA < dayB) {
    return -1;
  }
  if (dayA > dayB) {
    return 1;
  }
  return 0;
};
students.sort(compareStudents);
console.log(students);

