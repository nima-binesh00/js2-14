/*
?We want to make a beautiful text.
todo1: receive a text from the user via a prompt.
todo2: each letter of the given text should pick a random color from the colors array.
todo3: finally display the text in the html file.
*/
const colors = ["red", "aqua", "orange", "purple", "lightgreen"];
let word = prompt("enter");
let num22 = document.querySelector("#word");
for (const element of word) {
  num22.innerHTML += `<span style="color: ${
    colors[Math.floor(Math.random() * 6)]
  };">${element}</span>`;
}
