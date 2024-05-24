document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("mainForm");
  const submitButton = document.getElementById("submitButton");

  const fullName = document.getElementById("fullName");
  const email = document.getElementById("email");
  const dob = document.getElementById("dob");
  const gender = document.getElementById("gender");
  const country = document.getElementById("country");
  const passportImage = document.getElementById("passportImage");

  const fullNameError = document.getElementById("fullNameError");
  const emailError = document.getElementById("emailError");
  const dobError = document.getElementById("dobError");
  const genderError = document.getElementById("genderError");
  const countryError = document.getElementById("countryError");
  const passportImageError = document.getElementById("passportImageError");

  function validateField(field) {
    let isValid = true;
    switch (field) {
      case "fullName":
        if (fullName.value.trim() === "" || fullName.value.length > 50) {
          fullNameError.textContent =
            "Full Name is required and must be less than 50 characters.";
          isValid = false;
        } else {
          fullNameError.textContent = "";
        }
        break;
      case "email":
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email.value)) {
          emailError.textContent = "Please enter a valid email address.";
          isValid = false;
        } else {
          emailError.textContent = "";
        }
        break;
      case "dob":
        const today = new Date().toISOString().split("T")[0];
        if (dob.value === "" || dob.value >= today) {
          dobError.textContent = "Please enter a valid date of birth.";
          isValid = false;
        } else {
          dobError.textContent = "";
        }
        break;
      case "gender":
        if (gender.value === "") {
          genderError.textContent = "Please select your gender.";
          isValid = false;
        } else {
          genderError.textContent = "";
        }
        break;
      case "country":
        if (country.value === "") {
          countryError.textContent = "Please select your country.";
          isValid = false;
        } else {
          countryError.textContent = "";
        }
        break;
      case "passportImage":
        if (passportImage.files.length === 0) {
          passportImageError.textContent = "Please upload your passport image.";
          isValid = false;
        } else {
          passportImageError.textContent = "";
        }
        break;
    }

    checkFormValidity();
  }

  function checkFormValidity() {
    const isValid =
      fullName.value.trim() !== "" &&
      fullName.value.length <= 50 &&
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.value) &&
      dob.value !== "" &&
      dob.value < new Date().toISOString().split("T")[0] &&
      gender.value !== "" &&
      country.value !== "" &&
      passportImage.files.length > 0;

    submitButton.disabled = !isValid;
  }

  fullName.addEventListener("blur", () => validateField("fullName"));
  email.addEventListener("blur", () => validateField("email"));
  dob.addEventListener("blur", () => validateField("dob"));
  gender.addEventListener("change", () => validateField("gender"));
  country.addEventListener("change", () => validateField("country"));
  passportImage.addEventListener("change", () =>
    validateField("passportImage"),
  );
});
