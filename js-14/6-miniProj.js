//-Develop the following application, use the following HTML elements to get started with.

//? watch the html code inside miniProj.html
//? Apply all the styles and functionality using JavaScript only.

//todo1: color of the year text in h1 (2020) is changing every 1 second
//todo2: Completed challenge has background green
//todo3: Ongoing challenge has background yellow
//todo4: Coming challenges have background red
let numtime = setInterval(() => {
  document.querySelector("h1").style.color = `rgb(${Math.floor(
    Math.random() * 255 + 1
  )}, ${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(
    Math.random() * 255 + 1
  )})`;
}, 1000);
let woww = document.querySelectorAll("li");
for (const element of woww) {
  let num88 = element.textContent.split(" ");
  num44 = num88.map((q) => {
    if (q == "Done") {
      return (element.style.backgroundColor = "green");
    } else if (q == "Ongoing") {
      return (element.style.backgroundColor = "yellow");
    } else if (q == "Coming") {
      return (element.style.backgroundColor = "red");
    } else return q;
  });

  element.innerHTML = num44;
}
