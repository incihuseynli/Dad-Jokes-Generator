let options = {
  method: "GET",
  headers: { "X-Api-Key": "rWpBwJzunYSJv7tTCqBDXA==g48LVHZEVAsnC45y" },
};

let url = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const container = document.querySelector(".container");
fetch(url, options)
  .then((res) => res.json())
  .then((data) => {
    data.forEach(({ joke }) => {
      container.innerHTML += `
              <span class="title">#Don't Laugh Challenge</span>
              <p class="joke">${joke}</p>
              <button class="btn" onclick="getNewJoke()">Get Another Joke</button>
              `;
    });
  });

function getNewJoke() {
  window.location.reload();
}
