const themeCheckbox = document.getElementById("theme-checkbox");
const themeLabel = document.querySelector(".theme-label");

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
  themeCheckbox.checked = true;
  themeLabel.textContent = "🌙";
} else {
  themeLabel.textContent = "🌞";
}

themeCheckbox.addEventListener("change", () => {
  if (themeCheckbox.checked) {
    document.body.classList.add("dark-theme");
    themeLabel.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-theme");
    themeLabel.textContent = "🌞";
    localStorage.setItem("theme", "light");
  }
});