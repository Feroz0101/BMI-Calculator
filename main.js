let form = document.querySelector("form");

form.addEventListener("submit", function (calculate) {
  calculate.preventDefault();
  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  let result = document.querySelector("#result");

  if (height === "" || height === "" || isNaN(height)) {
    result.innerHTML = `Please Enter Right Height your enter ${height}`;
  } else if (weight === "" || weight === "" || isNaN(weight)) {
    result.innerHTML = `Please Enter Right Height your enter ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    result.innerHTML = `<span>${bmi}</span>`;
  }
});
