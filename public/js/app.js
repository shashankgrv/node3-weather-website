const weatherForm = document.querySelector("form");
const searchElement = document.querySelector("input");
const messageOne = document.querySelector("#messageOne");
const messageTwo = document.querySelector("#messageTwo");

weatherForm.addEventListener("submit", e => {
  e.preventDefault();

  const location = searchElement.value;
  const url = "http://localhost:3000/weather?address=" + location;

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch(url).then(response => {
    response.json().then(data => {
      if (data.error) {
        messageOne.textContent = data.error;
        messageTwo.textContent = "";
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });
});
