let randomNumber1 = Math.floor((Math.random() * 6) + 1);

let randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png = dice6.png

let randomImageSource = "images/" + randomDiceImage; //images/dice1.png = images/dice6.png

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

let randomNumber2 = Math.floor((Math.random() * 6) + 1);

let randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png = dice6.png

let randomImageSource2 = "images/" + randomDiceImage2; //images/dice1.png = images/dice6.png

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩Player 1 Wins !";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "🚩Player 2 Wins !";
}
else {
  document.querySelector("h1").textContent = "Draw !";
}