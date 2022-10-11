
// toggle menu bar
let toggleMenu = document.querySelector(".toggle-menu");
let aside = document.querySelector("main aside");

toggleMenu.addEventListener("click", () => {
    aside.classList.toggle("hide")
})
//end of toggle menu


// table in home page
let teamImgs = document.querySelectorAll(".team-imgs .img")
teamImgs.forEach(img => {
    img.addEventListener("click", () => {
        teamImgs.forEach(ele => {
            ele.classList.remove("index")
        })
        img.classList.add("index")
    })
})


// header to be fixed
window.onscroll = () => {
    if (window.scrollY >= 400) {
        aside.classList.add("fixed")
    }
    if (window.scrollY == 0) {
        aside.classList.remove("fixed")
    }
}

