const inputEle = document.querySelectorAll(".inputItem")
const checkbtn = document.querySelector("#get-answer")

function getSumofSquares(a, b) {
    sum = a ** 2 + b ** 2;
    return sum;
}

function getHypotenuse() {
    const sumofSquares = getSumofSquares(Number(inputEle[0].value), Number(inputEle[1].value))
    output.innerText = "The hypotenuse is " + Math.sqrt(sumofSquares);
}

checkbtn.addEventListener("click", getHypotenuse)


