const quizData = [
    {
        question: "India's first metro railway service in kolkata was started in the year?",
        a: "1984",
        b: "1992",
        c: "1990",
        d: "1995",
        correct: "a",
    },
    {
        question: "India's first all women Post Office is located at",
        a: "Munbai",
        b: "Delhi",
        c: "Chennai",
        d: "Patna",
        correct: "b",
    },
    {
        question: "Mother Teresa received Nobel Peace Prize in the year",
        a: "1979",
        b: "1980",
        c: "1982",
        d: "1985",
        correct: "a",
    },
    {
        question: "In which country Mother Teresa was born",
        a: "Germany",
        b: "Hungary",
        c: "Macedonia",
        d: "Solvakia",
        correct: "c",
    },
    {
        question: "The National Stock Exchange of India is located at?",
        a: "Delhi",
        b: "Chennai",
        c: "Kolkata",
        d: "Mumbai",
        correct: "d",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
