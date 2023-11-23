// Remove row functions from the table
const removeRow = (event) => {
  // TODO: Remove row with confirmation message when click on remove button
  confirm("Would you like to remove?");
  if (confirm) {
    event.target.parentElement.parentElement.remove();
  }
};

// View user information in list
const viewUser = (event) => {
  // TODO: View user information in list by click on view button
  const container = document.querySelector(".left-box ul");
  container.innerHTML = "";
  const liFirst = document.createElement("li");
  liFirst.textContent =
    event.target.parentElement.parentElement.children[0].textContent;
  const liLast = document.createElement("li");
  liLast.textContent =
    event.target.parentElement.parentElement.children[1].textContent;
  const liProvince = document.createElement("li");
  liProvince.textContent =
    event.target.parentElement.parentElement.children[2].textContent;
  const ligender = document.createElement("li");
  ligender.textContent =
    event.target.parentElement.parentElement.children[3].textContent;
  container.appendChild(liFirst);
  container.appendChild(liLast);
  container.appendChild(liProvince);
  container.appendChild(ligender);
};

// Main
const leftBox = document.querySelector(".left-box");
const btnViews = document.querySelectorAll(".view");
const btnRemoves = document.querySelectorAll(".remove");

// TODO: Add Event listeners to remove button
for (let btn of btnRemoves) {
  btn.addEventListener("click", removeRow);
}
// TODO: Add event listeners to view button
for (let btn of btnViews) {
  btn.addEventListener("click", viewUser);
}
