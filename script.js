// Toggle dark mode
document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Alert on form submit
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent successfully! (Form not connected to backend yet.)");
});
