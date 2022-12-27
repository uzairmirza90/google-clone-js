
// Access to Dom Elements
let toggle = document.getElementById("toggle");
let dark = document.querySelector(".dark");
let footer = document.querySelector(".footer");
let searchField = document.querySelector(".search-field");
let btn = document.querySelector(".btn");
let btn1 = document.querySelector(".btn1");
let img = document.querySelector("img");
let findOut = document.querySelector(".find-out");
let languages = document.querySelector(".languages");
let hrBreak = document.querySelector(".break");
let googleSearch = document.querySelector("#search");

// Add Search Functionality
function search(){
    let input = searchField.value;
    window.location.href = "https://www.google.com/search?q=" + input + "&oq=" + input + "&aqs=chrome..69i57j46i67i433j0i67i433j46i67i433j0i67i433j0i67j46i67i199i465j46i67j0i67i433j46i67.1062j0j7&sourceid=chrome&ie=UTF-8";
}

googleSearch.addEventListener("click", function(){
    if(searchField.value == ""){
        console.log("Please Type Something!!!")
    }else{
        search();
    }
})

// Dark Mode Toggle Save in Local Storage
let saveDarkMode = localStorage.getItem("darkMode");
if (saveDarkMode === "enabled") {
  toggle.checked = true;
  darkModeOn();
}

// Toggle Switch On or Off
toggle.addEventListener("click", function () {
  saveDarkMode = localStorage.getItem("darkMode");
  if (toggle.checked == true) {
    darkModeOn();
  } else {
    darkModeOff();
  }
});

// Dark Mode ON
function darkModeOn() {
  dark.style.backgroundColor = "rgb(36, 35, 35)";
  footer.style.backgroundColor = "rgb(31,30,30)";
  dark.style.color = "lightgrey";
  footer.style.color = "grey";
  searchField.style.backgroundColor = "rgb(36, 35, 35)";
  searchField.style.color = "white";
  searchField.style.border = "1px solid rgb(95, 95, 95)";
  btn.style.backgroundColor = "rgb(53,52,52)";
  btn1.style.backgroundColor = "rgb(53,52,52)";
  btn.style.color = "lightgrey";
  btn1.style.color = "lightgrey";
  img.src = "menu (2).png";
  findOut.style.color = "rgb(39, 124, 223)";
  languages.style.color = "rgb(39, 124, 223)";
  hrBreak.style.border = "1px solid rgb(48, 48, 48)";
  localStorage.setItem("darkMode", "enabled");
}

// Dark Mode Off
function darkModeOff() {
  dark.style.backgroundColor = "white";
  footer.style.backgroundColor = "rgb(238, 238, 238)";
  dark.style.color = "black";
  footer.style.color = "rgb(102, 100, 100)";
  searchField.style.backgroundColor = "white";
  searchField.style.color = "black";
  btn.style.backgroundColor = "rgb(248, 248, 248)";
  btn1.style.backgroundColor = "rgb(248, 248, 248)";
  btn.style.color = "rgb(88, 88, 88)";
  btn1.style.color = "rgb(88, 88, 88)";
  img.src = "menu.png";
  findOut.style.color = "blue";
  languages.style.color = "blue";
  hrBreak.style.border = "1px solid rgb(223, 223, 223)";
  localStorage.setItem("darkMode", null);
}
