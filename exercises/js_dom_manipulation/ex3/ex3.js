// https://github.com/public-apis/public-apis? 
// Alternative APIs


const submitHandler = (e) => {
    e.preventDefault();
    const data = e.target[0].value; 
    console.log(data);

    fetch(`https://api.isevenapi.xyz/api/iseven/${data}/`)
    .then((res) => res.json())
    .then((data) => {
        main.textContent = `${data.iseven}`
    })
    .catch((err) => console.log(err))
}



console.log("Exercise 3")

const main = document.querySelector("#display-box")

const button = document.querySelector("button")

const form = document.querySelector("form");

form.onsubmit = submitHandler;

button.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
            main.textContent = data.slip.advice;
        })
        .catch(e => console.log(e));
})

