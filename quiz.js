const quizData = [
  {
    question:
      "Which one of the following is the primary source of progesterone in the later stages of pregnancy?",
    a: "Fetus",
    b: "Endometrium",
    c: "Corpus luteum",
    d: "Placenta",
    correct: "d",
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
    question: "Which hormone is the corpus luteum responsible for producing?",
    a: "Oestrogen",
    b: "Progesterone",
    c: "FHS",
    d: "Luteinizing hormone",
    correct: "b",
  },
  {
    question:
      "Which of the following symptoms indicate that a woman is about to ovulate?",
    a: "Decrease in basal body temperature",
    b: "Increase in basal body temperature",
    c: "Thickening of cervical mucous",
    d: "None of the above",
    correct: "b",
  },
  {
    question: "How long can you wear a tampon?",
    a: "1-2 hrs",
    b: "3-4 hrs",
    c: "5-6 hrs",
    d: "upto 8 hrs",
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
