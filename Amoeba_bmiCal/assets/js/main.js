"use strict";

// the get rid of repeated message -- message to be shown -- bmi category
const newMsg = (message) => {
  document.querySelector(".sent-message").textContent = `you are ${message}`;
};

//to get the figure -- bmi value
const bmiMsg = (figure) => {
  document.querySelector(".loading").textContent = Math.round(figure);
  console.log(figure);
};

// change text color depending on bmi score
const colorCode = (color) => {
  document.querySelector(".loading").style.color = color;
  document.querySelector(".loading").style.fontSize = "25px";
  document.querySelector(".loading").style.fontWeight = bold;
};

//click
document.querySelector(".check").addEventListener("click", function () {
  const weight = Number(document.querySelector(".test").value);
  const height = Number(document.querySelector(".testing").value);

  let ftInch = height * 0.3048;
  let ftMm = ftInch * ftInch;

  let bmi = weight / ftMm;

  console.log(bmi);

  if (bmi < 18.5) {
    // console.log("Underweight 🥉");
    bmiMsg(bmi);
    newMsg("Underweight 😩");
    colorCode("red");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    // document.querySelector(".loading").textContent = Math.round(bmi);
    bmiMsg(bmi);
    newMsg("Normal Weight 🏆");
    colorCode("#25564f");

    // console.log("Normal Weight 🏆");
  } else if (bmi >= 25 && bmi <= 29.9) {
    // newMsg("Overweight 🚫");
    bmiMsg(bmi);
    newMsg("Overweight 🚫");
    colorCode("red");
  } else {
    // ("Obese ⚠️");
    bmiMsg(bmi);
    newMsg("Obese ⚠️");
    colorCode("red");
  }
});

// Reset the page
document.querySelector(".reset").addEventListener("click", () => {
  location.reload();
});
