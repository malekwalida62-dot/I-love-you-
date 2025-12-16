function login() {
  var pass = document.getElementById("password").value;
  var error = document.getElementById("error");

  if (pass === "love") {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
  } else {
    error.innerText = "كلمة السر غلط";
  }
}
