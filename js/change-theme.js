//default theme setting
function setting() {
    const toggle = document.getElementById("turn-dark");
    const URLparameter = location.search.substring(1);
    if (URLparameter == "switch=on") {
        toggle.checked = true;
        DarkTheme();
    } else if (URLparameter == "switch=off") {
        LightTheme();
    } else {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            toggle.checked = true;
            DarkTheme();
        } else {
            LightTheme();
        }
    }
    //change theme
    toggle.addEventListener("change", () => {
        if (toggle.checked == true) {
            DarkTheme();
        } else {
            LightTheme();
        }
    });
    //open menu bar
    const btn = document.getElementById("btn-menu");
    const header = document.querySelector(".header-li");
    const selector = document.querySelector(".selector");
    const selector1 = document.querySelector(".selector").childNodes[1];
    const selector2 = document.querySelector(".selector").childNodes[3];
    btn.addEventListener("click", () => {
        if (btn.value == "MENU") {
            btn.value = "CLOSE";
            header.classList.add("open-menu");
            header.appendChild(selector1);
            header.appendChild(selector2);
        } else {
            btn.value = "MENU";
            header.classList.remove("open-menu");
            selector.appendChild(selector1);
            selector.appendChild(selector2);
        }
    });
}
//turn on light mode
function LightTheme() {
    const link = document.querySelectorAll("a");
    document.body.classList.remove("dark-theme");
    document.logo.src = "../img/light_logo.png";
    link.forEach((x) => {
        x.search = "switch=off";
    });
}
//turn on dark mode
function DarkTheme() {
    const link = document.querySelectorAll("a");
    document.body.classList.add("dark-theme");
    document.logo.src = "../img/dark_logo.png";
    link.forEach((x) => {
        x.search = "switch=on";
    });
}