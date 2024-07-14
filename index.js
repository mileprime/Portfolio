document.addEventListener("DOMContentLoaded", () => {  // Ensure the script runs after the DOM is fully loaded
  var mode = document.getElementById("mode");

  function setMode() {  // Function to set the mode based on the checkbox state
    if (mode.checked) {
      document.documentElement.style.setProperty("--background-color", "");  // Set to dark mode
      document.documentElement.style.setProperty("--secondary-color", "#eac403");
      document.documentElement.style.setProperty("--main-text-color", "#FFF");
    } else {
      document.documentElement.style.setProperty("--background-color", "#FFF");  // Set to light mode
      document.documentElement.style.setProperty("--secondary-color", "#1859F1");
      document.documentElement.style.setProperty("--main-text-color", "#252424");
    }
  }

  mode.addEventListener("change", setMode);  // Event listener for checkbox state change

  setMode();  // Call the function on page load to set the initial mode
});

