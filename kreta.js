function generateStudentID(gradeLevel, fullName) {
  const cleanGrade = String(gradeLevel).trim().toUpperCase();
  const nameParts = String(fullName).trim().split(" ");
  let firstName = nameParts[0] || "";
  let lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : "";
}
