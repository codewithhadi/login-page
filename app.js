alert('Your Email: \n example@gmail.com \n Your Password \n 123456')


let userEmail = document.getElementById("email").value;
let userPassword = document.getElementById("pass").value;

let login = document.getElementById("btn");

login.addEventListener("click", () => {
  let userEmail = document.getElementById("email").value;
  let userPassword = document.getElementById("pass").value;
  if (userEmail == "example@gmail.com" && userPassword == 123456) {
    window.location.href = "https://www.facebook.com/";
  } else {
    alert("User not found please try again");
  }
});
