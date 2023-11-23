const createPoster = () => {
  // TODO: Create poster here
  const poster = document.createElement("div");
  poster.classList.add("poster");
  const posterImage = document.createElement("div");
  posterImage.classList.add("poster-img");
  const image = document.createElement("img");
  image.src = "images/poster.jpg";
  const textContainer = document.createElement("div");
  textContainer.classList.add("poster-text");
  const header1 = document.createElement("h1");
  header1.textContent = "កង្រីជាតិថ្មី";
  const text = document.createElement("p");
  text.textContent =
    "រឿងព្រេងខ្មែរ​ ជារឿងនិទានប្រកបដោយគតិអប់រំទាក់ទិននឹងសីលធម៌សង្គម និងសៀវភៅរូបភាពសំរាប់កុមារជាដើម។";
  textContainer.appendChild(header1);
  textContainer.appendChild(text);
  posterImage.appendChild(image);
  poster.appendChild(posterImage);
  poster.appendChild(textContainer);
  container.appendChild(poster);
};

// Main code
const container = document.querySelector(".container");
// TODO:  Call function to create 10 poster here
for (let i = 0; i < 10; i++) {
  createPoster();
}
