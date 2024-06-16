// pages
const main = document.querySelector("main")
const pink = document.querySelector(".pink")
const blue = document.querySelector(".blue")
const resultPage = document.querySelector(".result")
const yesOpt = document.querySelector(".yas")
const noOpt = document.querySelector(".nah")
const intro = document.querySelector(".intro")

// buttons
const openBtn = document.querySelector("openOne")
const openTwo = document.querySelector("openTwo")
const openThree = document.querySelector("openThree")
const yesBtn = document.querySelector("yes")
const noBtn = document.querySelector("no")

// functions

function toggleMain(){
    if (main.style.display === "none") {
        main.style.display = "block";
    } else {
        main.style.display = "none";
    }
}

function togglePink(){
    if (pink.style.display === "none") {
        pink.style.display = "block";
    } else {
        pink.style.display = "none";
    }

}

function toggleblue(){
    if (blue.style.display === "none") {
        blue.style.display = "block";
    } else {
        blue.style.display = "none";
    }
}

function loveForever(){
    resultPage.style.display = "flex";
    yesOpt.style.display = "flex"
    noOpt.style.display = "none"
    main.style.display = "none";
    intro.style.display = "none";
}

function loveNoMore(){
    resultPage.style.display = "flex";
    yesOpt.style.display = "none"
    noOpt.style.display = "flex"
    main.style.display = "none";
    intro.style.display = "none";
}