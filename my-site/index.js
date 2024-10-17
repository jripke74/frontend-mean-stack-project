// Challenge 2:
// Replace the argument below according to your preference.

// grey, space, scary, military, romantic, cowboy, fantasy, superhero
favouriteMovieGenre("monocode");

// watermelon, tomato, banana, orange, avocado, blueberry
favouriteFruit();

// light, dark
favouriteMode("light");

// sharp, soft, round
favouriteEdgeStyle("round");

//////////////////////////////////////
// IGNORE THE CODE BELOW THIS LINE //
////////////////////////////////////

function setProp(prop, value) {
  document.documentElement.style.setProperty(prop, value);
}

function favouriteEdgeStyle(style) {
  setProp("--image", "var(--" + style + ")");
}

function favouriteMovieGenre(font) {
  if (font) {
    setProp("--font", "var(--" + font + ")");
  }
}

function favouriteMode(mode) {
  if (mode === "light" || !mode) {
    setProp("--background", "var(--light)");
    setProp("--text", "var(--dark)");
  } else if (mode === "dark") {
    setProp("--background", "var(--dark)");
    setProp("--text", "var(--light)");
  }
}

function favouriteFruit(theme) {
  if (theme === "pastel") {
    setProp("--light", "#f2f6c3");
    setProp("--dark", "#68c4af");
  } else if (theme === "muted") {
    setProp("--light", "#4c5b64");
    setProp("--dark", "#45241c");
  } else if (theme === "love") {
    setProp("--light", "#f06836");
    setProp("--dark", "#ba0001");
  } else if (theme === "sky") {
    setProp("--light", "#99ccff");
    setProp("--dark", "#3366ff");
  } else if (theme === "forrest") {
    setProp("--light", "#91b247");
    setProp("--dark", "#597c2b");
  } else if (theme === "shiny") {
    setProp("--light", "#2e9af3");
    setProp("--dark", "#02197c");
  } else if (theme === "banana") {
    setProp("--light", "#fbec5d");
    setProp("--dark", "#6b3e26");
  } else if (theme === "watermelon") {
    setProp("--light", "#75b855");
    setProp("--dark", "#ab3838");
  } else if (theme === "tomato") {
    setProp("--light", "#d62e3e");
    setProp("--dark", "#600000");
  } else if (theme === "avocado") {
    setProp("--light", "#6b8c21");
    setProp("--dark", "#704012");
  } else if (theme === "orange") {
    setProp("--light", "#ffca16");
    setProp("--dark", "#f97300");
  } else if (theme === "blueberry") {
    setProp("--light", "#41a8f9");
    setProp("--dark", "#064490");
  } else {
    setProp("--light", "#EBEBEB");
    setProp("--dark", "black");
  }
}

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("count-el");
console.log(countEl);

let count = 0;

function increment() {
  count = count + 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = count;
  count = 0;
}
