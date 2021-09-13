const quizForm = document.querySelector(".quiz-form")
const submitBtn = document.querySelector("#submit-button");
const output = document.querySelector("#output");


const correctAnswers = ['90°', 'right angled', 'isosceles', 'Bingo'];



function calculateScore() {
    let score = 0;
    let index = 0;
    const data = new FormData(quizForm);
    for (let value of data.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    output.innerText = "Your score is " + score;
}
submitBtn.addEventListener("click", calculateScore)