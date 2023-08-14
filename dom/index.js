// Replace this with your code

const closeForm = document.getElementById("close-form");
const form = document.querySelector(".form");
const formContainer = document.querySelector(".form-container");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const text = document.querySelector(".sub-intro");

function toggle(){
  form.classList.toggle("hide");
  closeForm.textContent = "+";
}

function submit(e){
  e.preventDefault();
  if(!nameInput.value && !emailInput.value){
    nameInput.style.border = "2px solid red";
    emailInput.style.border = "2px solid red";
    alert("You must enter a name and an email address to subscribe!")
  }else if(!nameInput.value){
    nameInput.style.border = "2px solid red";
    alert("Please enter a name to subscribe.");
  }else if(!emailInput.value){
    emailInput.style.border = "2px solid red";
    alert("Please enter an email address to subscribe.");
  }else{
    nameInput.style.border = "none";
    emailInput.style.border = "none";
    text.textContent = "Thank you for subscribing!";
    toggle();
  }
}


closeForm.addEventListener("click", toggle)

form.addEventListener("submit", submit);