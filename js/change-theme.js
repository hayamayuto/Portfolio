var parameter = location.search;
var link = document.getElementsByName("link");

window.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById("turn-dark");

  //add URL parameter to link
  for (let i = 0; i < link.length; ++i) {
    document.getElementsByName("link")[i].href += "?switch=on";
  }

  if (parameter == "") {
    //default theme setting
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      toggle.checked = true;
      DarkTheme();
    }else{
      toggle.checked = false;
      LightTheme();
    }
  } else if (parameter == "?switch=on") {
    toggle.checked = true;
    DarkTheme();
  } else if(parameter == "?switch=off"){
    LightTheme();
    toggle.checked = false;
  } else {
    alert("Error：URLパラメータが変更されています/URL parameter has been changed");
    location.search = "";
    window.location.reload;
  }
  //when toggle button is changed
  toggle.addEventListener("change", () => {
    if (toggle.checked == true) {
      DarkTheme();
    } else {
      LightTheme();
    }
  });
});

//turn on light mode
function LightTheme(){
  document.body.classList.remove("dark-theme");
  document.logo.src = "../img/light_logo.png";
  for (let i = 0; i < link.length; ++i) {
    document.getElementsByName("link")[i].href = link[i].href.replace('?switch=on', '?switch=off');
  }
}

//turn on dark mode
function DarkTheme(){
  document.body.classList.add("dark-theme");
  document.logo.src = "../img/dark_logo.png";
  for (let i = 0; i < link.length; ++i) {
    document.getElementsByName("link")[i].href = link[i].href.replace('?switch=off', '?switch=on');
  }
}
