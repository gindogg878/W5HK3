let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  const newTitle = document.querySelector("#main-title");
  // console.log(newTitle);
  newTitle.textContent = "Dom Torreto & Family's Page";

  // Part 2
  const body = document.querySelector("body");
  body.style.backgroundColor = "#F2CD5C";
  // Part 3
  const faves = document.querySelector("#favorite-things");
  faves.removeChild(faves.lastElementChild);
  // Part 4
  const special = document.querySelectorAll(".special-title");
  // console.log(special);
  for (let i = 0; i < special.length; i++) {
    special[i].style.fontSize = "2rem";
  }
  // Part 5
  const raced = document.querySelectorAll("#past-races li");
  // console.log(raced);
  for (let i = 0; i < raced.length; i++) {
    if (raced[i].textContent === "Chicago") {
      raced[i].textContent = "";
    }
  }
  // Part 6
  const raceUL = document.querySelector("#past-races");
  const newLi = document.createElement("li");
  newLi.textContent = "Boston";
  console.log(newLi);
  raceUL.append(newLi);
  // Part 7
  const newDiv = this.createElement("div");
  newDiv.setAttribute("class", "blog-post");
  console.log(newDiv);
  newLi.appendChild(newDiv);
  const newH2 = document.createElement("h2");
  newH2.textContent = "aka BeanTown";
  newDiv.appendChild(newH2);
  const newP = document.createElement("p");
  newP.textContent = "Some consider them Title Town.";
  newDiv.appendChild(newP);
  // Part 8
  const theTitle = document.getElementById("quote-title");
  console.log(theTitle);
  theTitle.addEventListener("click", (e) => {
    randomQuote();
  });
  // Part 9
});
