// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

/*
var nara = document.getElementById("userCountry");
var User = nara.options[nara.selectedIndex].value;
*/

let select = document.querySelector("#userCountry");

const userC = "country";

function saveC() {
  localStorage.setItem(userC, select.value);
}

function getC() {
  select.addEventListener("change", saveC);
}

function init() {
  getC();
}

init();
