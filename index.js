//Ex 7
const h1TextChanger = function () {
    document.getElementById("#h1").innerHTML = "Something Else"
}

//Ex8
function backGroundImage() {
    document.getElementById("#main").style.color = "lightblue"
}

//Ex9
function changeTheFooterAddress() {
    document.getElementById("#address").innerHTML = "Fake address"
}

//Ex10
function addClassToLinks() {
    let amazonLinkClass = document.querySelectorAll("a")
    amazonLinkClass.classList.add("amazon-link")
}
//Ex11  
function toggleImagesDisplay() {
    let imgClass = document.getElementsByClassName(".p1", ".p2", ".p3", ".p4", ".p5")
    imgClass.classList.toggle.display = "none"
  }

//Ex12 Write a function to color the price of each product in a different one every time it's invoked
const color = function () {
    let priceColor = document.getElementsByTagName(".price")
    priceColor.classList.display.color = "orange"
}