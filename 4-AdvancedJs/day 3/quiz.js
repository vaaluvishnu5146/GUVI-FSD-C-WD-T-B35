const questions = [
  {
    id: 1,
    question: "Mersal movie hero?",
    options: [
      { title: "Vijakanth", isCorrect: false },
      { title: "Thalapathy vijay", isCorrect: true },
      { title: "Mamooty", isCorrect: false },
      { title: "Surya", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "Capital of India?",
    options: [
      { title: "Bhubaneshwar", isCorrect: false },
      { title: "Chennai", isCorrect: false },
      { title: "Bangalore", isCorrect: false },
      { title: "Delhi", isCorrect: true },
    ],
  },
  {
    id: 3,
    question: "How many types of Heading tags available in HTML?",
    options: [
      { title: "4", isCorrect: false },
      { title: "2", isCorrect: false },
      { title: "6", isCorrect: true },
      { title: "10", isCorrect: false },
    ],
  },
];

const selections = {};

var currentQuestion = 0;
var totalQuestion = questions.length;

// Elements
const curentQuestionText = document.getElementById("currentQuestion");
const totalQuestionText = document.getElementById("totalQuestion");
const optionsContainer = document.getElementById("options_container");
const questionTitleText = document.getElementById("questionTitle");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Attach Event Listeners
prevBtn.addEventListener("click", function (e) {
  if (currentQuestion == 0) {
    return;
  } else {
    currentQuestion -= 1;
    renderNewQuestion(questions[currentQuestion]);
  }
});

nextBtn.addEventListener("click", function (e) {
  console.log("Clicked");
  if (currentQuestion + 1 == totalQuestion) {
    return;
  } else {
    currentQuestion += 1;
    renderNewQuestion(questions[currentQuestion]);
  }
});

function setCurrentQuestion(count) {
  curentQuestionText.innerText = count + 1;
}

function setTotalQuestion(count) {
  totalQuestionText.innerText = count;
}

function renderQuestionTitle(title = "") {
  questionTitleText.innerText = title;
}

function renderCurrentQuestionOption(options = []) {
  options_container.innerHTML = "";
  const optionsBtn = options.map(function (option) {
    return createOptionBtn(option.title);
  });
  options_container.append(...optionsBtn);
}

function createOptionBtn(label = "") {
  const btn = document.createElement("button");
  btn.setAttribute(
    "class",
    "w-full h-[50px] rounded border-[2px] border-blue-400"
  );
  btn.innerText = label;
  btn.addEventListener("click", function (e) {
    removeCurrentActiveOption();
    selections[currentQuestion] = e.target.innerText;
    btn.classList.add("bg-blue-400");
  });
  return btn;
}

function showCurrentSelections() {
  console.log(selections);
}

function renderNewQuestion(data = {}) {
  setCurrentQuestion(currentQuestion);
  setTotalQuestion(totalQuestion);
  renderQuestionTitle(data.question);
  renderCurrentQuestionOption(data.options);
  addActiveOption(selections[currentQuestion]);
}

function removeCurrentActiveOption() {
  optionsContainer
    .querySelector("button.bg-blue-400")
    ?.classList.remove("bg-blue-400");
}

function addActiveOption(label = "") {
  const htmlCollection = optionsContainer.querySelectorAll(
    `#options_container > button`
  );
  htmlCollection.forEach((element) => {
    if (element.innerText === label) {
      element.classList.add("bg-blue-400");
    }
  });
}

(function () {
  renderNewQuestion(questions[currentQuestion]);
})();
