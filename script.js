// script.js

function checkAuth() {
  const isLoggedIn = sessionStorage.getItem("loggedIn");
  if (!isLoggedIn) {
    window.location.href = "login.html";
  }
}

function logout() {
  sessionStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}
