console.log("Yay! The javascript is running")

const nameElem = document.getElementById("name");
nameElem.innerText   = "Syed Jari Haider";

const bigAndGreen = document.getElementById("bigger");
bigAndGreen.style.color = "green"
bigAndGreen.style.fontSize = "x-large" 

const img = document.getElementsByTagName("img");
const catImg = "https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/6/2022/12/shutterstock_781327003-1-768x512.jpg"
img[0].src = catImg

const squares = document.getElementsByClassName("square");
for (const square of squares) {
    if (square.className.includes("hidden")) {
        square.classList.remove("hidden");
    }
}