var setting = document.querySelector(".setting__menu")
var btnDark = document.getElementById("btn__dark")
function settingToggle(){
    setting.classList.toggle("setting__menu__height")
}
btnDark.onclick = function(){
    btnDark.classList.toggle("btn__dark__on")
    document.body.classList.toggle("dark__theme")

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }else{
        localStorage.setItem("theme", "light");
    }
}

if(localStorage.getItem("theme") == "light"){
    btnDark.classList.remove("btn__dark__on")
    document.body.classList.remove("dark__theme")
}else if(localStorage.getItem("theme") == "dark"){
    btnDark.classList.add("btn__dark__on")
    document.body.classList.add("dark__theme")
}else{
    localStorage.setItem("theme", "light");
}

localStorage.setItem("theme")