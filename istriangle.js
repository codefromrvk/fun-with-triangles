const angleInput = document.querySelectorAll(".angleInput")
const buttonInput = document.querySelector("#btn-input")
const output = document.querySelector("#output")
// console.log(angleInput)

function checkTriangle() {
    let sum = 0;
    angleInput.forEach((ele) => {
        console.log((Number(ele.value)))
        if (Number(ele.value) <= 0) {
            sum = 0;
            return;
        }
        sum = sum + Number(ele.value);
    })

    if (sum === 180) {
        output.innerText = "Yes,it is a triangle";
    }
    else if (sum === 0) {
        output.innerText = "Invalid!! You cannot enter value <=0";

    }
    else {
        output.innerText = "Oh oh! it is not a triangle";
    }
}
buttonInput.addEventListener("click", checkTriangle)
