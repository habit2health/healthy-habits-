let mode = document.getElementById("mode");
let i = 1;
mode.addEventListener("click", function () {
  i += 1;
  if (i % 2 == 0) {
    document.body.style.backgroundImage =
      "url(https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fnphrgz8yfnjylrwfr0yl.png)";
  } else {
    document.body.style.background = "#A2CA71";
  }
});
/////////////////////////////
let signUpName = document.getElementById("signUpName");
let signUpMail = document.getElementById("signUpMail");
let signUpPass = document.getElementById("signUpPass");
let signUpSub = document.getElementById("signUpSub");
signUpSub.addEventListener("click", function () {
  if (
    signUpName.value == "" ||
    signUpMail.value == "" ||
    signUpPass.value == ""
  ) {
    alert("please Enter valid informations");
  } else {
    let signUpNameVal = signUpName.value;
    let signUpMailVal = signUpMail.value;
    let signUpPassVal = signUpPass.value;
    console.log(signUpNameVal);
    location.replace("habit2health.html")
    
  }
});
