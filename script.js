const startButton = document.getElementById('start-btn')
const quizBox = document.getElementById('question-section')
const nextButton = document.getElementById('next-btn')
const questionElement = document.getElementById('question')
const answerOption = document.getElementById('option-section')

let shuffleQuestions, currentIndex

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentIndex++
    nextQuestion()
})

function startQuiz() {
    startButton.classList.add('hide')
    quizBox.classList.remove('hide')
nextButton.classList.remove('hide')
shuffleQuestions = questions.sort(() => Math.random() - .5)
currentIndex = 0
nextQuestion()
}

function nextQuestion() { 
    resetState()
    showQuestion(shuffleQuestions[currentIndex]) 
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerOption.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerOption.firstChild) {
        answerOption.removeChild
        (answerOption.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerOption.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffleQuestions.length > currentIndex +1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element) 
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What is the capital of Austria?',
        answers: [
            {text: 'Prague', correct: false},
            {text: 'Vienna', correct: true},
            {text: 'Salzburg', correct: false},
            {text: 'Budapest', correct: false},
        ]
    },
    {
        question: 'What is the capital of Australia?',
        answers: [
            {text: 'Sydney', correct: false},
            {text: 'Perth', correct: false},
            {text: 'Canberra', correct: true},
            {text: 'Melbourne', correct: false},
        ]
    },
    {
        question: 'What is the capital of Peru?',
        answers: [
            {text: 'Lima', correct: true},
            {text: 'La Paz', correct: false},
            {text: 'Santiago', correct: false},
            {text: 'Cali', correct: false},
        ]
    },

]