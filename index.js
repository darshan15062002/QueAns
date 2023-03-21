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
];
const question = document.querySelector('.question')
const answer = document.querySelector('.answers')
const submit = document.querySelector('.submit')

var queid = 0
var marks = 0
var correctAns = 0
var wrongAns = 0


const showQuestion = (queid) => {
    question.textContent = data[queid].question
    answer.innerHTML = data[queid].answers.map((item, index) => `
    <div className="answer">
    <input type="radio" name="answer"  value=${item.isCorrect} id=${index} />
    <lable for=answer>${item.answer}</lable>
    </div>
    `).join("")
    isTrue()
}
showQuestion(queid)

function isTrue() {
    answer.addEventListener('click', (e) => {
        console.log(e.target.value);
        isSubmit(e)
    })
}

function isSubmit(e) {
    submit.addEventListener('click', (e) => {
    //     if (e.target.value == 'true') {
    //         marks++
    //         correctAns++
    //         console.log(marks);
    //     }

    //     else {
    //         marks--
    //         wrongAns++
    //     }
    //     queid++
    // })
})
}

