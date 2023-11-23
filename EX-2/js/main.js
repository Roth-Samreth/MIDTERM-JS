let movieList = [
  {
    id: 1,
    title: "កង្រីជាតិថ្មី",
    image: "images/poster-1.jpg",
    text: "រឿងព្រេងខ្មែរ​ ជារឿងនិទានប្រកបដោយគតិអប់រំទាក់ទិននឹងសីលធម៌សង្គម",
  },
  {
    id: 2,
    title: "ទាវសម័យថ្មី",
    image: "images/poster-2.jpg",
    text: "រឿងព្រេងខ្មែរ​ ជារឿងនិទានប្រកបដោយគតិអប់រំទាក់ទិននឹងសីលធម៌សង្គម",
  },
  {
    id: 3,
    title: "វិធាវី ២០២៤",
    image: "images/poster-3.jpg",
    text: "រឿងព្រេងខ្មែរ​ ជារឿងនិទានប្រកបដោយគតិអប់រំទាក់ទិននឹងសីលធម៌សង្គម",
  },
  {
    id: 4,
    title: "កាកី កែខ្លួន",
    image: "images/poster-4.jpg",
    text: "រឿងព្រេងខ្មែរ​ ជារឿងនិទានប្រកបដោយគតិអប់រំទាក់ទិននឹងសីលធម៌សង្គម",
  },
  {
    id: 5,
    title: "កុលាបប៉ៃលិន ថ្មី",
    image: "images/poster-5.jpg",
    text: "រឿងព្រេងខ្មែរ​ ជារឿងនិទានប្រកបដោយគតិអប់រំទាក់ទិននឹងសីលធម៌សង្គម",
  },
  {
    id: 6,
    title: "ស្មេហ៍ក្រោមពន្លឺច៍ន្ទ្រា",
    image: "images/poster-6.jpg",
    text: "រឿងព្រេងខ្មែរ​ ជារឿងនិទានប្រកបដោយគតិអប់រំទាក់ទិននឹងសីលធម៌សង្គម",
  },
];

const createPoster = (title, image, content) => {
  // TODO: create poster with different content here
  const poster = document.createElement("div");
  poster.classList.add("poster");
  const posterImage = document.createElement("div");
  posterImage.classList.add("poster-img");
  const img = document.createElement("img");
  img.src = image;
  const textContainer = document.createElement("div");
  textContainer.classList.add("poster-text");
  const header1 = document.createElement("h1");
  header1.textContent = title;
  const text = document.createElement("p");
  text.textContent = content;
  textContainer.appendChild(header1);
  textContainer.appendChild(text);
  posterImage.appendChild(img);
  poster.appendChild(posterImage);
  poster.appendChild(textContainer);
  container.appendChild(poster);
};

// Main code
const container = document.querySelector(".container");

// TODO: Call function to create poster with data here

for (let i = 0; i < movieList.length; i++) {
  createPoster(movieList[i].title, movieList[i].image, movieList[i].text);
}
