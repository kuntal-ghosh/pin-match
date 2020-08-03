// getting the references of dom elements
const container = document.querySelector(".container");

const pinGeneratorInput = document.querySelector(".pin-generator input");

const pinGeneratorButton = document.getElementById("pin-generate-button");

const calculaorInput = document.querySelector(".input-section input");

const buttons = document.getElementsByClassName("button");

// adding click event

pinGeneratorButton.addEventListener("click", () => {
  let randomPassword = Math.floor(1000 + Math.random() * (9999 - 1000 + 1));
  pinGeneratorInput.value = randomPassword;
});

// function for adding click event

for (const button of buttons) {
  button.addEventListener("click", (e) => {
    calculaorInput.value += e.target.innerText;
    console.log(e.target.innerText);
  });
}
