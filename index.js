const data = [
    {
        "id": 1,
        "question": "What are some signs that someone may be addicted to narcotics?",
        "answers": [
            { answer: "Experiencing occasional mood swings", isCorrect: false },
            { answer: "Being more productive than usual", isCorrect: false },
            { answer: "Eating healthy and exercising regularly", isCorrect: false },
            { answer: "Neglecting responsibilities and relationships", isCorrect: true },
        ]
    },
    {
        "id": 2,
        "question": "What are some potential risks of using narcotics?",
        "answers": [
            { answer: "Weight loss and improved mental clarity", isCorrect: false },
            { answer: "Stronger immune system and lower blood pressure", isCorrect: false },
            { answer: "Overdose and addiction", isCorrect: true },
            { answer: "Improved coordination and balance", isCorrect: false },
        ]
    },
    {
        "id": 3,
        "question": "What is the difference between opioids and opiates?",
        "answers": [
            { answer: "Opioids are synthetic, while opiates come from the opium poppy", isCorrect: true },
            { answer: "Opioids are less addictive than opiates", isCorrect: false },
            { answer: "Opiates are only used for pain relief, while opioids are used for other purposes", isCorrect: false },
            { answer: "There is no difference between opioids and opiates", isCorrect: false }
        ]
    },
    {
        "id": 4,
        "question": "What are some non-pharmacological alternatives to managing pain?",
        "answers": [
            { answer: "Drinking alcohol", isCorrect: false },
            { answer: "Acupuncture and massage therapy", isCorrect: true },
            { answer: "Taking more narcotics", isCorrect: false },
            { answer: "Smoking cigarettes", isCorrect: false }
        ]
    },
    {
        "id": 5,
        "question": "What is Narcan used for?",
        "answers": [
            { answer: "To relieve pain", isCorrect: false },
            { answer: "To help with sleep", isCorrect: false },
            { answer: "To reverse an opioid overdose", isCorrect: true },
            { answer: "To induce a euphoric state", isCorrect: false }
        ]
    },
    {
        "id": 6,
        "question": "What is the most commonly abused prescription narcotic?",
        "answers": [
            { answer: "Fentanyl", isCorrect: false },
            { answer: "Hydrocodone", isCorrect: false },
            { answer: "Oxycodone", isCorrect: true },
            { answer: "Morphine", isCorrect: false },
        ]
    },
    {
        "id": 7,
        "question": "What are some common signs of drug abuse?",
        "answers": [
            { "answer": "Changes in behavior or mood", "isCorrect": true },
            { "answer": "Increased appetite", "isCorrect": false },
            { "answer": "Decreased energy", "isCorrect": false },
            { "answer": "Improved physical appearance", "isCorrect": false }
        ]
    },
    {
        "id": 8,
        "question": "What are some ways to prevent drug abuse?",
        "answers": [
            { "answer": "Education and awareness", "isCorrect": true },
            { "answer": "Isolation and loneliness", "isCorrect": false },
            { "answer": "Negative reinforcement", "isCorrect": false },
            { "answer": "Lack of access to drugs", "isCorrect": false }
        ]
    },
    {
        "id": 9,
        "question": "What should you do if you suspect someone is abusing drugs?",
        "answers": [
            { "answer": "Talk to them and express your concerns", "isCorrect": true },
            { "answer": "Ignore the problem and hope it goes away", "isCorrect": false },
            { "answer": "Take matters into your own hands and force them to quit", "isCorrect": false },
            { "answer": "Encourage them to continue using drugs responsibly", "isCorrect": false }
        ]
    },
    {
        "id": 10,
        "question": "What are some possible consequences of drug abuse?",
        "answers": [
            { "answer": "Addiction, health problems, legal trouble", "isCorrect": true },
            { "answer": "Improved mental health and creativity", "isCorrect": false },
            { "answer": "Better relationships with friends and family", "isCorrect": false },
            { "answer": "Improved work performance", "isCorrect": false }
        ]
    }, {
        "id": 11,
        "question": "What is the difference between physical dependence and addiction?",
        "answers": [
            { "answer": "Physical dependence is a biological state, while addiction is a psychological disorder", "isCorrect": true },
            { "answer": "Physical dependence only affects the body, while addiction affects the mind and body", "isCorrect": false },
            { "answer": "Physical dependence is easy to treat, while addiction is difficult to treat", "isCorrect": false },
            { "answer": "Physical dependence is temporary, while addiction is permanent", "isCorrect": false }
        ]
    },
    {
        "id": 12,
        "question": "What is the most commonly abused illicit drug in the United States?",
        "answers": [
            { "answer": "Marijuana", "isCorrect": true },
            { "answer": "Cocaine", "isCorrect": false },
            { "answer": "Heroin", "isCorrect": false },
            { "answer": "Methamphetamine", "isCorrect": false }
        ]
    }, {
        "id": 13,
        "question": "What is the most common way that people start using drugs?",
        "answers": [
            { "answer": "Experimentation", "isCorrect": true },
            { "answer": "Peer pressure", "isCorrect": false },
            { "answer": "Stress", "isCorrect": false },
            { "answer": "Mental illness", "isCorrect": false }
        ]
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
let count = 0


const showQuestion = (queid) => {
    selectAns = null
    que.textContent = data[queid].question

    answer.innerHTML = data[queid].answers.map((item, index) => `
    <div className="answer">
    <input type="radio" name="answer" id="answer"  value=${item.isCorrect} id=${index} >
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

            wrongAns++
        }
        queid = Math.floor(Math.random() * data.length)

        console.log(marks);
        if (count < 10) {
            showQuestion(queid)
            count++
        }
        else {
            count = 0
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
