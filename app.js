const angleInput = document.querySelectorAll(".angleInput")
const buttonInput = document.querySelector("#btn-input")
const output = document.querySelector("#output")
// console.log(angleInput)

function checkTriangle() {
    let sum = 0;
    angleInput.forEach((ele) => {
        sum = sum + Number(ele.value);
    })
    if (sum === 180) {
        output.innerText = "Yes,it is a triangle";
    }
    else {
        output.innerText = "Oh oh! it is not a triangle";
    }
}
buttonInput.addEventListener("click", checkTriangle)
