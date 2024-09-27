// let saveEl = document.getElementById("save-el");
// let countEl = document.getElementById("count-el");
// let count = 0;

// function increment() {
//   count += 1;
//   countEl.textContent = count;
// }

// function save() {
//   let countStr = count + " - ";
//   saveEl.textContent += countStr;
//   count = 0;
//   countEl.textContent = 0;

// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error"
let errorMessage = document.getElementById("error");
function purchase() {
  errorMessage.textContent = "Something went wrong, please try again";
}
