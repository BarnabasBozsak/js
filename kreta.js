function generateStudentID(gradeLevel, fullName) {
  const cleanGrade = String(gradeLevel).trim().toUpperCase();
  const nameParts = String(fullName).trim().split(" ");
  let firstName = nameParts[0] || "";
  let lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : "";
  const pad3 = (str) => (str + "xxx").substring(0, 3).toLowerCase();
  const last3 = pad3(lastName);
  const first3 = pad3(firstName);
  return `b${cleanGrade}${last3}${first3}`;
}
function getStudentObject(fullName, gradeLevel, grades) {
  return {
    fullName: fullName,
    gradeLevel: gradeLevel,
    ID: generateStudentID(gradeLevel, fullName),
    grades: grades || [],
    getAverage: function () {
      if (this.grades.length === 0 || !this.grades) return 0;
      const total = this.grades.reduce((sum, items) => sum + items, 0);
      return total / this.grades.length;
    },
    getLetterGrade: function () {
      const avg = this.getAverage();
      if (avg >= 90) return "A";
      else if (avg >= 80) return "B";
      else if (avg >= 70) return "C";
      else if (avg >= 60) return "D";
      else return "F";
    },
    getStatus: function () {
      return this.getAverage() >= 60 ? "Pass" : "Fail";
    },
  };
}
const $ = (id) => document.getElementById(id);
let student = null;
function create(student) {
  const name = $("fullName").value.trim();
  const grade = $("gradeLevel").value.trim();
  const raw = $("grades").value.trim();
  const err = $("err");
  err.textContent = "";
  if(!name)
  {
    err.textContent = "Enter the student's full name"; return;0
  }
  if(!grade)
  {
    err.textContent = "Enter the student's grade level"; return;
  }
  const grades = raw ? raw.split(",") : [];
  student = getStudentObject(name, grade, grades);
  if(grades.some((n) => Number.isNaN(n)))
  {
    err.textContent = "Enter valid grades"; return;
  }
  student = getStudentObject(name,grade,grades);
  show(student);
}
function show(s)
{
  const status = s.getStatus();
  $("out").innerHTML = "";
  const rows = [
    ["Name",s.fullName],
    ["Grade Level",s.gradeLevel],
    ["Student ID",s.ID],
    ["Grades",s.grades.length > 0 ? s.grades.join(", "): "none"],
    ["Average",s.getAverage().toFixed(2)],
    ["Letter Grade",s.getLetterGrade()],
    ["Status",status]
  ];
  rows.forEach(([k,v]) => {
    const dt = document.createElement("dt"); dt.textContent = k;
    const dd = document.createElement("dd"); dd.textContent = v;
    if(k === "Status") dd.className = status;
    $("out").append(dt,dd);
  });
  $("json").textContent = JSON.stringify(s,null,2);
  $("result").classList.remove("hidden");
  $("create").addEventListener("click", create);
  $("reset").addEventListener("click", () => {
    $("fullName").value = "";
    $("gradeLevel").value = "";
    $("grades").value = "";
    $("err").textContent = "";
    $("result").classList.add("hidden");
  });
  ["fullName","gradeLevel","grades"].forEach((id) =>{
    $(id).addEventListener("keydown", (e) =>{
      if(e.key === "Enter")
      {
        create();
      }
    })
  })
}