const randomAuthor = () => {
  // TODO: random author name
  let author =
    tr[Math.floor(Math.random() * tr.length)].children[1].textContent;
  showTitle.textContent = author;
};

// search movie title
const searchMovieTitle = () => {
  // TODO: search movie by title
  for (let i = 0; i < tr.length; i++) {
    if (tr[i].firstElementChild.textContent.includes(searchText.value)) {
      tr[i].style.display = "table-row";
    } else {
      tr[i].style.display = "none";
    }
  }
};

// Main
const tr = document.querySelectorAll("tbody tr");
const searchText = document.querySelector("#search");
const showTitle = document.querySelector("h1");

// TODO: Add event listeners on input search
searchText.addEventListener("keyup", searchMovieTitle);

// TODO: call randomAuthor function every 1000 milliseconds
setInterval(randomAuthor, 1000);
