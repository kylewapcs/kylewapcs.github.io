document.getElementById("year").textContent = new Date().getFullYear();

const themeToggle = document.querySelector(".theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');

function updateThemeControl(theme) {
  const isDark = theme === "dark";
  themeToggle.textContent = isDark ? "☀ Light" : "☾ Dark";
  themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
  themeColor.setAttribute("content", isDark ? "#111111" : "#ffffff");
}

updateThemeControl(document.documentElement.dataset.theme);

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
  updateThemeControl(nextTheme);
});
