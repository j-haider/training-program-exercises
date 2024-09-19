console.log("Exercise 2")

const text = [
    document.getElementById("text1").innerText,
    document.getElementById("text2").innerText,
    document.getElementById("text3").innerText
]

const buttonsList = document.getElementById("button-row").children;
console.log(buttonsList)
for (let i = 0; i < 3; i++) {
    const button = buttonsList[i];
    button.addEventListener("mouseout", (_) => {
        document.getElementById("display-box").textContent = text[i]
    })
}
const main = document.querySelector("#display-box")

