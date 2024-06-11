document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btns");
  const display = document.getElementById("display");
  let displayValue = "";

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.value;

      if (value === "AC") {
        displayValue = "";
      } else if (value === "DEL") {
        displayValue = displayValue.toString().slice(0, -1);
      } else if (value === "=") {
        displayValue = eval(displayValue).toString();
      } else if (value === "%") {
        displayValue = (eval(displayValue) / 100).toString();
      } else {
        displayValue += value;
      }

      display.value = displayValue;
    });
  });
});
