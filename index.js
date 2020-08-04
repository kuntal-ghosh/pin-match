// getting the references of dom elements
const container = document.querySelector(".container");

const pinGeneratorInput = document.querySelector(".pin-generator input");

const pinGeneratorButton = document.getElementById("pin-generate-button");

const calculaorInput = document.querySelector(".input-section input");

const numbers = document.getElementsByClassName("number");

const deleteButton = document.getElementById("delete");

const clearButton = document.getElementById("clear");

const submitButton = document.getElementById("submit");

const tryNumber = document.getElementById("try-id");

const notifySuccess = document.getElementById("notify-success");

const notifyFailure = document.getElementById("notify-failure");

const actionLeft = document.getElementById("action-left");

let numberOfTryLeft = parseInt(tryNumber.textContent);

// adding click event on buttons

pinGeneratorButton.addEventListener("click", () => {
  let randomPassword = Math.floor(1000 + Math.random() * (9999 - 1000 + 1));
  pinGeneratorInput.value = randomPassword;
  actionLeft.style.display = "block";
});

for (const number of numbers) 
{
  number.addEventListener("click", (e) => {
    calculaorInput.value += e.target.innerText;
  });
}

clearButton.addEventListener("click", () => {
  calculaorInput.value = "";
});

deleteButton.addEventListener("click", () => {
  if (calculaorInput.value.length > 0) {
    let length = calculaorInput.value.length - 1;
    let value = calculaorInput.value.slice(0, length);
    calculaorInput.value = value;
  }
});

submitButton.addEventListener("click", () => {
  if (
    calculaorInput.value != undefined &&
    calculaorInput.value != "" &&
    calculaorInput.value.length > 0 &&
    pinGeneratorInput.value != undefined &&
    pinGeneratorInput.value != "" &&
    pinGeneratorInput.value.length > 0
  ) 
  {
    if (areTwoStringEqual(calculaorInput.value, pinGeneratorInput.value)) {

      numberOfTryLeft = 3;
      tryNumber.textContent = numberOfTryLeft;
      pinGeneratorInput.value = "";
      calculaorInput.value = "";
      actionLeft.style.display = "none";
      notifyFailure.style.display = "none";
      notifySuccess.style.display = "block";

    } 
    else 
    {
      notifyFailure.style.display = "block";
      notifySuccess.style.display = "none";

      if (numberOfTryLeft > 0) 
      {
        calculaorInput.value = "";
        numberOfTryLeft = numberOfTryLeft - 1;
        tryNumber.textContent = numberOfTryLeft;

        if (numberOfTryLeft <= 0) 
        {
          submitButton.disabled = true;
          submitButton.style.backgroundColor = "#39458c";
          pinGeneratorInput.value = "";
        }
      }
    }
  }
});



/**
 *this function compares two string that they are equal or not
 *
 * @param {string} string1
 * @param {string} string2
 * @returns true or false comparing the provided two string
 */
function areTwoStringEqual(string1, string2) {
  if (
    string1 != undefined &&
    string1 != "" &&
    string2 != undefined &&
    string2 != ""
  )
   {
    if (string1 === string2)
    {
      return true;
    }
  }

  return false;
}
