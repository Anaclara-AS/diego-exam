const questions = [
  {
    question: "Horse with bilaterally symmetrical lower motor neuron paresis, reduced tail tone, bilateral ptosis, mydriasis, dysphagia, respiratory noise, tongue dysfunction?",
    options: [
      { text: "A. Rabies", isCorrect: false },
      { text: "B. Botulism", isCorrect: true, explanation: "Botulism causes LMN paralysis with cranial nerve involvement." },
      { text: "C. EPM", isCorrect: false },
      { text: "D. EMND", isCorrect: false }
    ]
  },
  {
    question: "Narcolepsy in dogs. Genetic predisposition in which breeds? (Select all that apply)",
    options: [
      { text: "A. Labrador", isCorrect: true },
      { text: "B. Miniature poodle", isCorrect: false },
      { text: "C. Dachshund", isCorrect: true },
      { text: "D. Doberman", isCorrect: true }
    ]
  },
  {
    question: "Which antibody has been identified in cats with limbic epilepsy (several answers are possible)?",
    options: [
      { text: "A. Anti-GAD65", isCorrect: false },
      { text: "B. Anti-LGI1", isCorrect: true },
      { text: "C. Anti-Caspr2", isCorrect: true },
      { text: "D. Anti-Hu", isCorrect: false }
    ]
  },
  {
    question: "What is the typical age of onset for this juvenile epilepsy syndrome? (Type the answer)",
    options: [
      { text: "", isCorrect: true, userAnswer: "6 months (6 weeks to 18 months)" }
    ]
  }
];

let currentQuestionIndex = 0;

function loadQuestion(index) {
  const questionContainer = document.getElementById('question-container');
  const question = questions[index];
  questionContainer.innerHTML = `
    <div class="question">${question.question}</div>
    ${question.options.map((option, idx) => `
      <button class="option-btn" onclick="selectAnswer(${idx})">${option.text}</button>
    `).join('')}
  `;
}

function selectAnswer(index) {
  const selectedOption = questions[currentQuestionIndex].options[index];
  const feedback = document.getElementById('feedback');
  feedback.innerHTML = selectedOption.isCorrect
    ? `<div class="correct">Correct! ${selectedOption.explanation || ''}</div>`
    : `<div class="incorrect">Incorrect. Budha is still with you! 🪷</div>`;
}

function nextQuestion() {
  currentQuestionIndex++;
  loadQuestion(currentQuestionIndex);
}

function prevQuestion() {
  currentQuestionIndex--;
  loadQuestion(currentQuestionIndex);
}

document.getElementById('next-button').addEventListener('click', nextQuestion);
document.getElementById('prev-button').addEventListener('click', prevQuestion);

loadQuestion(currentQuestionIndex);