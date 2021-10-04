const quizData = [
  {
    question: "Which hormone is the Corpus Luteum responsible for producing?",
    a: "FSH",
    b: "Estrogen",
    c: "LH",
    d: "Progesterone",
    correct: "d",
  },
  {
    question: "Primate female reproductive cycle is called",
    a: "menstrual cycle",
    b: "water cycle",
    c: "blood cycle",
    d: " ovarian cycle",
    correct: "a",
  },
  {
    question: "At which point in the menstrual cycle is a woman most fertile?",
    a: "Days 1-5",
    b: "Days 9-16",
    c: "Days 17-21",
    d: "Days 22-28",
    correct: "b",
  },
  {
    question:
      "Which of the following will not result in a miss in the menstrual cycle?",
    a: "Fertilization of the egg",
    b: "Anxiety and stress",
    c: "Bad health",
    d: "Gyming",
    correct: "d",
  },
  {
    question:
      "At which stage of the uterine cycle does the menstrual phase occur? ",
    a: "Days 1 to 5",
    b: "Days 5 to 14",
    c: "Days 14 to 28",
    d: "Days 0 to 5",
    correct: "a",
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

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
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
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `;
    }
  }
});
