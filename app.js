"use strict";
const buttonAll = document.querySelector(".keys");
console.log(buttonAll);
const displayCalc = document.querySelector(".display");
console.log(displayCalc);
const toggleBtn = document.querySelector(".dark-toggle");
console.log(toggleBtn);

buttonAll.addEventListener("click", (e) => {
  //not to respond incase the user does not click any button by error
  if (!e.target.classList.contains("key")) return;
  // to check if the user clicks action button
  if (e.target.classList.contains("action")) {
    if (e.target.textContent.toLowerCase() === "ac") {
      displayCalc.value = "";
      return;
    } else if (e.target.textContent.toLowerCase() === "del") {
      displayCalc.value = displayCalc.value.slice(0, -1);
      return;
    } else if (e.target.classList.contains("percent")) {
      displayCalc.value += "%";
      return;
    }
  }
  // to check if we have the equal button and also to tell javascript it exists and does auto calculations
  if (e.target.classList.contains("equals")) {
    let values = displayCalc.value;

    if (values.includes("%")) {
      values = values.replaceAll("%", "/100");
    }
    displayCalc.value = eval(values);
    return;
  }

  console.log(e.target);
  console.log(e.target.textContent);

  // to take 0 if it was added fro the beginning

  if (displayCalc.value.startsWith("0")) {
    displayCalc.value = displayCalc.value.slice(1);
  }
  displayCalc.value += e.target.textContent;
});

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const root = document.documentElement;
    const isDark = root.getAttribute("dark-theme") === "dark";

    if (isDark) {
      root.removeAttribute("dark-theme");
    } else {
      root.setAttribute("dark-theme", "dark");
    }
  });
}

// if (toggleBtn) {
//   toggleBtn.addEventListener("click", () => {
//     const root = document.documentElement;
//     const isDark = root.getAttribute("dark-theme") === "dark";

//     if (isDark) {
//       root.removeAttribute("dark-theme");
//       toggleBtn.classList.remove("rotated");
//     } else {
//       root.setAttribute("dark-theme", "dark");
//       toggleBtn.classList.add("rotated");
//     }
//   });
// }
