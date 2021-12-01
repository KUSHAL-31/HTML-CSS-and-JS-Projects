function addStudent() {
    let student = {};
    student.name = document.getElementById("name").value;
    student.mobno = Number(document.getElementById("mobno").value);
    student.roll = Number(document.getElementById("roll").value);
    student.branch = document.getElementById("branch").value;
    //console.log(student);
    //display();
    studentList.push(student)
    display()
}

let studentList = [];

function display() {

    let rows = ""
    for (let i = 0; i < studentList.length; i++) {
        let student = studentList[i];
        rows += `<tr>
        <td>${student.name}</td>
        <td>${student.mobno}</td>
        <td>${student.roll}</td>
        <td>${student.branch}</td>
        <td><button onclick="removeStudent(${i})" style="background-color: white;">Delete</button></td>
        </tr>`
    }
    document.getElementById("data").innerHTML = rows;
}

function removeStudent(index){
    studentList.splice(index,1)
    display()
}
