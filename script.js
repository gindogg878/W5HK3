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
  console.log(special);
  for (let i = 0; i < special.length; i++) {
    special[i].style.fontSize = "2rem";
  }
  // Part 5

  // Part 6

  // Part 7

  // Part 8

  // Part 9
});
