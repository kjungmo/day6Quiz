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

/*
function loadC(){
  const selected = localStorage.getItem("country");
  if(selected){
    const option = document.querySelector(`option[value="${selected}"]`);
    option.selected = true;
  }
}
function handleChange() {
  const selected = select.value;
  localStorage.setItem("country", selected);
}
*/
function init() {
  getC();
}

init();
