//todo1. Create an index.html file and put four p elements
//todo2. Get the first paragraph by using document.querySelector(tagname)
//todo3. Get each of the paragraph using document.querySelector(#id)
//todo4. Get all the p as nodeList using document.querySelectorAll(tagname)
//todo5. Loop through the nodeList and get the text content of each paragraph
//todo6. Set a text content to the fourth paragraph
//todo7. Set id and class attribute for all the paragraphs using different methods
//todo8. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
//todo9. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

const p = document.querySelector("p");
console.log(p);
// ..........................................................
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
const p4 = document.querySelector("#p4");
console.log(p1, p2, p3, p4);
// ........................................................................................
let pp = document.querySelectorAll("p");
console.log(pp);
// .............................................................
for (const element of pp) {
  console.log(element);
}
// .....................................................
p4.textContent = "nima(p4)";
// ..........................................................
num = 11;
for (const element of pp) {
  element.id = `pra${num}`;
  element.className = `class${num}`;
  num++;
  console.log(element);
}
// .................................................................
let numbr = ["double", "dotted", "dashed", "solid"];

for (const element of pp) {
  element.style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 255 + 1
  )}, ${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(
    Math.random() * 255 + 1
  )})`;
  element.style.fontSize = `${Math.floor(Math.random() * 20 + 15)}px`;

  element.style.border = ` ${numbr[Math.floor(Math.random() * 4)]} 
  rgb(${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(
    Math.random() * 255 + 1
  )}, ${Math.floor(Math.random() * 255 + 1)})
  ${Math.floor(Math.random() * 9 + 3)}px `;
}
// .................................numbr..................numbr...................................................
numno = 1;
for (const element of pp) {
  if (numno % 2 == 1) {
    element.style.color = "green";
  } else if (numno % 2 == 0) {
    element.style.color = "red";
  }
  numno++;
}
