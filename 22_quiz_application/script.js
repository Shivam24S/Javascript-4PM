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
    options: ["img", "image", "src", "pic"],
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


const image = [

  "image-1 url",
  "image-1 url",
  "image-1 url",
  "image-1 url",

]



// using api
// let quizData

// async function fetchQuizData(){
//   try {

//     const data = await fetch("url")

//     const res = data.json()

//     quizData = res
    
//   } catch (error) {
    
//   }
// }


// fetchQuizData()




// console.log(quizData)

let qnsNumberEl = document.getElementById("qnsNumber");

let qnsTimer = document.getElementById("qnsTimer");

let qns = document.getElementById("qns");

let options = document.getElementById("options");

let nextButton = document.getElementById("nextBtn");

let currentIndex = 0;

let score = 0;

let selectedAnswer = null;

let userAnswer = [];

let timer;

let timeLeft = 30;

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

      userAnswer.push({
        question: currentQns.question,
        selected: index,
        correct: currentQns.correct,
        options: currentQns.options,
      });

      nextQns();
    };

    startTimer();

    options.appendChild(col);

    col.appendChild(button);
  });
}

loadQns();

function startTimer() {
  let timerEl = document.getElementById("timer");

  clearInterval(timer);

  timeLeft = 30;

  timerEl.innerText = `Time Left ${timeLeft}`;

  timer = setInterval(() => {
    timeLeft--;
    timerEl.innerText = `Time Left ${timeLeft}`;

    if (timeLeft <= 0) {
      userAnswer.push({
        question: quizData[currentIndex].question,
        selected: null,
        correct: quizData[currentIndex].correct,
        options: quizData[currentIndex].options,
      });

        nextQns();
    
    }
  }, 1000);
}

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
  const quizResultEl = document.querySelector(".quiz-card");

  quizResultEl.innerHTML = `
  <h3 class="text-center "> Quiz Result 🎉</h3>
  <h4 class="text-center">Result:-  ${score}/${quizData.length} </h4>

  <div  class="mt-3" >

  <h3  class="text-center" >Review Summary</h3>

  <ul class="list-group" >
  ${userAnswer.map(
    (ans, index) => `
    
    <li class="list-group-item">

    <h5 class="text-center"> Question No-${index + 1} :- ${ans.question}</h5>
    <br>
    <h6 class="text-center">Your Answer :- ${ans.selected !== null ? ans.options[ans.selected] : "not answered"}  </h6>
    <br>
    <h6 class="text-center" >Correct Answer :- ${ans.options[ans.correct]}</h6>
    
    </li>
    
    
    `,
  )}
  </ul>

  </div>



  `;
}
