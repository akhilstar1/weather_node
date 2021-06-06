console.log("ok client star");

const weatherform = document.querySelector("form");
const searchel = document.querySelector("input");
const paraSelect = document.querySelector(".ans");
const paselect = document.querySelector(".ans-2");
weatherform.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = searchel.value;
  fetch(`/weather/?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        paraSelect.textContent = data.error;
        paselect.textContent = "";
        console.log(data.error);
      } else {
        paraSelect.textContent = data.location;
        paselect.textContent = data.forecast;
        console.log(data);
      }
    });
  });
});
