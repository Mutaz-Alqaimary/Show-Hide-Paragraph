let button = document.querySelector("div button");
let p = document.querySelector("div p");
let cssObj = window.getComputedStyle(p);

button.addEventListener("click", () => {
  // let displayValue = cssObj.getPropertyValue("display");
  // displayValue === "block"
  //   ? p.style.setProperty("display", "none")
  //   : p.style.setProperty("display", "block");

  let visibilityValue = cssObj.getPropertyValue("visibility");
  visibilityValue === "visible"
    ? p.style.setProperty("visibility", "hidden")
    : p.style.setProperty("visibility", "visible");
});
