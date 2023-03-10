// main leftpart containers
const mainform = document.getElementById("user-data-container");
const thankyoucontainer = document.getElementById("thankyou-container");

// credit card front data
const cardname = document.getElementById("card-name");
const cardnumber = document.getElementById("card-number");
const cardexpdatemm = document.getElementById("card-exp-mm");
const cardexpdateyy = document.getElementById("card-exp-yy");
const cardcvc = document.getElementById("card-cvc");

// buttons
const confirmbtn = document.getElementById("confirm-button-end");
const submitbtn = document.getElementById("submit-btn");

// errors
const errorcardlength = document.getElementById("card-num-error");
const errorcardletter = document.getElementById("card-letter-error");
const errorcardname = document.getElementById("card-name-error");
const errormm = document.getElementById("mm-error");
const erroryy = document.getElementById("yy-error");
const errorcvc = document.getElementById("cvc-error");

const registeruser = () => {
  if (!check()) {
    return;
  } else {
    const inputname = document.getElementById("input-user-name").value;
    const inputnumber = document.getElementById("input-card-number").value;
    const inputmonth = document.getElementById("input-exp-month").value;
    const inputyear = document.getElementById("input-exp-year").value;
    const inputcvc = document.getElementById("input-card-cvc").value;

    cardname.innerHTML = inputname;
    cardnumber.innerHTML = inputnumber;
    cardexpdatemm.innerHTML = inputmonth;
    cardexpdateyy.innerHTML = inputyear;
    cardcvc.innerHTML = inputcvc;

    mainform.style.display = "none";
    thankyoucontainer.style.display = "flex";

    function resetInputValues(inputs) {
      for (let input of inputs) {
        input.value = "";
      }
    }

    // Usage:
    const allInputs = document.querySelectorAll('input[type="text"]');
    resetInputValues(allInputs);
  }
};
function showinputform() {
  mainform.style.display = "block";
  thankyoucontainer.style.display = "none";
}

//validation
let check = () => {
  let valid = true;

  // Check card number field length
  if (cardNumInput.value.length - 3 < 16) {
    valid = false;
    cardNumInput.classList.add("err");
    errorcardlength.textContent = "- Length must be equal to 16";
  }

  // Check if card number field contains letters
  if (/[a-zA-Z]/.test(cardNumInput.value)) {
    valid = false;
    cardNumInput.classList.add("err");
    errorcardletter.textContent = "- Card number cannot contain letters";
  }
  // if (!/^[a-zA-Z]+$/.test(inputname.value)) {
  //   valid = false;
  //   inputname.classList.add("err");
  //   errorcardname.textContent = "- Input must contain only letters";
  // }

  // Check if there are empty fields
  const inputname = document.getElementById("input-user-name");
  const inputnumber = document.getElementById("input-card-number");
  const inputmonth = document.getElementById("input-exp-month");
  const inputyear = document.getElementById("input-exp-year");
  const inputcvc = document.getElementById("input-card-cvc");

  //Get all input objects
  const inputs = [inputname, inputnumber, inputmonth, inputyear, inputcvc];
  for (let index in inputs) {
    // Check if name field is empty

    // Check if MM fields are empty
    if (inputs[index].value.length === 0 && index > 1 && index < 4) {
      errormm.textContent = "- Cannot be blank";
      inputs[index].classList.add("err");
      valid = false;
    }

    // Check if MM fields are filled
    if (inputs[index].value.length != 0 && index > 1 && index < 4) {
      errormm.textContent = "";
      inputs[index].classList.remove("err");
    }

    // Check if YY fields are filled
    if (inputs[index].value.length === 0 && index > 1 && index < 4) {
      erroryy.textContent = "- Cannot be blank";
      inputs[index].classList.add("err");
      valid = false;
    }

    // Check if YY fields are filled
    if (inputs[index].value.length != 0 && index > 1 && index < 4) {
      erroryy.textContent = "";
      inputs[index].classList.remove("err");
    }

    // Check if CVC field is empty
    if (inputs[index].value.length === 0 && index == 4) {
      errorcvc.textContent = "- Cannot be blank";
      inputs[index].classList.add("err");
      valid = false;
    }

    // Check if CVC field is filled
    if (inputs[index].value.length != 0 && index == 4) {
      errorcvc.textContent = "";
      inputs[index].classList.remove("err");
    }
  }

  return valid;
};
// const cardNumInput = document.getElementsByClassName("input-card-number")[0];
const cardNumInput = document.getElementsByClassName("card-number-input")[0];

// For card number input formatting

cardNumInput.addEventListener("input", function () {
  // Reset error message
  cardNumInput.classList.remove("err");
  errorcardlength.textContent = "";
  errorcardletter.textContent = "";

  // Add space after every 4 keystrokes
  if (cardNumInput.value.length % 5 === 0) {
    cardNumInput.value =
      cardNumInput.value.slice(0, -1) + " " + cardNumInput.value.slice(-1);
  }
});
