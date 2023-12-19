"use strict";

// var
const inputDay = document.getElementById("day");
const inputMonth = document.getElementById("month");
const inputYear = document.getElementById("year");
const label = document.querySelectorAll("label");
const input = document.querySelectorAll("input");
const errorMsgD = document.querySelector(".errorMsgD");
const errorMsgM = document.querySelector(".errorMsgM");
const errorMsgY = document.querySelector(".errorMsgY");
const btn = document.getElementById("btn");
const outputDay = document.getElementById("output-d");
const outputMonth = document.getElementById("output-m");
const outputYear = document.getElementById("output-y");
// set date
const today = new Date();
const todayY = today.getFullYear();
const todayM = today.getMonth() + 1;
const todayD = today.getDate();

// event
btn.addEventListener("click", function () {
  let from = new Date(
    `${inputYear.value}/${inputMonth.value}/${inputDay.value}`
  );
  // valid date
  if (today < from) {
    label.forEach((el) => {
      el.style.color = "red";
    });
    input.forEach((el) => {
      el.style.border = "1px solid red";
    });
    errorMsgD.textContent = "Must be a valid day";
    errorMsgM.textContent = "Must be a valid month";
    errorMsgY.textContent = "Must be a valid year";
  } else {
    //   calc date
    let ms = today.getTime() - from.getTime();
    let days = Math.floor(ms / (1000 * 60 * 60 * 24));
    let calcYears = Math.floor(days / 365);
    let calcMonths = Math.floor((days - calcYears * 365) / (365 / 12));
    let calcDays = Math.floor(days - calcYears * 365 - calcMonths * (365 / 12));
    //   render calculated ymd
    outputYear.textContent = calcYears;
    outputMonth.textContent = calcMonths;
    outputDay.textContent = calcDays;
  }
});
