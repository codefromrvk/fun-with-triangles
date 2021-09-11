const inputEl = document.querySelectorAll(".input-ele")
const checkBtn = document.querySelector("#get-area")
const output = document.querySelector("#output")


function getArea(a, b) {
    let area = (0.5 * (inputEl[0].value) * (inputEl[1].value));
    output.innerText = "The area is " + area;
}


checkBtn.addEventListener("click", getArea)