document.getElementById("login-btn").addEventListener("click", function (e) {
  const userNumber = document.getElementById("user-number").value;
  const userPin = document.getElementById("user-pin").value;
  if (userNumber === "01234567890" && userPin === "1234") {
    alert("Login Successful!");
    window.location.replace("../home.html");
  } else {
    alert("Number or PIN Invalid!");
  }
  return;
});
