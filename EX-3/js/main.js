const clearInput = () => {
  //TODO: Clear data from input field
  firstName.value = "";
  lastName.value = "";
  province.value = "";
  for (let gender of genders) {
    if (gender.checked) {
      gender.checked = false;
    }
  }
  for (let skill of skills) {
    if (skill.checked) {
      skill.checked = false;
    }
  }
  comment.value = "";
};

const createRow = (event) => {
  // TODO: Create new row with data from input field
  event.preventDefault();
  const tableRow = document.createElement("tr");
  const tdFirstname = document.createElement("td");
  const tdLastname = document.createElement("td");
  const tdProvince = document.createElement("td");
  const tdGender = document.createElement("td");
  const tdSkill = document.createElement("td");
  const tdComment = document.createElement("td");

  tdFirstname.textContent = firstName.value;
  tdLastname.textContent = lastName.value;
  tdProvince.textContent = province.value;
  for (let gender of genders) {
    if (gender.checked) {
      tdGender.textContent = gender.value;
    }
  }
  let allskills = [];
  for (let skill of skills) {
    if (skill.checked) {
      allskills.push(skill.value);
    }
  }
  tdSkill.textContent = allskills;
  tdComment.textContent = comment.value;
  tableRow.appendChild(tdFirstname);
  tableRow.appendChild(tdLastname);
  tableRow.appendChild(tdProvince);
  tableRow.appendChild(tdGender);
  tableRow.appendChild(tdSkill);
  tableRow.appendChild(tdComment);
  tbody.appendChild(tableRow);
  clearInput();
};

// Main
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const province = document.querySelector("#province");
const genders = document.querySelectorAll('input[type="radio"]');
const skills = document.querySelectorAll(".skill");
const comment = document.querySelector("#comment");
const tbody = document.querySelector("tbody");
const btnSubmit = document.querySelector("button");

// TODO: add event listeners to submit button
btnSubmit.addEventListener("click", createRow);
