let cardNumber = document.getElementById("number");
let numberInp = document.getElementById("card_number");

let cardName = document.getElementById("name");
let nameInp = document.getElementById("card_name");

let cardMonth = document.getElementById("month");
let monthInp = document.getElementById("card_month");

let cardYear = document.getElementById("year");
let yearInp = document.getElementById("card_year");

let cardCvc = document.getElementById("cvc");
let cvcInp = document.getElementById("card_cvc");

let submitBtn = document.getElementById("submit_btn");

let completed = document.querySelector(".thank");
let form = document.querySelector("form");

function setCardNumber(e) {
  cardNumber.innerText = format(e.target.value);
}
function setCardName(e) {
  cardName.innerText = e.target.value;
}

function setCardMonth(e) {
  cardMonth.innerText = e.target.value;
}

function setCardYear(e) {
  cardYear.innerText = e.target.value;
}

function setCardCvc(e) {
  cardCvc.innerText = e.target.value;
}

function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g,"$&")
}

function handleSubmit(e) {
  e.preventDefault();
  if(!nameInp.value){
    nameInp.classList.add("error");
    nameInp.parentElement.classList.add("error_message");
  }
  else {
    nameInp.classList.remove("error");
    nameInp.parentElement.classList.remove("error_message");
  }
  if(!numberInp.value){
    numberInp.classList.add("error");
    numberInp.parentElement.classList.add("error_message");
  }
  else {
    numberInp.classList.remove("error");
    numberInp.parentElement.classList.remove("error_message");
  }
  if(!monthInp.value){
    monthInp.classList.add("error");
    monthInp.parentElement.classList.add("error_message");
  }
  else {
    monthInp.classList.remove("error");
    monthInp.parentElement.classList.remove("error_message");
  }
  if(!yearInp.value){
    yearInp.classList.add("error");
    yearInp.parentElement.classList.add("error_message");
  }
  else {
    yearInp.classList.remove("error");
    yearInp.parentElement.classList.remove("error_message");
  }
  if(!cvcInp.value){
    cvcInp.classList.add("error");
    cvcInp.parentElement.classList.add("error_message");
  }
  else {
    cvcInp.classList.remove("error");
    cvcInp.parentElement.classList.remove("error_message");
  }
  if(nameInp.value && numberInp.value && monthInp.value && yearInp &&  cvcInp.value) {
    completed.classList.remove("hidden");
    form.classList.add("hidden");
  }
}

numberInp.addEventListener("keyup", setCardNumber);
nameInp.addEventListener("input", setCardName);
monthInp.addEventListener("change", setCardMonth);
yearInp.addEventListener("change", setCardYear);
cvcInp.addEventListener("input", setCardCvc);
submitBtn.addEventListener("click", handleSubmit)

