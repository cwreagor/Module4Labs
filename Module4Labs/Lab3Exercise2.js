// Lab 3 Exercise 2
const data = [
  { name: "bob", age: 23 },
  { name: "alice", age: 39 },
];

function addCard(name, age) {
    const container = document.getElementById('cardContainer');
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<h3>${name}</h3><p>Age: ${age}</p>`;
    container.appendChild(card);
}

data.forEach(person => {
    addCard(person.name, person.age);
});

// For Exercise 3 use the following:
const artist = {
  name: "Van Gogh",
  portfolio: [
    {
      title: "portrait",
      url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image",
    },

    {
      title: "sky",
      url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg",
    },
  ],
};