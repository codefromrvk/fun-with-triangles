const angleInput = document.querySelectorAll(".angleInput")
const buttonInput = document.querySelector("#btn-input")
console.log(angleInput)

function checkTriangle() {
    let sum = 0;
    angleInput.forEach((ele) => {
        sum = sum + Number(ele.value);
    })
    console.log(sum)
}
buttonInput.addEventListener("click", checkTriangle)
