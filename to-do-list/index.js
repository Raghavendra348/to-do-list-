const studentList = document.getElementById("studentList");

let students = JSON.parse(localStorage.getItem("students")) || [];

function displayStudents() {
  studentList.innerHTML = "";

  students.forEach((student, index) => {
    const div = document.createElement("div");

    div.classList.add("student-card");

    div.innerHTML = `
      <h3>${student.name}</h3>
      <p><strong>Roll No:</strong> ${student.roll}</p>
      <p><strong>Department:</strong> ${student.department}</p>

      <button class="delete-btn" onclick="deleteStudent(${index})">
        Delete
      </button>
    `;

    studentList.appendChild(div);
  });
}

function addStudent() {
  const name = document.getElementById("name").value.trim();
  const roll = document.getElementById("roll").value.trim();
  const department = document.getElementById("department").value.trim();

  if (name === "" || roll === "" || department === "") {
    alert("Please fill all fields");
    return;
  }

  const student = {
    name,
    roll,
    department
  };

  students.push(student);

  localStorage.setItem("students", JSON.stringify(students));

  displayStudents();

  document.getElementById("name").value = "";
  document.getElementById("roll").value = "";
  document.getElementById("department").value = "";
}

function deleteStudent(index) {
  students.splice(index, 1);

  localStorage.setItem("students", JSON.stringify(students));

  displayStudents();
}

displayStudents();