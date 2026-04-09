const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language",
    ],
    correct: 0,
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JavaScript", "CSS", "Python"],
    correct: 2,
  },
  {
    question: "Which language is used for web page interactivity?",
    options: ["C++", "Java", "JavaScript", "PHP"],
    correct: 2,
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<p>"],
    correct: 1,
  },
  {
    question: "Which CSS property changes text color?",
    options: ["font-style", "text-color", "color", "background"],
    correct: 2,
  },
  {
    question: "Which symbol is used for ID selector in CSS?",
    options: [".", "#", "*", "@"],
    correct: 1,
  },
  {
    question: "Which method is used to select an element in JavaScript?",
    options: [
      "getElementById()",
      "queryStyle()",
      "fetchElement()",
      "selectNode()",
    ],
    correct: 0,
  },
  {
    question: "Which HTML tag is used to insert an image?",
    options: ["<img>", "<image>", "<src>", "<pic>"],
    correct: 0,
  },
  {
    question: "Which CSS property is used for spacing inside an element?",
    options: ["margin", "padding", "border", "spacing"],
    correct: 1,
  },
  {
    question: "Which JavaScript keyword is used to declare a variable?",
    options: ["int", "string", "let", "define"],
    correct: 2,
  },
];

let qnsNumberEl = document.getElementById("qnsNumber");

let qnsTimer = document.getElementById("qnsTimer");

let qns = document.getElementById("qns");

let options = document.getElementById("options");

let nextButton = document.getElementById("nextBtn");

let currentIndex = 0;

let score = 0;

let selectedAnswer = null;

function loadQns() {
  let currentQns = quizData[currentIndex];

  qnsNumberEl.innerText = `Qns ${currentIndex + 1}/${quizData.length}`;

  qns.innerText = currentQns.question;

  options.innerHTML = "";

  currentQns.options.forEach((opt, index) => {
    let col = document.createElement("div");

    col.classList.add("col-md-6");

    let button = document.createElement("button");

    button.innerText = opt;

    button.classList.add("btn", "btn-outline-primary", "option-btn");

    button.onclick = function () {
      selectedAnswer = index;
      nextQns();
    };

    options.appendChild(col);

    col.appendChild(button);
  });
}

loadQns();

function nextQns() {
  if (selectedAnswer === quizData[currentIndex].correct) {
    score++;
  }

  if (currentIndex < quizData.length - 1) {
    currentIndex++;
    selectedAnswer = null;
    loadQns();
  } else {
    quizResult();
  }
}

function quizResult() {
  const quizResultEl = document.getElementById("quiz-result");

  quizResultEl.innerHTML = `
  <h3 class="text-center "> Quiz Result 🎉</h3>
  <h4 class="text-center">Result:-  ${score}/${quizData.length} </h4>
  `;
}
