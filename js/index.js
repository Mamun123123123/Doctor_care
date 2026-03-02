let ul = document.querySelector("#menu")
let login = document.querySelector("#login-button")
let mobile_menu = document.querySelector("#mobile-menu-button")

mobile_menu.addEventListener("click",()=>{

    if (ul.classList.contains("hidden")) {
        ul.classList.remove("hidden")
        login.classList.remove("hidden")
    } else {
        ul.classList.add("hidden")
        login.classList.add("hidden")
    }

})