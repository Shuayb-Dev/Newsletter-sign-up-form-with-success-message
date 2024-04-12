function ValidateEmail() {
  event.preventDefault(); //Prevents Email Validation Message From Disappearing Straightaway

  let input = document.getElementById("input");
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    document.getElementById("validationMessage").innerHTML = "";
  } else {
    document.getElementById("validationMessage").innerHTML =
      "Valid Email Required";
  }
}
