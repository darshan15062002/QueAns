const data = [
    {
        id: 1,
        question: "Which of these fish is actually a fish?",
        answers: [
            { answer: "swordfish", isCorrect: true },
            { answer: "jellyfish", isCorrect: false },
            { answer: "starfish", isCorrect: false },
            { answer: "crayfish", isCorrect: false },
        ],
    },
    {
        id: 2,
        question: "A flutter is a group of:",
        answers: [
            { answer: "bees", isCorrect: false },
            { answer: "penguins", isCorrect: false },
            { answer: "butterflies", isCorrect: true },
            { answer: "camels", isCorrect: false },
        ],
    },
    {
        id: 3,
        question: "A group of which animals is referred to as a wake?",
        answers: [
            { answer: "bats", isCorrect: false },
            { answer: "vultures", isCorrect: true },
            { answer: "ants", isCorrect: false },
        ],
    },
    {
        id: 4,
        question: "Which of these fish is actually a fish?",
        answers: [
            { answer: "swordfish", isCorrect: true },
            { answer: "jellyfish", isCorrect: false },
            { answer: "starfish", isCorrect: false },
            { answer: "crayfish", isCorrect: false },
        ],
    },
    {
        id: 5,
        question: "Which of these fish is actually a fish?",
        answers: [
            { answer: "swordfish", isCorrect: true },
            { answer: "jellyfish", isCorrect: false },
            { answer: "starfish", isCorrect: false },
            { answer: "crayfish", isCorrect: false },
        ],
    },
    {
        id: 6,
        question: "Which of these fish is actually a fish?",
        answers: [
            { answer: "swordfish", isCorrect: true },
            { answer: "jellyfish", isCorrect: false },
            { answer: "starfish", isCorrect: false },
            { answer: "crayfish", isCorrect: false },
        ],
    }
    , {
        id: 7,
        question: "Which of these fish is actually a fish?",
        answers: [
            { answer: "swordfish", isCorrect: true },
            { answer: "jellyfish", isCorrect: false },
            { answer: "starfish", isCorrect: false },
            { answer: "crayfish", isCorrect: false },
        ],
    }
];
const que = document.querySelector('.question')
const answer = document.querySelector('.answers')
const submit = document.querySelector('.submit')
const result = document.querySelector('.result')
const game = document.querySelector('.game')
const score = document.querySelector('.score')
const correct = document.querySelector('.correct')
const wrong = document.querySelector('.wrong')
const playAgain = document.querySelector('.playAgain')


let queid = 0
let marks = 0
let correctAns = 0
let wrongAns = 0
let selectAns;


const showQuestion = (queid) => {
    selectAns = null
    que.textContent = data[queid].question
    answer.innerHTML = data[queid].answers.map((item, index) => `
    <div className="answer">
    <input type="radio" name="answer"  value=${item.isCorrect} id=${index} />
    <lable for=answer>${item.answer}</lable>
    </div>
    `).join("")
    isTrue()
}


function isTrue() {
    answer.querySelectorAll("input").forEach((el) => {
        el.addEventListener('click', (e) => {
            selectAns = e.target.value
        })
    })
}



submit.addEventListener('click', (e) => {
    console.log(e.target.value);
    if (selectAns != null) {
        if (selectAns == 'true') {
            marks++
            correctAns++

        }
        else {
            marks--
            wrongAns++
        }
        queid++

        console.log(marks);
        if (queid < 7) {
            showQuestion(queid)
        }
        else {
            result.style.display = 'block'
            game.style.display = 'none'
            if (marks < 0) {
                marks = 0
            }
            score.textContent = `Totle Score :-${marks}`
            wrong.textContent = `Wrong Answers :- ${wrongAns}`
            correct.textContent = `Correct Answers :- ${correctAns}`
            playAgain.addEventListener('click', () => {

                marks = 0
                correctAns = 0
                wrongAns = 0
                result.style.display = 'none'
                game.style.display = 'flex'
                queid = 0
                showQuestion(queid)
            })


        }
    }
    else {
        alert('please select option')
    }


})


showQuestion(queid)
