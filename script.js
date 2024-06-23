function toggleTheme() {
  var themeToggleBtn = document.getElementById("themeToggleBtn");
  currTheme = localStorage.getItem("currTheme");
  clsName = currTheme == "dark" ? "bi-lightbulb-off-fill" : "bi-lightbulb-fill";
  themeToggleBtn.innerHTML = `<i class="bi ${clsName}"></i>`;
  nextTheme = currTheme == "dark" ? "light" : "dark";
  document.body.setAttribute('data-bs-theme', nextTheme)
  localStorage.setItem("currTheme", nextTheme)

}

window.onload = () => {
  var themeToggleBtn = document.getElementById("themeToggleBtn");
  var currTheme = localStorage.getItem("currTheme");
  if (currTheme == null || currTheme == undefined) {
    // Check to see if Media-Queries are supported
    if (window.matchMedia) {
      // Check if the dark-mode Media-Query matches
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        // Dark
        currTheme = "dark"
      } else {
        // Light
        currTheme = "light"
      }
    } else {
      // Default (when Media-Queries are not supported)
        currTheme = "light"
    }
    localStorage.setItem('currTheme', currTheme)
  }
  
  if (currTheme == "dark") {
    clsName = "bi-lightbulb-fill"
    themeToggleBtn.innerHTML = `<i class="bi ${clsName}"></i>`;
    document.body.setAttribute('data-bs-theme', 'dark')
  }
};
