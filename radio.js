const withFocusRadio = document.getElementById("with-focus");
const withoutFocusRadio = document.getElementById("without-focus");
const valuesWithFocus = ["43.5", "46.5", "47.9", "50"];
const valuesWithoutFocus = ["15.2", "21.8", "24.8", "30"];

withFocusRadio.addEventListener("click", () => changeSelect(valuesWithFocus));
withoutFocusRadio.addEventListener("click", () =>
  changeSelect(valuesWithoutFocus)
);

function changeSelect(values) {
  const options = document.querySelectorAll(".cashback-value");

  for (let i = 0; i < values.length; i++) {
    options[i].value = values[i];
    options[i].textContent = `${values[i]}%`;
  }
}
