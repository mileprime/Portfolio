document.addEventListener("DOMContentLoaded", () => {  // Ensure the script runs after the DOM is fully loaded
  var mode = document.getElementById("mode");

  function setMode() {  // Function to set the mode based on the checkbox state
    if (mode.checked) {
      document.documentElement.style.setProperty("--background-color", "");  // Set to dark mode
      document.documentElement.style.setProperty("--secondary-color", "#eac403");
    } else {
      document.documentElement.style.setProperty("--background-color", "#1a1a40");  // Set to light mode
      document.documentElement.style.setProperty("--secondary-color", "#eac403");
    }
  }

  mode.addEventListener("change", setMode);  // Event listener for checkbox state change

  setMode();  // Call the function on page load to set the initial mode
});

