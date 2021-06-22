'use strict'

let gradesForm = document.getElementById('gradesForm');
let tableSection = document.getElementById('tableSec');


Student.allStudents = [];
let studentGrades = [];

function Student(studentName, course) {
    this.studentName = studentName;
    this.course = course;
    Student.allStudents.push(this);

}

function getRandomGrade(min, max) {
    for (let i = 0; i < Student.allStudents.length; i++) {
        studentGrades.push(Math.floor(Math.random() * (max - min + 1)) + min);

    }
}

getRandomGrade(0, 100);
console.log(studentGrades);

gradesForm.addEventListener('submit', handleSubmitting);
function handleSubmitting(event) {
    event.preventDefault();
    let name = event.target.studentName.value;
    let course = event.target.courseSelection.value;

    console.log(course);
    const newStudent= new Student(name,course);

    getRandomGrade(0, 100);
    saveToLocalStorage();

    table.textContent = '';
   
    renderTableHeader();
    newStudent.renderTable();
    // render();

    gradesForm.removeEventListener('submit', handleSubmitting);
    gradesForm.reset();



}


function saveToLocalStorage() {
    let storageArr = JSON.stringify(Student.allStudents);
    localStorage.setItem('studentsData', storageArr);
    let grades=JSON.stringify(studentGrades);
    localStorage.setItem('grades',grades);
}
let tableHeadingArr = ['Student Name', 'Student Grade', 'Course'];
let table = document.createElement('table');
tableSection.appendChild(table);

function renderTableHeader() {
    let headingRow = document.createElement('tr');
    table.appendChild(headingRow);
    for (let i = 0; i < tableHeadingArr.length; i++) {
        let thElement = document.createElement('th');
        headingRow.appendChild(thElement);
        thElement.textContent = tableHeadingArr[i];
    }
}



Student.prototype.renderTable=function() {
    for (let i = 0; i < Student.allStudents.length; i++) {
        let dataRow=document.createElement('tr');
        table.appendChild(dataRow);
        let nameTd=document.createElement('td');
        dataRow.appendChild(nameTd);
        nameTd.textContent=Student.allStudents[i].studentName;
        let studentGradeTd=document.createElement('td');
        dataRow.appendChild(studentGradeTd);
        studentGradeTd.textContent=studentGrades[i];
        let courseTd=document.createElement('td');
        dataRow.appendChild(courseTd);
        courseTd.textContent=Student.allStudents[i].course;
    }

}

// function render(){
//     for (let i = 0; i < Student.allStudents.length; i++) {
//         let dataRow=document.createElement('tr');
//         table.appendChild(dataRow);
//         let nameTd=document.createElement('td');
//         dataRow.appendChild(nameTd);
//         nameTd.textContent=Student.allStudents[i].studentName;
//         let studentGradeTd=document.createElement('td');
//         dataRow.appendChild(studentGradeTd);
//         studentGradeTd.textContent=studentGrades[i];
//         let courseTd=document.createElement('td');
//         dataRow.appendChild(courseTd);
//         courseTd.textContent=Student.allStudents[i].course;
//     }

// }

function gettingDataFromLocalStorage(){
 let data=localStorage.getItem('studentsData');
 let parsedData=JSON.parse(data);
 let gradesData=localStorage.getItem('grades');
 let parseGrades=JSON.parse(gradesData);
 if(parsedData!==null){

     for (let i = 0; i<parsedData.length; i++) {
         new Student(parsedData[i].studentName,parsedData[i].course);
         parsedData=Student.allStudents;
     }
 }else if(parseGrades!==null){
    parseGrades=studentGrades;
}

}
getRandomGrade(0, 100);
gettingDataFromLocalStorage();
renderTableHeader();
// render();
const newStudent= new Student(this.name,this.course);
newStudent.renderTable();
