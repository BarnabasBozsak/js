function generateStudentID(gradeLevel, fullName) {
  const cleanGrade = String(gradeLevel).trim().toUpperCase();
  const nameParts = String(fullName).trim().split(/\s+/);
  const firstName = nameParts[0] || "";
  const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : "";
  const pad3 = (str) => (str + "xxx").substring(0, 3).toLowerCase();
  return `b${cleanGrade}${pad3(lastName)}${pad3(firstName)}`;
}

function getStudentObject(gradeLevel, fullName, grades) {
  return {
    fullName: fullName,
    gradeLevel: gradeLevel,
    ID: generateStudentID(gradeLevel, fullName),
    grades: grades || [],
    getAverage: function () {
      if (!this.grades || this.grades.length === 0) return 0;
      const total = this.grades.reduce((sum, item) => sum + item, 0);
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
function getClassObject() {
  return {
    students: [],
    addstudent: function (student) {
      this.students.push(student);
    },
    removestudent: function (index) {
      this.students.splice(index, 1);
    },
    hasID: function (id) {
      return this.students.some((s) => s.ID === id);
    },
    getGraded: function () {
      return this.students.filter((s) => s.grades.length > 0);
    },
    getclassAverage: function () {
      const graded = this.getGraded();
      if (graded.length === 0) return 0;
      const total = graded.reduce((sum, s) => sum + s.getAverage(), 0);
      return total / graded.length;
    },
    getclassLetterGrade: function () {
      const avg = this.getclassAverage();
      if (avg >= 90) return "A";
      else if (avg >= 80) return "B";
      else if (avg >= 70) return "C";
      else if (avg >= 60) return "D";
      else return "F";
    },
    getHighest: function () {
      const graded = this.getGraded();
      if (graded.length === 0) return null;
      return graded.reduce((a, b) => (b.getAverage() > a.getAverage() ? b : a));
    },
    getLowest: function () {
      const graded = this.getGraded();
      if (graded.length === 0) return null;
      return graded.reduce((a, b) => (b.getAverage() < a.getAverage() ? b : a));
    },
    getPassCount: function () {
      return this.students.filter((s) => s.getStatus() === "Pass").length;
    },
    getDistribution: function () {
      const dist = { A: 0, B: 0, C: 0, D: 0, F: 0 };
      this.students.forEach((s) => dist[s.getLetterGrade()]++);
      return dist;
    },
  };
}
const $ = (id) => document.getElementById(id);
let student = null;
const classroom = getClassObject();

function create() {
  const name = $("fullName").value.trim();
  const grade = $("gradeLevel").value.trim();
  const raw = $("grades").value.trim();
  const err = $("err");
  err.textContent = "";

  if (!name) {
    err.textContent = "Enter the student's full name";
    return;
  }
  if (!grade) {
    err.textContent = "Enter the student's grade level";
    return;
  }
  const grades = raw
    ? raw
        .split(",")
        .map((n) => n.trim())
        .filter((n) => n !== "")
        .map(Number)
    : [];

  if (grades.some((n) => Number.isNaN(n))) {
    err.textContent = "Enter valid grades";
    return;
  }
  student = getStudentObject(grade, name, grades);
  if (classroom.hasID(student.ID)) {
    err.textContent = `A student with ID ${student.ID} already exists`;
    return;
  }
  classroom.addstudent(student);
  show(student);
  renderClass();

  $("fullName").value = "";
  $("gradeLevel").value = "";
  $("grades").value = "";
  $("fullName").focus();
}

function addRow(parent, label, value) {
  const dt = document.createElement("dt");
  dt.textContent = label;
  const dd = document.createElement("dd");
  dd.textContent = value;
  parent.append(dt, dd);
  return dd;
}

function describe(s) {
  return s ? `${s.fullName} (${s.getAverage().toFixed(2)})` : "n/a";
}

function renderClass() {
  const has = classroom.students.length > 0;
  $("stats").classList.toggle("hidden", !has);
  $("roster").classList.toggle("hidden", !has);
  if (!has) return;

  const total = classroom.students.length;
  const passed = classroom.getPassCount();
  const out = $("statsOut");
  out.innerHTML = "";
  addRow(out, "Students", total);
  addRow(out, "Class average", classroom.getclassAverage().toFixed(2));
  addRow(out, "Class letter grade", classroom.getclassLetterGrade());
  addRow(
    out,
    "Passing",
    `${passed} (${((passed / total) * 100).toFixed(0)}%)`,
  ).className = "pass";
  addRow(out, "Failing", total - passed).className =
    total - passed > 0 ? "fail" : "";
  addRow(out, "Highest average", describe(classroom.getHighest()));
  addRow(out, "Lowest average", describe(classroom.getLowest()));

  const dist = classroom.getDistribution();
  $("dist").innerHTML = "";
  Object.entries(dist).forEach(([letter, count]) => {
    const row = document.createElement("div");
    row.className = "bar-row";
    const l = document.createElement("span");
    l.textContent = letter;
    const track = document.createElement("div");
    track.className = "bar-track";
    const fill = document.createElement("div");
    fill.className = "bar-fill";
    fill.style.width = `${(count / total) * 100}%`;
    track.append(fill);
    const c = document.createElement("span");
    c.textContent = count;
    row.append(l, track, c);
    $("dist").append(row);
  });
  
  const body = $("rosterBody");
  body.innerHTML = "";
  classroom.students.forEach((s, i) => {
    const tr = document.createElement("tr");
    const status = s.getStatus();
    [
      s.ID,
      s.fullName,
      s.gradeLevel,
      s.getAverage().toFixed(2),
      s.getLetterGrade(),
      status,
    ].forEach((v, idx) => {
      const td = document.createElement("td");
      td.textContent = v;
      if (idx === 5) td.className = status.toLowerCase();
      tr.append(td);
    });
    const td = document.createElement("td");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "small";
    btn.textContent = "Remove";
    btn.addEventListener("click", () => {
      classroom.removestudent(i);
      renderClass();
    });
    td.append(btn);
    tr.append(td);
    body.append(tr);
  });
}

function show(s) {
  const status = s.getStatus();
  $("out").innerHTML = "";
  const rows = [
    ["Name", s.fullName],
    ["Grade Level", s.gradeLevel],
    ["Student ID", s.ID],
    ["Grades", s.grades.length > 0 ? s.grades.join(", ") : "none"],
    ["Average", s.getAverage().toFixed(2)],
    ["Letter Grade", s.getLetterGrade()],
    ["Status", status],
  ];
  rows.forEach(([k, v]) => {
    const dt = document.createElement("dt");
    dt.textContent = k;
    const dd = document.createElement("dd");
    dd.textContent = v;
    if (k === "Status") dd.className = status;
    $("out").append(dt, dd);
  });
  $("json").textContent = JSON.stringify(s, null, 2);
  $("result").classList.remove("hidden");
}
$("create").addEventListener("click", create);

$("reset").addEventListener("click", () => {
  $("fullName").value = "";
  $("gradeLevel").value = "";
  $("grades").value = "";
  $("err").textContent = "";
  $("result").classList.add("hidden");
});

["fullName", "gradeLevel", "grades"].forEach((id) => {
  $(id).addEventListener("keydown", (e) => {
    if (e.key === "Enter") create();
  });
});
