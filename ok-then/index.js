function setTheme(theme) {
  let root = document.documentElement;
  if (theme === "light") {
    root.style.setProperty("--bg-color", "#ecf2ff");
    root.style.setProperty("--text-color", "#2b283a");
    root.style.setProperty("--title-color", "#4a4e74");
  } else if (theme === "dark") {
    root.style.setProperty("--bg-color", "#2b283a");
    root.style.setProperty("--text-color", "#ecf2ff");
    root.style.setProperty("--title-color", "#d5d4d8");
  }
}

// 1. Try to change the theme to 'dark'
// 2. Run the code to see that it works
setTheme("light");
