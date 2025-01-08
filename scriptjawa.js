document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("theme-toggle");

  // Set the initial theme
  document.body.classList.add("light");

  // Add event listener to the button
  themeToggleButton.addEventListener("click", () => {
    if (document.body.classList.contains("light")) {
      document.body.classList.replace("light", "dark");
    } else {
      document.body.classList.replace("dark", "light");
    }
  });
});
