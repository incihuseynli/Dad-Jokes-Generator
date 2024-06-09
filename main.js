let options = {
  method: "GET",
  headers: { "X-Api-Key": "uZc1mt6SGZWbkplsWPAAr8gnIBmStFzRsu0szXiQ" },
};

let url = "https://api.api-ninjas.com/v1/dadjokes";

const container = document.querySelector(".container");
fetch(url, options)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data); // For debugging 
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
