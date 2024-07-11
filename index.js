var mode = document.getElementById("mode");
// var btn = document.getElementById("btn");

// mode.addEventListener("change", () => {
//   alert("checked!!");
// });
// btn.addEventListener("click", () => {
//   alert("clicked!!");
// });

// mode.addEventListener("checked", () => {} );

//checked
mode.addEventListener("change", (e) => {
  if (e.target.checked === true) {
    document.documentElement.style.setProperty("--background-color", "");
    document.documentElement.style.setProperty("--secondary-color", "#eac403");
  }
  if (e.target.checked === false) {
    document.documentElement.style.setProperty("--background-color", "#4c2692");
    document.documentElement.style.setProperty("--secondary-color", "#eac403");
  }
});
