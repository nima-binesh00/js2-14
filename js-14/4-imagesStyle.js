//todo1: Give all the images at even position a similar border color and style
//todo2: and all the images at odd position same border style but different from the even ones.
//*hint: iterate over the images using loops

let numimg = document.querySelectorAll("img");
let num = 1;
for (const element of numimg) {
  if (num % 2 == 1) {
    element.style.backgroundColor = "#a3c8e6";
    element.style.border = "#236b7d solid 3px";
    element.style.padding = "20px";
    let even1 = element.nextElementSibling.nextElementSibling;
    even1.style.backgroundColor = "#f092b3";
    even1.style.border = "#c9284b solid 3px";
  }
  num++;
}
