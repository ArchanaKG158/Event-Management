document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const errorPopup = document.getElementById("error-popup");
  const closeButton = document.getElementById("close-button");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "acchu" && password === "ashu") {
      window.location.href = "dashboard.html";
    } else {
      displayErrorPopup();
    }
  });

  closeButton.addEventListener("click", function () {
    closeErrorPopup();
  });

  function displayErrorPopup() {
    errorPopup.style.display = "block";
  }

  function closeErrorPopup() {
    errorPopup.style.display = "none";
  }
});
