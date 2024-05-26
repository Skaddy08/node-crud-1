document.addEventListener("DOMContentLoaded", () => {
  const registerButton = document.querySelector(".register-button");
  registerButton.addEventListener("click", () => {
    window.location.href = "/add";
  });
});
